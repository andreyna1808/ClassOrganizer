import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { Botoes, DivCard, DivDias, DivInfo, H1Card, H1Turma } from './styledDadosGerados';
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

	useEffect(() => {
		getTurmas();
	}, []);

	let aulas = [];

	return (
		<All>
			{turma && turma.length > 0 ? (
				turma.map((dados) => {
					let turmas = [];
					turmas.push(dados);
					return (
						<div key={dados.id}>
							{dados.materias.map((dados) => {
								let materia = dados;
								let aula = dados.qtd_aulas;

								while (aula > 0) {
									aulas.push(materia);
									aula = aula - 1;
								}
								console.log(dados);
							})}
							<DivCard>
								<h1>{dados.name_turma}</h1>
								<DivDias>
									<H1Card>Segunda</H1Card>
									<H1Card>Terça</H1Card>
									<H1Card>Quarta</H1Card>
									<H1Card>Quinta</H1Card>
									<H1Card>Sexta</H1Card>
								</DivDias>
								<DivDias>
								{aulas.slice(0,20).map((dados) => {
									return (
										<DivInfo key={dados.id}>
												<H1Turma>{dados.name_materia}</H1Turma>
												<H1Turma>{dados.professor}</H1Turma>
										</DivInfo>
									);
								})}
								</DivDias>
							</DivCard>
						</div>
					);
				})
			) : (
				<p>Carregando</p>
			)}

			<Botoes onClick={dashboard}>voltar ao Dashboard</Botoes>
		</All>
	);
}
