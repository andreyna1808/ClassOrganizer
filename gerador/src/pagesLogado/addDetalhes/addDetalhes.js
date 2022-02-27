import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { All } from '../../components/syledAll';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, ContainerForm, DivButtons, DivDados, DivInfo, DivVoltar, Options, Selects } from './styledAddDetalhes';

export default function AddDetalhes() {
	const history = useHistory();

	const gerador = () => {
		history.push('/gerador');
	};
	const professores = () => {
		history.push('/add-professores');
	};

	const dadosParaGerar = (e) => {
		e.preventDefault();
		//Axios.post...
	};

	return (
		<All>
			<H1>Informações Finais</H1>
			<Paragrafo>
				Selecione o(a) professor(a), especificando qua, a matéria, turno e turma que ele leciona.
			</Paragrafo>

			<DivDados>
				<ContainerForm onSubmit={dadosParaGerar}>
					<p>Professor(a):</p>
					<Selects required type="checkbox">
						<Options>Escolha um(a) professor(a)</Options>
						{/* Fazer um map nos professores que permita filtrar o
              nome para facilitar o checkbox */}
					</Selects>

					<DivInfo>
						<div>
							<p>Matéria:</p>
							<Selects required type="checkbox">
								<Options>Escolha a(as) matérias do(a) professor(a)</Options>
								{/* Fazer um map das matéria, podendo selecionar mais de uma */}
							</Selects>
						</div>

						<div>
							<p>turno:</p>
							<Selects required type="checkbox">
								<Options>Escolha um turno</Options>
								<Options>Matutino</Options>
								<Options>Vespertino</Options>
								<Options>Noturno</Options>
							</Selects>
						</div>

						<div>
							<p>Turma:</p>
							<Selects required type="checkbox">
								<Options>Escolha a turma do(a) professor(a) para essa(s) matéria(s)</Options>
								{/* Fazer um map das matéria, podendo selecionar mais de uma */}
							</Selects>
						</div>
					</DivInfo>

					<DivButtons>
						<Botoes type="submit">Adicionar</Botoes>
						<Botoes onClick={gerador}>Avançar</Botoes>
					</DivButtons>
				</ContainerForm>
				<DivVoltar>
					<Botoes onClick={professores}>voltar</Botoes>
				</DivVoltar>
			</DivDados>
		</All>
	);
}
