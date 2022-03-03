import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from '../../components/urls';
import { FonteH1 } from '../../pages/home/styled';
import { Paragrafo } from '../../pages/login/styleLogin';
import ToastAnimated, { showToast } from '../../pages/ui-lib';
import {
	Botoes,
	BotSalvar,
	ContainerAll,
	ContainerForm,
	DivButtons,
	DivCard,
	DivDados,
	DivEsquerda,
	DivInfo,
	InputNumber,
	InputProf,
	Options,
	Selects,
	TextDados,
	MapDados,
	ContainerRow,
	Span,
} from './styledAddDetalhes';

export default function AddMateriaTurma() {
	const history = useHistory();

	const voltar = () => {
		history.push('/add-turma');
	};
	const seguir = () => {
		history.push('/gerador');
	};

	//Input de adição para adicionar o professor e a quantidade de aula na matéria
	const [ infoAula, setInfoAula ] = useState(0);
	const [ idProf, setIdProf ] = useState('');
	const [ infoTurma, setInfoTurma ] = useState(0);
	const [ calculoTotal, setCalculoTotal] = useState(0)

	//Adicionar o array da materia para adicionar na turma
	const [ idMateria, setIdMateria ] = useState([]);

	//São os visualizadores da página
	const [ turmas, setTurmas ] = useState([]);
	const [ materias, setMaterias ] = useState([]);

	const onAula = (e) => {
		setInfoAula(e.target.value);
	};
	const onProf = (e) => {
		setIdProf(e.target.value);
	};
	const onChange = (e) => {
		setInfoTurma(e.target.value);
	};

	const prevent = (e) => {
		e.preventDefault();
	};

	const valorTotal = () => {
		for(let dados of materias){
			if(calculoTotal <= 20){
				setCalculoTotal(calculoTotal + dados.qtd_aulas)
				let calculo = calculoTotal - 20;
				return alert(`Ainda faltam: ${calculo} para concluir a turma` )
			}
			else {
				return alert('Já passou da quantidade por semana')
			}
		}
	}

	const addMateriaTurma = () => {
		const body = {
			id_materias: idMateria
		};
		axios
			.put(`https://dgeneratord.herokuapp.com/turma/${infoTurma}/materias/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				showToast({ type: 'success', message: 'Matérias adicionadas na turma com sucesso!' });
			})
			.catch((err) => {
				showToast({
					type: 'error',
					message: 'Sentimos muito, mas não foi possível adicionar as matérias nas turmas'
				});
			});
	};

	const addDados = (idAula) => {
		valorTotal();
		const body = {
			qtd_aulas: infoAula,
			professor: idProf
		};
		axios
			.put(`https://dgeneratord.herokuapp.com/materia/${idAula}/complement/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				showToast({ type: 'success', message: 'Dados salvos na matéria com sucesso!' });
			})
			.catch((err) => {
				showToast({
					type: 'error',
					message: 'Sentimos muito, mas não foi possível adicionar os dados nas materias'
				});
			});
	};

	const listMaterias = () => {
		axios
			.get(Materias_url, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				setMaterias(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const listTurmas = () => {
		axios
			.get(`${BASE_URL}/turmas/`, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				setTurmas(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	useEffect(() => {
		listMaterias();
		listTurmas();
	}, [listMaterias()]);

	return (
		<DivDados>
			<FonteH1>Configurar turmas</FonteH1>
			<Paragrafo>Selecione a turma e acrescente o número de aulas da semana para cada matéria</Paragrafo>
			<ToastAnimated />

			<DivInfo>
						<Selects onChange={onChange}>
							<Options value={0}>Selecionar turma</Options>
							{turmas.map((dados) => {
								return (
									<Options key={dados.id} value={dados.id}>
										{dados.name_turma}
									</Options>
								);
							})}
						</Selects>
			</DivInfo>

			<ContainerAll>
				<DivEsquerda>
					<DivCard>
						{materias.map((dados) => {
							idMateria.push(dados.id);
							return (
								<div key={dados.id}>
									<h1>{dados.name_materia}</h1>
									<ContainerForm onSubmit={prevent}>
										<InputNumber required name='infoAula' placeholder="N. de aulas" type="number" onChange={onAula} />
										<InputProf
											name='idProf'
											required
											placeholder="Nome do(a) professor(a)"
											type="text"
											onChange={onProf}
										/>
										<BotSalvar type="submit" onClick={() => addDados(dados.id)}>Salvar</BotSalvar>
									</ContainerForm>
								</div>
							);
						})}
					</DivCard>

					<DivInfo>
						<ContainerForm onSubmit={prevent}>
							<Botoes type="submit" onClick={addMateriaTurma}>
								Adicionar na turma
							</Botoes>
						</ContainerForm>
					</DivInfo>
				</DivEsquerda>
				
				<MapDados>
				{materias.filter((dados) => {
					return dados.qtd_aulas > 0})
				.map((dados) => {
					 return <ContainerRow key={dados.id}>
									<TextDados><Span>Matéria: </Span>{dados.name_materia}</TextDados>
									<TextDados><Span>Aulas: </Span> {dados.qtd_aulas}</TextDados>
									<TextDados><Span>Professor(a): </Span> {dados.professor}</TextDados>
								</ContainerRow>
				})}
				</MapDados>

			</ContainerAll>

			<DivButtons>
				<Botoes onClick={voltar}>Voltar</Botoes>
				<Botoes onClick={seguir}>Avançar</Botoes>
			</DivButtons>
		</DivDados>
	);
}
