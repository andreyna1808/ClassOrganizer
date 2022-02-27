import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { All } from "../../components/syledAll";
import { Botoes, Paragrafo, H1, Div } from "./styledDashboard";

export default function Dashboard() {
  const history = useHistory();

  const gerarNovo = () => {
    history.push('/gerar-novo')
  }

  const geradorExistente = () => {
    history.push('/gerador-existente')
  }

  return (
    <All>
      <H1>O que você deseja visualizar?</H1>
      <Paragrafo> Veja seus horários gerados anteriormente, filtre-os por turno, 
      matéria/professor ou crie ua nova grade personalizada.</Paragrafo> 

      <Div>
        <Botoes onClick={geradorExistente}>Ver existente</Botoes>
       <Botoes onClick={gerarNovo}>Gerar novo</Botoes>   
      </Div>

    </All>
  )
}