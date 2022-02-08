import React from "react";
import { Container, Info, Form } from './styleLogin'
import { Link } from 'react-router-dom'
import { All } from "../home/styled";

export default class Login extends React.Component {
  render() {
    return (
     <All>
      <Container>
        <Info>
          <h1> Olá, Usuário! </h1>
          <p>
            Entre com suas informações para começar a gerar suas 
            grades de horário. Caso não tenha um cadastro,
          </p>
        </Info>
        <Form>
          <input />
          <input />
          <button type="submit">  </button>
        </Form>
      </Container>
      </All>

    );
  }
}
