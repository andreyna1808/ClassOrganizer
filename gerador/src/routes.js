import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { All, DesignerTop, Head, Nav } from './components/syledAll';
import Cadastro from './pages/cadastro/cadastrar';
import Dashboard from './pages/dashboard/dashboard';
import GeradorExistente from './pages/geradorExistente/geradorExistente';
import GerarNovo from './pages/gerarNovo/gerarNovo';
import Home from './pages/home/home';
import Login from './pages/login/login';
import AddDetalhes from './pagesLogado/addDetalhes/addDetalhes';
import AddDisciplinas from './pagesLogado/addDisciplinas/addDisciplinas';
import AddProfessor from './pagesLogado/addProfessor/addProfessor';
import AddTurma from './pagesLogado/addTurma/addTurma';
import DadosGerados from './pagesLogado/dadosGerados/dadosGerados';
import Gerador from './pagesLogado/gerador/gerador';
import InfoProfessor from './pagesLogado/infomacoesGeradas/infoProfessor';
import InfoTurno from './pagesLogado/infomacoesGeradas/infoTurno';

export default function Routes() {
	return (
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
					<Route exact path="/add-professores" component={AddProfessor} />
					<Route exact path="/add-detalhes" component={AddDetalhes} />

					<Route exact path="/dados-gerados" component={DadosGerados} />
					<Route exact path="/gerador" component={Gerador} />

					<Route exact path="/dados-turno" component={InfoTurno} />
					<Route exact path="/dados-professor" component={InfoProfessor} />


				</Switch>
			</main>
		</All>
	);
}