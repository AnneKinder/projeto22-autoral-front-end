import { styled } from "styled-components"

export default function TotalScore({ currentScore, totalScore }) {
    return (
        <Container>
            <Score>
                <div className="partial">{currentScore}</div>
                <div className="total">/{totalScore}</div>
            </Score>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    position: absolute;
    top:15%;
    right: 10%;
`
const Score = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:130px;
    height:130px;
    padding: 15px;
    background-color: white;
    border: 5px solid #DFB3B8;
    border-radius: 50%;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    
    .partial{
        width:130px;
        font-size: 20px; 
        color:#a2c1ba;
   }

    .total{
        width:130px;
        display: flex;
        flex-wrap: wrap;
        font-size: 25px;    }

`