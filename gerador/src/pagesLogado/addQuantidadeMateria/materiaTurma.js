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
	const [ array, setArray ] = useState([]);

	console.log('sou o id', idMateria);
	console.log('sou o array', array);

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
		console.log(idMateria);
		const body = {
			id_materias: idMateria,
		}
		axios.put(`https://dgeneratord.herokuapp.com/turma/${idTurma}/materias/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				console.log(res.data);
				alert('Materias enviadas para a turma com sucesso')
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
			.put(`https://dgeneratord.herokuapp.com/materia/${idAula}/complement/`, body, {
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
		[]
	);

	return (
		<div>
			{materias.map((dados) => {
				idMateria.push(dados.id)
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

			<button onClick={voltar}>Voltar</button>
			<button onClick={seguir}>Avançar</button>
		</div>
	);
}
