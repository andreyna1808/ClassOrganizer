import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { BASE_URL, Materias_url } from '../../components/urls';
import useForm from '../../hooks/useForm';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, ContainerForm, DivButtons, DivDados, DivInfo, DivVoltar, Options, Selects } from './styledAddDetalhes';

export default function AddDetalhes() {
	const history = useHistory();
	const [ professor, setProfessor ] = useState([])
	const [ materias, setMaterias ] = useState([])
	const [ turmas, setTurmas ] = useState([])

	const [ form, onChange, clear ] = useForm({name_turma: '', turno: '', materias: []})

	const gerador = () => {
		history.push('/gerador');
	};
	const professores = () => {
		history.push('/add-professores');
	};

	const listProfessores = () => {
		axios.get(`${BASE_URL}/professores/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setProfessor(res.data)
		})
		.catch((err) => {
			console.log(err.response);
		})
	}
	const listMaterias = () => {
		axios.get(Materias_url, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setMaterias(res.data)
		})
		.catch((err) => {
			console.log(err.response);
		})
	}
	const listTurma = () => {
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
		listProfessores();
		listMaterias();
		listTurma();
	}, [])

	const dadosParaGerar = (e) => {
		e.preventDefault();
		//Axios.post...
	};

	return (
		<All>
			<H1>Informações Finais</H1>
			<Paragrafo>
				Selecione o(a) professor(a), especificando qual a matéria, turno e turma que ele leciona.
			</Paragrafo>

			<DivDados>
				<ContainerForm onSubmit={dadosParaGerar}>
					<p>Professor(a):</p>
					<Selects required type="checkbox">
						<Options>Escolha um(a) professor(a)</Options>
						{/* Fazer um map nos professores que permita filtrar o
              nome para facilitar o checkbox */}
					</Selects>

					<DivInfo>
						<div>
							<p>Matéria:</p>
							<Selects required type="checkbox">
								<Options>Escolha a(as) matérias do(a) professor(a)</Options>
								{/* Fazer um map das matéria, podendo selecionar mais de uma */}
							</Selects>
						</div>

						<div>
							<p>turno:</p>
							<Selects required type="checkbox">
								<Options>Escolha um turno</Options>
								<Options>Matutino</Options>
								<Options>Vespertino</Options>
								<Options>Noturno</Options>
							</Selects>
						</div>

						<div>
							<p>Turma:</p>
							<Selects required type="checkbox">
								<Options>Escolha a turma do(a) professor(a) para essa(s) matéria(s)</Options>
								{/* Fazer um map das matéria, podendo selecionar mais de uma */}
							</Selects>
						</div>
					</DivInfo>

					<DivButtons>
						<Botoes type="submit">Adicionar</Botoes>
						<Botoes onClick={gerador}>Avançar</Botoes>
					</DivButtons>
				</ContainerForm>
				<DivVoltar>
					<Botoes onClick={professores}>voltar</Botoes>
				</DivVoltar>
			</DivDados>
		</All>
	);
}
