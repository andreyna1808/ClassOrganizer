import styled from "styled-components";

//DESIGNER O APP.JS
export const All = styled.div `
    margin: 0;
    padding: 0;
    max-width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(180deg,rgba(12,96,147,1)0%,rgba(33,33,101,1)100%);
`

export const DesignerTop = styled.a `
    color: white;
    text-decoration: none;
    margin: 0 30px;
    text-decoration-color: none;
    &:hover {
        color: #22b6a8;
        transition: 0.3s;
    }
    `
export const Nav = styled.nav `
    text-align: center;
    `

export const Head = styled.header `
    width: 100%;
    padding: 20px 0;
    background: linear-gradient(90deg,rgba(4,41,80,1)14%,rgba(22,22,90,1)87%);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Foot = styled.footer `
    width: 100%;
    padding: 2px 0;
    height: 40px;
    background: linear-gradient(90deg,rgba(4,41,80,1)14%,rgba(22,22,90,1)87%);
    position: relative;
    bottom:0;
    left:0;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
`

export const SpanNone = styled.span `
    display: none;
`