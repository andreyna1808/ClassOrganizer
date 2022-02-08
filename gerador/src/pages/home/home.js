import React from 'react';
import { Link } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { B1, Botoes, Container, FlexDisplay, FonteH1, FonteH2, FonteH2Boton, PFonte, PFonteBoton, PFonteBotonTwo } from './styled';

export default class Home extends React.Component {
	render() {
		return (
			<All>
				<FonteH1>
					Organizar <br /> Horários Escolares <br /> Nunca foi tão Fácil!
				</FonteH1>
				<Container>
					<div>
						<FonteH2>Como funciona?</FonteH2>
						<PFonte>
							Com apenas alguns cliques, nosso algoritmo prepara um plano personalizado para cada
							professor.
						</PFonte>
						<PFonte>
							Basta apenas se cadastrar, selecionar suas preferências e obter a grade personalizada.
						</PFonte>
					</div>
					<FlexDisplay>
						<B1>
							<FonteH2Boton>Vamos lá?</FonteH2Boton>
							<Link to="/login"><Botoes>LOGIN</Botoes></Link>
							<PFonteBoton>Já tenho um cadastro</PFonteBoton>
						</B1>
						<B1>
						<Link to="/cadastro"><Botoes>CADASTRO</Botoes></Link>
							<PFonteBotonTwo>Cadastrar-se</PFonteBotonTwo>
						</B1>
					</FlexDisplay>
				</Container>
			</All>
		);
	}
}
