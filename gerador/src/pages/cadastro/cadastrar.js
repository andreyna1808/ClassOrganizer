import React from 'react';
import { Link } from 'react-router-dom';
import { All } from '../home/styled';
import { CliqueAq, H1, Paragrafo, Container, ContainerMenor, Botoes } from './styled';

export default class Cadastro extends React.Component {
	render() {
		return (
			<All>
				<H1>Primeira Vez Por Aqui?</H1>
				<Paragrafo>
					Vamos adicionar sua escola para poder adicionar preferências <br></br> para cada turma e professor. Caso já
					tenha um cadastro, <Link to="/login"><CliqueAq>clique aqui</CliqueAq>
					</Link>
				</Paragrafo>

				<Container>
					<ContainerMenor>
						<p>USUÁRIO</p>
						<input />
					</ContainerMenor>
					<ContainerMenor>
						<p>E-MAIL</p>
						<input />
					</ContainerMenor>
					<ContainerMenor>
						<p>SENHA</p>
						<input />
					</ContainerMenor>
            <Botoes>Cadastrar</Botoes>
				</Container>
			</All>
		);
	}
}
