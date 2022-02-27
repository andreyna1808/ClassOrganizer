import styled from "styled-components";

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
    margin: 14px 0;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 20%;
`