import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { Paragrafo } from '../../pages/dashboard/styledDashboard';
import { Botoes, DivCard, DivCardTurma, DivDados, DivDias, H1Card, H1Turma, Info } from './styledDadosGerados';
import Fundo from '../../components/imgs/dados.jpg';
import axios from 'axios';
import { BASE_URL } from '../../components/urls';

export default function DadosGerados() {
	const history = useHistory();
	const [ turma, setTurma ] = useState([]);

	const dashboard = () => {
		history.push('/dashboard');
	};

	const getTurmas = () => {
		axios
			.get(`${BASE_URL}/turmas/`, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				setTurma(res.data);
			});
	};

	const infoTurma = (turma) => {
		return turma
	}

	const infoMateria = (turma) => {
		return turma.materias
	}

	let dadosTurma = turma.map(infoTurma)
	console.log(dadosTurma);

	let dadosMateria = turma.map(infoMateria)
	console.log(dadosMateria);


	useEffect(() => {
		getTurmas();
	}, []);

	let turmas = [];

	return (
		<All>
			<DivCard>
				<DivDias>
					<H1Card>Segunda</H1Card>
					<H1Card>Terça</H1Card>
					<H1Card>Quarta</H1Card>
					<H1Card>Quinta</H1Card>
					<H1Card>Sexta</H1Card>
				</DivDias>
				{turma && turma.length > 0 ? (
					turma.map((dados) => {
						turmas.push(dados);
						console.log(dados.materias);
						return (
							<div key={dados.id}>
								{dados.materias.map((dados) => {
									let aulas = [];

									let materia = dados;
									let aula = dados.qtd_aulas;

									while (aula > 0) {
										aulas.push(materia);
										aula = aula - 1;
									}
									console.log(aulas);	

									const infoMateria = (aulas) => {
										return aulas.name_materia
									}
								
									let dadosTurma = aulas.map(infoMateria)
									console.log(dadosTurma);
									
									return aulas.map((dados) => {
										<div>
											<h1>{dados.name_materia}</h1>
										</div>
									})
								})}
							</div>
						);
					})
				) : (
					<p>Carregando</p>
				)}
			</DivCard>

			<Botoes onClick={dashboard}>voltar ao Dashboard</Botoes>
		</All>
	);
}
