import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { ContainerFlex, ContainerForm, DivDados, DivInfo, Input, Botoes, MapDados } from './styledAddDisciplinas';

export default function AddDisciplinas() {
	const history = useHistory();

	const turma = () => {
		history.push('/add-turma');
	};

  const enviarDisciplinas = (e) => {
    e.preventDefault()
    //Axios.post...
  }

	return (
		<div>
			<H1>Adicionar Disciplinas</H1>
			<Paragrafo>
				Será necessário introduzir algumas informações para que o gerador possa fazer o trabalho dele
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ContainerForm onSubmit={enviarDisciplinas}>
            <p>Matéria:</p>
						<Input required type="text" placeholder="Adicione uma matéria por vez" />
						<Botoes type='submit'>Adicionar</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <MapDados>
					{/* Container com os dados, map */}
          </MapDados>
					<Botoes onClick={turma}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}
