import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from "../../components/urls";
import useForm from "../../hooks/useForm";
import useFormTwo from "../../hooks/useForm";
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import ToastAnimated, { showToast } from "../../pages/ui-lib"
import { Botoes, ContainerFlex, ContainerForm, DivDados, DivInfo, Input, MapDados, Options, Selects } from "./styledAddTurma";

export default function AddTurma() {
	const history = useHistory();

	const professores = () => {
		history.push('/add-professores');
	};
	const disciplinas = () => {
		history.push('/add-disciplinas');
	};

	const [ form, onChange, clear ] = useForm({name_turma: '', turno: '', materias: []})
	const [ formTwo, onChangeTwo, clearTwo ] = useFormTwo({qtd_aulas: 0})
	const [ turmas, setTurmas ] = useState([])
	const [ materias, setMaterias] = useState([])

  const addTurma = (e) => {
    e.preventDefault()

		axios.post(`${BASE_URL}/turmas/`, form, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			showToast({ type: "sucess", message: "Turma Adicionada com sucesso!" });
			clear();
		})
		.catch((err) => {
			showToast({ type: "error", message: "Sentimos muito, mas não foi possível adicionar a turma"});
		})
  }

	const listMaterias = () => {
		axios.get(Materias_url, {
      header: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setMaterias(res.data)
			form.materias.push(res.data)
			console.log(setMaterias);
			console.log(form);
		})
		.catch((err) => {
			console.log(err.response);
		})
	}

	const putMateria = (id) => {
		axios.put(`${BASE_URL}/materia/${id}/aulas/`, formTwo,  {
      header: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {

		})
		.catch((err) => {
			
		})
	}

	useEffect(() => {
		listMaterias()
	}, [materias])


	useEffect(() => {
		listMaterias();
	}, [turmas])


	return (
		<div>
			<H1>Adicionar Turmas</H1>
			<Paragrafo>
        Adicione uma turma, especificando seu turno e grade curricular. Após adicionar,
        salve-a e adicione as demais seguindo os mesmos passos.
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ToastAnimated/>
					<ContainerForm onSubmit={addTurma}>
            <p>turma:</p>
						<Input required type="text" placeholder="Ex.: 3 ano A" value={form.name_turma} onChange={onChange} name='name_turma' />

            <p>turno:</p>
						<Selects required type='text' value={form.turno} onChange={onChange} name='turno' >
              <Options>Escolha um turno</Options>
              <Options value='Matutino' >Matutino</Options>
              <Options value='Vespertino'>Vespertino</Options>
              <Options value='Noturno'>Noturno</Options>
            </Selects>

						<Botoes type='submit'>Cadastrar turma</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <div>
          <MapDados>
						{materias.map((dados, id) => {
							return <div key={dados.id}>
								<p>{dados.name_materia}</p>
							</div>
						})}
          </MapDados>
					<Botoes onClick={professores}>Salvar quantidade</Botoes>
          <p>No quaro ao lado, adicione o número de aulas semanais de cada turma.
            Caso alguma matéria não tenha aulas, insira 0 (zero) no campo ou deixe nulo.</p>
          </div>
					<Botoes onClick={disciplinas}>Voltar</Botoes>
					<Botoes onClick={professores}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}
