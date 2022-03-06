import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { Paragrafo } from '../../pages/dashboard/styledDashboard';
import { Botoes, DivCard, DivCardTurma, DivDados, DivDias, H1Card, H1Turma } from './styledDadosGerados';
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

	const verificador = () => {};

	useEffect(() => {
		getTurmas();
	}, []);

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
						return (
							<div key={dados.id}>
								<DivDados>
									<H1Turma>{dados.name_turma}</H1Turma>
								</DivDados>
								<DivDias>
									<DivDados>
										<H1Turma>
											{dados.materias.map((dados) => {
												for (let i = 0; i <= dados.qtd_aulas; i++) {
													if (dados.qtd_aulas <= 2) {
														return (
															<div>
																<H1Turma>{dados.name_materia}</H1Turma>
																<H1Turma>{dados.professor}</H1Turma>
															</div>
														);
													} else if (dados.qtd_aulas > 2) {
														return dados.qtd_aulas - 1
													}
												}
												return (
													<DivCard key={dados.id}>
														<DivDados>
															<H1Turma>{dados.name_materia}</H1Turma>
															<H1Turma>{dados.professor}</H1Turma>
														</DivDados>
													</DivCard>
												);
											})}
										</H1Turma>
									</DivDados>
								</DivDias>
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
