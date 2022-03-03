import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from '../../components/urls';
import ToastAnimated, { showToast } from "../../pages/ui-lib"
import { Botoes, BotSalvar, ContainerForm, DivButtons, DivCard, DivDados, DivInfo, InputNumber, InputProf, Options, Selects } from './styledAddDetalhes';

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
				showToast({ type: "success", message: "Matérias adicionadas na turma com sucesso!" });
			})
			.catch((err) => {
				showToast({ type: "error", message: "Sentimos muito, mas não foi possível adicionar as matérias nas turmas" });
			});
	};

	const addDados = (idAula) => {
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
				showToast({ type: "success", message: "Dados salvos na matéria com sucesso!" });
			})
			.catch((err) => {
				showToast({ type: "error", message: "Sentimos muito, mas não foi possível adicionar os dados nas materias" });
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
	}, []);

	return (
		<DivDados>
			<ToastAnimated/>
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

			<DivCard>
				{materias.map((dados) => {
					idMateria.push(dados.id);
					return (
						<div key={dados.id}>
							<h1>{dados.name_materia}</h1>
							<ContainerForm onSubmit={prevent}>
								<InputNumber placeholder="N. de aulas" type="number" onChange={onAula} />
								<InputProf placeholder="Nome do(a) professor(a)" type="text" onChange={onProf} />
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

			<DivButtons>
				<Botoes onClick={voltar}>Voltar</Botoes>
				<Botoes onClick={seguir}>Avançar</Botoes>
			</DivButtons>
		</DivDados>
	);
}
