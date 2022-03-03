import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { All, DesignerTop, Footer, Head, Nav } from './components/syledAll';
import Cadastro from './pages/cadastro/cadastrar';
import Dashboard from './pages/dashboard/dashboard';
import GeradorExistente from './pages/geradorExistente/geradorExistente';
import GerarNovo from './pages/gerarNovo/gerarNovo';
import Home from './pages/home/home';
import Login from './pages/login/login';
import AddDisciplinas from './pagesLogado/addDisciplinas/addDisciplinas';
import AddMateriaTurma from './pagesLogado/addQuantidadeMateria/materiaTurma';
import AddTurma from './pagesLogado/addTurma/addTurma';
import DadosGerados from './pagesLogado/dadosGerados/dadosGerados';
import Gerador from './pagesLogado/gerador/gerador';
import InfoProfessor from './pagesLogado/infomacoesGeradas/infoProfessor';
import InfoTurno from './pagesLogado/infomacoesGeradas/infoTurno';

export default function Routes() {
	return (
		<All>
			<All>
				<Head>
					<Nav>
						<Link to="/">
							<DesignerTop>Home</DesignerTop>
						</Link>
						<Link to="/login">
							<DesignerTop>Login</DesignerTop>
						</Link>
						<Link to="/cadastro">
							<DesignerTop>Cadastrar</DesignerTop>
						</Link>
						<Link to="/dashboard">
							<DesignerTop>Dashboard</DesignerTop>
						</Link>
					</Nav>
				</Head>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/cadastro" component={Cadastro} />

						<Route exact path="/gerar-novo" component={GerarNovo} />
						<Route exact path="/gerador-existente" component={GeradorExistente} />

						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/add-disciplinas" component={AddDisciplinas} />
						<Route exact path="/add-turma" component={AddTurma} />
						<Route exact path="/add-mat" component={AddMateriaTurma} />

						<Route exact path="/dados-gerados" component={DadosGerados} />
						<Route exact path="/gerador" component={Gerador} />

						<Route exact path="/dados-turno" component={InfoTurno} />
						<Route exact path="/dados-professor" component={InfoProfessor} />
					</Switch>
				</main>
			</All>
			<Footer>
				<h3>Todos os direitos reservados ClassOrganizer &copy;</h3>
			</Footer>
		</All>
	);
}
