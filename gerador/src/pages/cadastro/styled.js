import styled from 'styled-components';

export const Paragrafo = styled.p`
    font-family: 'Helvetica', sans-serif;
	color: white;
	width: 90%;
	font-weight: bold;
	padding: 0 50px;
    padding-bottom: 30px;
	font-size: 18px;
`
export const ContainerForm = styled.form`
	width: 77%;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    align-items: flex-end;
`
export const ContainerMenor = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px;
`
export const Botoes = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 12px 22px;
    font-size: 16px;
    border-radius: 10px;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    margin: 7px 0;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`

export const Input = styled.input`
font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 12px 22px;
    font-size: 16px;
    border-radius: 10px;
    color: #212165;
    font-weight: 900;
`
export const ParagrafoTwo = styled.p`
    font-family: 'Helvetica', sans-serif;
	color: white;
	font-size: 16px;
    margin: 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`