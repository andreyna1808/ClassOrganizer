import React from 'react';
import { Botoes, ContainerForm, ContainerMenor, Input, Paragrafo, ParagrafoTwo } from './styleLogin';
import { Link, useHistory } from 'react-router-dom';
import { All, CliqueAq, H1 } from '../../components/syledAll';
import CheckLogin from '../../hooks/checkLogin';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { Login_url } from '../../components/urls';

export default function Login() {
	CheckLogin();
	const history = useHistory()

	const [ form, onChange ] = useForm({username: '', password: ''})

 	const postLogin = () => {

    axios.post(Login_url, form)
    .then((res) => {
      localStorage.setItem('tokenGerador', res.data.token);
      history.push('/dashboard')
    })
    .catch((err) => {
      alert('Sentimos muito, mas algo deu errado com o seu Login')
    })
  }
  const keyPressEnter = (e) => {
    if(e.key === 'Enter' && form.username !== '' && form.password !== ''){
      postLogin()
    }
  } 

		return (
			<All>
				<H1> Olá, Usuário! </H1>
				<Paragrafo>
					Entre com suas informações para começar a gerar suas grades <br /> de horário. Caso não tenha um
					cadastro,{' '}
					<Link to="/cadastro">
						<CliqueAq>clique aqui</CliqueAq>
					</Link>
				</Paragrafo>
				<ContainerForm onSubmit={postLogin}>
					<ContainerMenor>
						<ParagrafoTwo>E-MAIL:</ParagrafoTwo>
						<Input onKeyPress={keyPressEnter} required name='username' value={form.username} onChange={onChange} type="text" />
					</ContainerMenor>
					<ContainerMenor>
						<ParagrafoTwo>SENHA:</ParagrafoTwo>
						<Input onKeyPress={keyPressEnter} required name='password' value={form.password} onChange={onChange} type="password" />
					</ContainerMenor>
					<Botoes onClick={postLogin} onKeyPress={keyPressEnter} type="submit">Entrar</Botoes>
				</ContainerForm>
			</All>
		);
}
