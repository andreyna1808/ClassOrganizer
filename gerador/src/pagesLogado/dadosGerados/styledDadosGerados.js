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

export const DivDias = styled.div`
  width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	margin: 1% 0;
`

export const H1Card = styled.h1`
	margin: 0 auto;
	text-align: left;
	display: flex;
	justify-content: left;
	@media (max-width: 700px) {
		font-size: 16px;
	}
`;
export const DivCard = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`;

export const DivInfo = styled.div`
	background-color: rgba(300, 300, 300, 0.2);
	margin: 0.5% 0;
	display: flex;
`

export const H1Turma= styled.p`
	padding: 2% 1%;
	text-align: left;
	display: flex;
	font-size: 22px;
	font-weight: bolder;
	justify-content: left;
	@media (max-width: 700px) {
		font-size: 12px;
	}
`;

export const DivDados = styled.div`
	margin: auto;
	padding: 0 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: 700px) {
		padding: 0 5px;
	}
`;