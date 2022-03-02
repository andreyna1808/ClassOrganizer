import styled from "styled-components";

//DESIGNER O APP.JS
export const All = styled.div `
    max-width: 100%;
    min-height: 100vh;
    color: white;
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
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const SpanNone = styled.span `
    display: none;
`
export const H1 = styled.h1`
	font-family: 'Gotham Ultra', sans-serif;
	color: white;
    text-shadow: 1px 1px 1px white;
    opacity: 0.9;
	width: 80%;
	font-weight: bold;
	padding: 40px 70px;
	font-size: 62px;
`
export const CliqueAq = styled.a`
	color: white;
	text-decoration: none;
	text-decoration-color: none;
	&:hover {
		color: #22b6a8;
		transition: 0.3s;
	}
`
export const Footer = styled.footer`
  height: 4vh;
  background: linear-gradient(90deg,rgba(4,41,80,1)14%,rgba(22,22,90,1)87%);
  position: relative;
  display: flex;
  bottom: 0;
  color: white;
  align-items: center;
  justify-content: center;
  `