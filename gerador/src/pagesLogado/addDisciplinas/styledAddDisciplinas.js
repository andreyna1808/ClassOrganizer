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
    margin: 14px 0;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 20px;
` 

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1%;
`

export const BotX = styled.img`
    cursor: pointer;
    font-weight: 900;
    margin: 0 5px;
    width: 20px;
    &:hover{
        background-color:  #22b6a8;
        width: 22px;
        color: black;
        transition: 0.3s;
    }
`