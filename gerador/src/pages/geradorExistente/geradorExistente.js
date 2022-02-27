import React from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { All } from '../../components/syledAll';
import { Paragrafo, H1 } from '../../pages/dashboard/styledDashboard';
import { Botoes, DivButtons } from './styledGeradorExistente';

export default function GeradorExistente() {
  const history = useHistory()

    const todosDados = () => {
      history.push('/dados-gerados');
    };
    const turno = () => {
      history.push('/dados-turno');
    };
    const professor = () => {
      history.push('/dados-professor');
    };
    const dashboard = () => {
      history.push('/dashboard');
    };
  
    return (
      <All>
        <H1>Seus dados</H1>
        <Paragrafo>
          Selecione a opção desejada para a melhor visualização de seus horários
          {/* Dar um Map caso não tenha horários gerados ter um botão para o dashboard */}
        </Paragrafo>
        <DivButtons>
          <Botoes onClick={todosDados}>Ver tudo</Botoes>
          <Botoes onClick={turno}>Ver por turno</Botoes>
          <Botoes onClick={professor}>Ver por professor</Botoes>
          <Botoes onClick={dashboard}>Página Inicial</Botoes>
        </DivButtons>
      </All>
    );
  }
  