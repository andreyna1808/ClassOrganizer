import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Materias_url } from '../../components/urls';
import useForm from '../../hooks/useForm';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import ToastAnimated, { showToast } from "../../pages/ui-lib"
import X from '../../components/imgs/delet.png'
import { ContainerFlex, ContainerForm, DivDados, DivInfo, Input, Botoes, MapDados, ContainerRow, BotX } from './styledAddDisciplinas';

export default function AddDisciplinas() {
	const history = useHistory();

	const [ form, onChange, clear ] = useForm({name_materia: ''})
	const [ materias, setMaterias ] = useState([])

	const turma = () => {
		history.push('/add-turma');
	};

  const enviarDisciplinas = (e) => {
    e.preventDefault()
		axios.post(Materias_url, form, {
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

	const listMaterias = () => {
		axios.get(Materias_url, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setMaterias(res.data);
			deletDisciplina();
		})
		.catch((err) => {
			console.log(err.response);
		})
	}

	const deletDisciplina = (id) => {
		axios.delete(`https://dgeneratord.herokuapp.com/materia/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			showToast({ type: "sucess", message: "Materia deletada com sucesso!" });
		})
	}

	useEffect(() => {
		listMaterias()
	}, [ listMaterias() ])

	return (
		<div>
			<H1>Adicionar Disciplinas</H1>
			<Paragrafo>
				Será necessário introduzir algumas informações para que o gerador possa fazer o trabalho dele
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ToastAnimated/>
					<ContainerForm onSubmit={enviarDisciplinas}>
            <p>Matéria:</p>
						<Input required name='name_materia' value={form.name_materia.toLowerCase()} onChange={onChange} type="text" placeholder="Adicione uma matéria por vez" />
						<Botoes onClick={enviarDisciplinas} type='submit'>Adicionar</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <MapDados>
					{materias.map((dis) => {
						return <ContainerRow key={dis.id}>
							<li>{dis.name_materia}</li>
							<BotX onClick={() => deletDisciplina(dis.id)} src={X} href='exemplo'></BotX>
						</ContainerRow>
					})}
          </MapDados>
					<Botoes onClick={turma}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}
