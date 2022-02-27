import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { All } from '../../components/syledAll';
import { Paragrafo } from '../../pages/dashboard/styledDashboard';
import { Botoes } from './styledInfos';
import Fundo from '../../components/imgs/dados.jpg'


export default function InfoTurno() {
	const history = useHistory();

	const dashboard = () => {
		history.push('/dashboard');
	};


	return (
		<All>
      <Paragrafo>Enquanto estamos fazendo, aqui está um exemplo de gerador de horários</Paragrafo>
			{/* Fazer o gerador com gif enquanto estiver carregando
      aguarde que estamos gerando seus dados... apenas turno*/}
      <img src={Fundo}></img>

				<Botoes onClick={dashboard}>voltar ao Dashboard</Botoes>
		</All>
	);
}
