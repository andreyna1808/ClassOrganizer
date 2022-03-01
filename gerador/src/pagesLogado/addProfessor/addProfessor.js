import React from "react";
import { useHistory } from 'react-router-dom';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, ContainerFlex, ContainerForm, DivDados, DivInfo, Input, MapDados} from "./styledAddProfessor";


export default function AddProfessor() {
	const history = useHistory();

	const detalhesFinais = () => {
		history.push('/add-detalhes');
	};
	const turma = () => {
		history.push('/add-turma');
	};

  const enviarProfessores = (e) => {
    e.preventDefault()
    //Axios.post...
  }

	return (
		<div>
			<H1>Cadastrar Professores</H1>
			<Paragrafo>
        Digite o Nome do(a) Professor(a) e clique em adicionar.
        Repita os mesmos passos para adicionar os demais professores.
			</Paragrafo>

			<ContainerFlex>
				<DivDados>
					<ContainerForm onSubmit={enviarProfessores}>
            <p>Professor(a):</p>
						<Input required type="text" placeholder="Adicione um(a) professor(a) por vez" />
						<Botoes type='submit'>Adicionar</Botoes>
					</ContainerForm>
				</DivDados>

				<DivInfo>
          <MapDados>
					{/* Container com os dados, map dos professores adicionados*/}
          </MapDados>
					<Botoes onClick={turma}>voltar</Botoes>
					<Botoes onClick={detalhesFinais}>Avançar</Botoes>
				</DivInfo>
			</ContainerFlex>
		</div>
	);
}