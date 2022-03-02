import React from "react";
import { useHistory } from 'react-router-dom';
import { All } from "../../components/syledAll";
import CheckLogin from "../../hooks/checkLogin";
import { Botoes, Paragrafo, H1, Div } from "./styledDashboard";

export default function Dashboard() {
  CheckLogin();
  const history = useHistory();

  const gerarNovo = () => {
    history.push('/gerar-novo')
  }

  const geradorExistente = () => {
    history.push('/gerador-existente')
  }
  const logout = () => {
    localStorage.removeItem('tokenGerador');
    history.push('/login')
  }

  return (
    <All>
      <H1>O que você deseja visualizar?</H1>
      <Paragrafo> Veja seus horários gerados anteriormente, filtre-os por turno, 
      professor ou crie uma nova grade personalizada.</Paragrafo> 

      <Div>
        <Botoes onClick={geradorExistente}>Ver existente</Botoes>
        <Botoes onClick={gerarNovo}>Gerar nova</Botoes>
        <Botoes onClick={logout}>Fazer logout</Botoes>      
      </Div>

    </All>
  )
}