import React from 'react';
import { Botoes, ContainerForm, ContainerMenor, Input, Paragrafo, ParagrafoTwo } from './styleLogin';
import { Link } from 'react-router-dom';
import { All, CliqueAq, H1 } from '../../components/syledAll';

export default class Login extends React.Component {
	render() {
		return (
			<All>
				<H1> Olá, Usuário! </H1>
				<Paragrafo>
					Entre com suas informações para começar a gerar suas grades <br /> de horário. Caso não tenha um
					cadastro,{' '}
					<Link to="/cadastro">
						<CliqueAq>clique aqui</CliqueAq>
					</Link>
				</Paragrafo>
				<ContainerForm>
					<ContainerMenor>
						<ParagrafoTwo>E-MAIL:</ParagrafoTwo>
						<Input required type="email" />
					</ContainerMenor>
					<ContainerMenor>
						<ParagrafoTwo>SENHA:</ParagrafoTwo>
						<Input required type="password" />
					</ContainerMenor>
					<Botoes type="submit">Entrar</Botoes>
				</ContainerForm>
			</All>
		);
	}
}
