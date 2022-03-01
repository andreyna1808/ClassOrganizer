import React from 'react';
import { useHistory } from 'react-router-dom';
import { All } from '../../components/syledAll';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, DivButtons } from './styledGerador';

export default function Gerador() {
	const history = useHistory();

	const revisar = () => {
		history.push('/add-disciplinas');
	};
	const gerar = () => {
		history.push('/dados-gerados');
	};

	return (
		<All>
			<H1>TUDO PRONTO?</H1>
			<Paragrafo>
				Caso tenha adicionado todas as informações, selecione o botão gerar. Entretanto, caso deseja
				rever/adicionar informações, selecione o botão "Revisar".
			</Paragrafo>
			<DivButtons>
				<Botoes onClick={revisar}>Revisar</Botoes>
				<Botoes onClick={gerar}>Gerar</Botoes>
			</DivButtons>
		</All>
	);
}
