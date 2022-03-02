import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL } from "../../components/urls";
import useForm from "../../hooks/useForm";
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import ToastAnimated, { showToast } from "../../pages/ui-lib"
import { Botoes, ContainerFlex, ContainerForm, DivDados, DivInfo, Input, MapDados, Options, Selects } from "./styledAddTurma";

export default function AddTurma() {
	const history = useHistory();

	const professores = () => {
		history.push('/add-mat');
	};
	const disciplinas = () => {
		history.push('/add-disciplinas');
	};

	const [ form, onChange, clear ] = useForm({name_turma: '', turno: ''})
	const [ turmas, setTurmas] = useState([])

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

	const listTurmas = () => {
		axios.get(`${BASE_URL}/turmas/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setTurmas(res.data)
		})
		.catch((err) => {
			console.log(err.response);
		})
	}

	useEffect(() => {
		listTurmas();
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
          <MapDados>
						{turmas.map((dados) => {
							return <div key={dados.id}>
								<p>{dados.name_turma}</p>
							</div>
						})}
          </MapDados>
					<Botoes onClick={disciplinas}>Voltar</Botoes>
					<Botoes onClick={professores}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}
