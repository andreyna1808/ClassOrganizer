import styled from 'styled-components';

export const CliqueAq = styled.a`
	color: white;
	text-decoration: none;
	text-decoration-color: none;
	&:hover {
		color: #22b6a8;
		transition: 0.3s;
	}
`;
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
export const Paragrafo = styled.p`
    font-family: 'Helvetica', sans-serif;
	color: white;
	width: 90%;
	font-weight: bold;
	padding: 0 30px;
    padding-bottom: 30px;
	font-size: 18px;
`
export const Container = styled.div`
	width: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
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
    &:hover{
        background-color:  #22b6a8;
        color: white;
        transition: 0.3s;
    }
`