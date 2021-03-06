import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivDados = styled.div`
  width: 50%;
  align-items: center;
  padding: 2% 5%;
`

export const DivInfo = styled.div`
  width: 50%;
  align-items: center;
  padding: 2% 5%;
`

export const ContainerForm = styled.form`
	width: 60%;
    display: flex;
    flex-direction: column;
    margin-right: 50px;
`

export const Botoes = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    width: 200px;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    margin: 14px 10px;
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

export const MapDados = styled.div`
  width: 80%;
  background-color: white;
  color: #212165;
  padding: 20px;
`

export const Selects = styled.select`
	  font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 12px 22px;
    font-size: 16px;
    border-radius: 10px;
    color: #212165;
    font-weight: 900;
	`
	
export const Options = styled.option`
	font-weight: bolder;
  color: #212165;
`