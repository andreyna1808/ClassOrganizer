import styled from 'styled-components';

export const Paragrafo = styled.p`
    font-family: 'Helvetica', sans-serif;
	color: white;
	width: 85%;
	font-weight: bold;
	padding: 0 50px;
    padding-bottom: 30px;
	font-size: 32px;
`
export const Botoes = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    width: 300px;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    margin: 7px 40px;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`
export const H1 = styled.h1`
	font-family: 'Gotham Ultra', sans-serif;
	color: white;
    text-shadow: 1px 1px 1px white;
    opacity: 0.9;
	width: 80%;
	font-weight: bold;
	padding: 40px 70px;
	font-size: 72px;
`

export const Div = styled.div`
  text-align: center;
`