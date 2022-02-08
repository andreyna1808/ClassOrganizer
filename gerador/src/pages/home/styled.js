import styled from "styled-components"

//DESIGNER DO HOME Geral
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px 50px;
    width: 100%;
`
//Fonte texto
export const FonteH1 = styled.h1`
    font-family: 'Gotham Ultra', sans-serif;
    color: white;
    width: 60%;
    font-weight: bolder;
    padding: 40px 70px;
    font-size: 62px;
`
export const FonteH2 = styled.h2`
    font-family: 'Helvica';
    color: white;
    font-size: 25px;
    margin: 10px auto;
    font-weight: bolder;
`
export const PFonte = styled.p`
    color: white;
    font-family: 'Helvica';
    font-size: 18px;
    width: 80%;
`

//DIV LATERAL
export const Botoes = styled.button`
    font-family:' Helvica bold';
    background-color: #ffffff;
    border: none;
    padding: 15px 32px;
    display: inline-block;
    font-size: 16px;
    border-radius: 25px;
    width: 170px;
    margin: 0 auto;
    color: #212165;
    cursor: pointer;
    font-weight: 900;
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`
export const All = styled.div `
    max-width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(180deg,rgba(12,96,147,1)0%,rgba(33,33,101,1)100%);
`

export const B1 = styled.div`
    margin: 22px auto;
`
export const FonteH2Boton = styled.div`
    font-family: 'Helvica';
    color: white;
    font-size: 25px;
    margin: 10px auto;
    font-weight: bolder;
`
export const PFonteBoton = styled.div`
    color: white;
    font-family: 'Helvica';
    font-size: 18px;
    margin: 0 auto;
`
export const PFonteBotonTwo = styled.div`
    color: white;
    font-family: 'Helvica';
    font-size: 18px;
    margin: 0 auto;
`
export const FlexDisplay = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`
