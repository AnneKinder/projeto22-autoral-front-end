import { styled } from "styled-components"

export default function TotalScore(){
    return(
        <Container>
            <Score>
                <div className="partial">15</div>
                <div className="total">/100</div>
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
    padding: 10px;
    background-color: white;
    border: 5px solid #a2c1ba;
    border-radius: 50%;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    

    .partial{
        font-size:20px;
    }

    .total{
        font-size:40px;
    }
`