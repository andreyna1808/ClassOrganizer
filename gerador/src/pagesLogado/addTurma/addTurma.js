import React from "react";
import { useHistory } from 'react-router-dom';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, ContainerFlex, ContainerForm, DivDados, DivInfo, Input, MapDados, Options, Selects } from "./styledAddTurma";

export default function AddTurma() {
	const history = useHistory();

	const professores = () => {
		history.push('/add-professores');
	};
	const disciplinas = () => {
		history.push('/add-disciplinas');
	};

  const adicionarTurmas = (e) => {
    e.preventDefault()
    //Axios.post...
  }

	return (
		<div>
			<H1>Adicionar Turmas</H1>
			<Paragrafo>
        Adicione uma turma, especificando seu turno e grade curricular. Após adicionar,
        salve-a e adicione as demais seguindo os mesmos passos.
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ContainerForm onSubmit={adicionarTurmas}>
            <p>turma:</p>
						<Input required type="text" placeholder="Ex.: 3 ano A " />

            <p>turno:</p>
						<Selects required type='checkbox'>
              <Options>Escolha um turno</Options>
              <Options>Matutino</Options>
              <Options>Vespertino</Options>
              <Options>Noturno</Options>
            </Selects>

						<Botoes type='submit'>Adicionar</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <div>
          <MapDados>
					  {/* Map de cada disciplina e um input para por a quantidade*/}
          </MapDados>
          <p>No quaro ao lado, adicione o número de aulas semanais de cada turma.
            Caso alguma matéria não tenha aulas, insira 0 (zero) no campo ou deixe nulo.</p>
          </div>
					<Botoes onClick={disciplinas}>Voltar</Botoes>
					<Botoes onClick={professores}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}
