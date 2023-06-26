import { styled } from "styled-components"

export default function TotalScore({ currentScore, totalScore, isDone }) {
    return (
        <Container>
            <Score>
                {isDone ? <Completed>Yay!</Completed> :
                    <>
                        <div className="partial">{currentScore}</div>
                        <div className="total">/{totalScore}</div>
                    </>}

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
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;

    
`
const Completed = styled.div`
    font-size:40px;
    color: #a2c1ba;
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


    @media (max-width: 860px) {
        width: 20%;
        height:20%;
        border: 3px solid #DFB3B8;
    }
   
    
    .partial{
        width:130px;
        font-size: 20px; 
        color:#a2c1ba;

        @media (max-width: 860px) {
            font-size: 10px;
        }         
   }

    .total{
        width:130px;
        display: flex;
        flex-wrap: wrap;
        font-size: 25px;    
    
        @media (max-width: 860px) {
            font-size: 22px;
            }
    }

`