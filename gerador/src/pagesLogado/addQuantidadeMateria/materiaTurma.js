import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_URL, Materias_url } from '../../components/urls';
import useForm from '../../hooks/useForm';
import useFormTwo from '../../hooks/useFormTwo';

export default function AddMateriaTurma() {
	const history = useHistory();

	const professores = () => {
		history.push('/add-detalhes');
	};
	const disciplinas = () => {
		history.push('/add-professores');
	};

	const [ formTwo, onChangeTwo, clearTwo ] = useFormTwo({ id_materias: [] });

	const [ infoAula, setInfoAula ] = useState(0);
	const [ idProf, setIdProf ] = useState(0);

	const [ turmas, setTurmas ] = useState([]);
	const [ prof, setProf ] = useState([]);
	const [ materias, setMaterias ] = useState([]);

	const onAula = (e) => {
		setInfoAula(e.target.value);
	};
	const onProf = (e) => {
		setProf(e.target.value);
	};

	const prevent = (e) => {
		e.preventDefault();
	};

	const addMateriaTurma = (idTurma) => {
		axios
			.put(`https://dgeneretord.herokuapp.com/turma/${idTurma}/materias/`, formTwo, {
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

	const addProfessorMateria = (idMateria) => {
		const body = {
			id_professor: idProf
		};
		axios
			.put(`https://dgeneretord.herokuapp.com/materia/${idMateria}/professor/`, body, {
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

	const addAulaMateria = (idAula) => {
		console.log('Cliadoooooooooooooooooooooooooooooooooo', idAula);
		const body = {
			qtd_aulas: infoAula
		};
		axios
			.put(`https://dgeneretord.herokuapp.com/materia/${idAula}/aulas/`, body, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				console.log(res.data);
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

	const listProfessores = () => {
		axios
			.get(`${BASE_URL}/professores/`, {
				headers: {
					Authorization: `token ${localStorage.getItem('tokenGerador')}`
				}
			})
			.then((res) => {
				setProf(res.data);
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
			listProfessores();
		},
		[ turmas, prof, materias ]
	);

	return (
		<div>
			{materias.map((dados) => {
				return (
					<div key={dados.id}>
						<h1>{dados.name_materia}</h1>
						<form onSubmit={prevent}>
							<input placeholder="Quantidade de aulas" type="number" onChange={onAula} />
							<button type="submit" onClick={() => addAulaMateria(dados.id)}>
								Salvar
							</button>

							<select value={idProf} onChange={onProf} required type="checkbox">
								<option>Adicionar Profissional para a materia: </option>
								{prof.map((info) => {
									return (
										<option onClick={() => addProfessorMateria(info.id)} key={info.id}>{info.name_professor}</option>
									);
								})}
							</select>
						</form>
					</div>
				);
			})}

			<select required type="checkbox">
				<option>Adicionar infomações na turma: </option>
				{/* Fazer um map nos professores que permita filtrar o
              nome para facilitar o checkbox */}
			</select>
		</div>
	);
}
