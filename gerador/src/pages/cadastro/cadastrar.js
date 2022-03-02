import axios from 'axios';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ToastAnimated, { showToast } from "../ui-lib"
import { All, CliqueAq, H1 } from '../../components/syledAll';
import { Register_url } from '../../components/urls';
import useForm from '../../hooks/useForm';
import { Paragrafo, ContainerForm, ContainerMenor, Botoes, Input, ParagrafoTwo } from './styled';

export default function Cadastro() {
	const [ form, onChange ] = useForm({ username: '', password: '', email: '' });
	const history = useHistory();

	const postRegister = (e) => {
		e.preventDefault();

		axios
			.post(Register_url, form)
			.then((res) => {
				showToast({ type: "success", message: "Cadastro realizado com sucesso! Bom proveito" });
				history.push('/login');
			})
			.catch((err) => {
				showToast({ type: "error", message: "Infelizmente não foi possível realisar seu cadastro" });
				console.log(err);
			});
	};

	const keyPressEnter = (e) => {
		if (e.key === 'Enter' && form.username !== '' && form.password !== '') {
			postRegister();
		}
	};

	return (
		<All>
			<H1>Primeira Vez Por Aqui?</H1>
			<Paragrafo>
				Vamos adicionar sua escola para poder adicionar preferências <br /> para cada turma e professor. Caso já
				tenha um cadastro,
				<Link to="/login">
					<CliqueAq>clique aqui</CliqueAq>
				</Link>
			</Paragrafo>

			<ContainerForm onSubmit={postRegister}>
				<ToastAnimated/>
				<ContainerMenor>
					<ParagrafoTwo>USUÁRIO:</ParagrafoTwo>
					<Input
						onKeyPress={keyPressEnter}
						required
						name="username"
						type="text"
						value={form.username}
						onChange={onChange}
					/>
				</ContainerMenor>
				<ContainerMenor>
					<ParagrafoTwo>E-MAIL:</ParagrafoTwo>
					<Input
						onKeyPress={keyPressEnter}
						required
						name="email"
						type="email"
						value={form.email}
						onChange={onChange}
					/>
				</ContainerMenor>
				<ContainerMenor>
					<ParagrafoTwo>SENHA:</ParagrafoTwo>
					<Input
						onKeyPress={keyPressEnter}
						required
						name="password"
						type="password"
						value={form.password}
						onChange={onChange}
					/>
				</ContainerMenor>
					<Botoes onKeyPress={keyPressEnter} type="submit">
						Cadastrar
					</Botoes>
			</ContainerForm>
		</All>
	);
}
