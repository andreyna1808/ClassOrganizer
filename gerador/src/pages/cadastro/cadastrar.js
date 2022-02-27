import React from 'react';
import { Link } from 'react-router-dom';
import { All, CliqueAq, H1 } from '../../components/syledAll';
import { Paragrafo, ContainerForm, ContainerMenor, Botoes, Input, ParagrafoTwo } from './styled';

export default function Cadastro() {
		return (
			<All>
				<H1>Primeira Vez Por Aqui?</H1>
				<Paragrafo>
					Vamos adicionar sua escola para poder adicionar preferências <br /> para cada turma e professor.
					Caso já tenha um cadastro,
					<Link to="/login">
						<CliqueAq>clique aqui</CliqueAq>
					</Link>
				</Paragrafo>

				<ContainerForm>
					<ContainerMenor>
						<ParagrafoTwo>USUÁRIO:</ParagrafoTwo>
						<Input required type="text" />
					</ContainerMenor>
					<ContainerMenor>
						<ParagrafoTwo>E-MAIL:</ParagrafoTwo>
						<Input required type="email" />
					</ContainerMenor>
					<ContainerMenor>
						<ParagrafoTwo>SENHA:</ParagrafoTwo>
						<Input required type="password" />
					</ContainerMenor>
					<Botoes type='submit'>Cadastrar</Botoes>
				</ContainerForm>
			</All>
		);
}
