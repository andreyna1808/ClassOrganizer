import styled from "styled-components";

export const DivDados = styled.div`
  width: 100%;
  align-items: center;
  padding: 2% auto;
`
export const ContainerAll = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivInfo = styled.div`
  padding: 2% 0;
  margin: 0 3%;
  display: flex;
  flex-direction: row;
`
export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerForm = styled.form`
	width: 100%;
  display: flex;
  flex-direction: row;
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
    width: 60%;
	`
	
export const Options = styled.option`
	font-weight: bolder;
  color: #212165;
`

export const Botoes = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    width: 200px;
    height: 40px;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    margin: 14px ;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`
export const BotSalvar = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 5px 0;
    font-size: 16px;
    border-radius: 5px;
    height: 30px;
    width: 100px;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DivVoltar = styled.div`
  text-align: center;
  margin: 20px 0;
`
export const InputNumber = styled.input`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 4px;
    width: 120px;
    height: 30px;
    font-size: 16px;
    margin: 0 5px;
    color: #212165;
    font-weight: 900;
    border-radius: 5px;
    color: #212165;
    font-weight: 900;
`
export const InputProf = styled.input`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 4px;
    width: 320px;
    height: 30px;
    font-size: 16px;
    margin: 0 5px;
    border-radius: 5px;
    color: #212165;
    font-weight: 900;
`

export const DivEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 75%;
`

export const TextDados = styled.p `
  font-size: 22px;
  margin: 2px 5px;
`

export const MapDados = styled.div`
  width: 70%;
  background-color: white;
  color: #212165;
  padding: 20px;
  margin: 10px 20px;
`

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2% 1%;
  width: 100%;
`
export const Span = styled.span`
  font-weight: bolder;
`