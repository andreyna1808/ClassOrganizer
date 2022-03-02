import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from "../../components/urls";
import useForm from "../../hooks/useForm";
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import ToastAnimated, { showToast } from "../../pages/ui-lib"
import { Botoes, ContainerFlex, ContainerForm, DivDados, DivInfo, Input, MapDados} from "./styledAddProfessor";


export default function AddProfessor() {
	const history = useHistory();

	const detalhesFinais = () => {
		history.push('/add-detalhes');
	};
	const turma = () => {
		history.push('/add-turma');
	};

	const [ form, onChange, clear ] = useForm({name_professor: ''})
	const [ professores, setProfessores ] = useState([])

  const addProfessores = (e) => {
    e.preventDefault()
		axios.post(`${BASE_URL}/professores/`, form, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			showToast({ type: "sucess", message: "Disciplina Adicionada com sucesso!" });
			clear();
		})
		.catch((err) => {
			showToast({ type: "error", message: "Sentimos muito, mas não foi possível adicionar a disciplina"});
		})
  }

	const listProfessores = () => {
		axios.get(`${BASE_URL}/professores/`, {
      header: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setProfessores(res.data)
		})
		.catch((err) => {
			console.log(err.response);
		})
	}

	useEffect(() => {
		listProfessores()
	}, [professores])

	return (
		<div>
			<H1>Cadastrar Professores</H1>
			<Paragrafo>
        Digite o Nome do(a) Professor(a) e clique em adicionar.
        Repita os mesmos passos para adicionar os demais professores.
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ToastAnimated/>
					<ContainerForm onSubmit={addProfessores}>
            <p>Professor(a):</p>
						<Input required type="text" name="name_professor" value={form.name_professor} onChange={onChange} placeholder="Adicione um(a) professor(a) por vez" />
						<Botoes type='submit'>Adicionar</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <MapDados>
					{professores.map((dis) => {
						return <div key={dis.id}>
							<p>{dis.name_professor}</p>
						</div>
					})}          </MapDados>
					<Botoes onClick={turma}>voltar</Botoes>
					<Botoes onClick={detalhesFinais}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}