import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from '../../components/urls';

export default function AddMateriaTurma() {
	const history = useHistory();

	const voltar = () => {
		history.push('/add-turma');
	};
	const seguir = () => {
		history.push('/add-detalhes');
	};

	//Input de adição para adicionar o professor e a quantidade de aula na matéria
	const [ infoAula, setInfoAula ] = useState(0);
	const [ idProf, setIdProf ] = useState('');

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

	const prevent = (e) => {
		e.preventDefault();
	};

	const addMateriaTurma = (idTurma) => {
		const body = {
			id_materias: idMateria,
		}
		axios.put(`https://dgeneretord.herokuapp.com/turma/${idTurma}/materias/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const addDados = (idAula) => {
		const body = {
			qtd_aulas: infoAula,
			professor: idProf,
		};
		axios
			.put(`https://dgeneretord.herokuapp.com/materia/${idAula}/complement/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				alert('Materia alterada com sucesso');
			})
			.catch((err) => {
				console.log(err.response);
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
				setIdMateria(res.data.id)
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

	useEffect(
		() => {
			listMaterias();
			listTurmas();
			addDados();
		},
		[ turmas, materias, idMateria ]
	);

	return (
		<div>
			{materias.map((dados) => {
				return (
					<div key={dados.id}>
						<h1>{dados.name_materia}</h1>
						<form onSubmit={prevent}>
							<input placeholder="Quantidade de aulas" type="number" onChange={onAula} />
							<input placeholder="Nome do profissional" type="text" onChange={onProf} />
							<button type="submit" onClick={() => addDados(dados.id)}>Salvar</button>
						</form>
					</div>
				);
			})}

			{turmas.map((dados) => {
				return (
					<div key={dados.id}>
						<h1>{dados.name_turma}</h1>
						<form onSubmit={prevent}>
							<button type="submit" onClick={() => addMateriaTurma(dados.id)}>Adicionar nessa turma</button>
						</form>
					</div>
				);
			})}

			<button onClick={voltar}>Salvar</button>
			<button onClick={seguir}>Salvar</button>
		</div>
	);
}