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
	const [dadosTurma, setDadosTurmas] = useState([])

	const gerador = () => {
		history.push('/gerador');
	};
	const voltar = () => {
		history.push('/add-mat');
	};

	const listTurma = () => {
		axios.get(`${BASE_URL}/turmas/`, {
      headers: {
        Authorization: `token ${localStorage.getItem('tokenGerador')}`
      }})
		.then((res) => {
			setDadosTurmas(res.data)
		})
		.catch((err) => {
			console.log(err.response);
		})
	}

	useEffect(() => {
		listTurma();
	}, [dadosTurma])

	const dadosParaGerar = (e) => {
		e.preventDefault();
		//Axios.post...
	};

	return (
		<All>
			<H1>Revisão Geral</H1>
			<Paragrafo> Verifique cuidadosamente e caso ache necessário, pode retonar às páginas anteriores.</Paragrafo>

			<DivDados>
				{dadosTurma.map((dados, index) => {
					return <div key={dados.id}>
						<h1>{dados.name_turma}</h1>
						<h1>{dados.turno}</h1>
						<h1>{dados.materias[index].name_materia}</h1>
						<h1>{dados.materias[index].qtd_aulas}</h1>
						<h1>{dados.materias[index].professor}</h1>
					</div>
				})}

					<DivButtons>
						<Botoes type="submit">Adicionar</Botoes>
						<Botoes onClick={gerador}>Avançar</Botoes>
					</DivButtons>
				<DivVoltar>
					<Botoes onClick={voltar}>voltar</Botoes>
				</DivVoltar>
			</DivDados>
		</All>
	);
}
