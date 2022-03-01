import React from 'react';
import { useHistory } from 'react-router-dom';
import { Botoes, H1, Paragrafo } from '../dashboard/styledDashboard';
import { Div } from './styledGerarNovo';

export default function GerarNovo() {
  const history = useHistory()

  const disciplinas = () => {
    history.push('/add-disciplinas')
  }

	return (
		<div>
			<H1>Gerador de horário novo</H1>
			<Paragrafo>
				Será necessário introduzir algumas informações para que o gerador possa fazer o trabalho dele
			</Paragrafo>

			<Div>
				<h1>Vamos Lá?!</h1>
				<Botoes onClick={disciplinas}>INICIAR GERADOR</Botoes>
			</Div>
		</div>
	);
}
