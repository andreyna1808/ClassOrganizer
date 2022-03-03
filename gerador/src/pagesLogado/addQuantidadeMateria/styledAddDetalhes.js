import styled from "styled-components";

export const DivDados = styled.div`
  width: 100%;
  align-items: center;
  padding: 2% auto;
`
export const DivInfo = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 2% 0;
  display: flex;
  flex-direction: row;
`
export const DivCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ContainerForm = styled.form`
	width: 30%;
  display: flex;
  flex-direction: row;
  margin-right: 50px;
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
    margin: 0 10px;
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
    padding: 3px;
    font-size: 16px;
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
    font-size: 16px;
    margin: 0 5px;
    color: #212165;
    font-weight: 900;
`
export const InputProf = styled.input`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 4px;
    font-size: 16px;
    margin: 0 5px;
    color: #212165;
    font-weight: 900;
`