import { styled } from "styled-components"

export default function Preview() {
    return (
        <Container>
            <img src="./src/assets/images/run.jpg" alt="" />
            <Subtitle>
                <h1>Make it to 8km</h1>
                <div className="score">0/100</div>
            </Subtitle>
        </Container>
    )
}

const Container = styled.div`
    height:405px;
    width:630px;
    border-radius:20px;
    margin:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img{
        height:100%;
        width:100%;
        border-radius:20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);
    }

`
const Subtitle = styled.div`
    display: flex;
    width:90%;
    padding: 0 14px 0 14px;
    border-radius:10px;
    justify-content: space-between;
    position: absolute;
    bottom:10px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #ffffff;
    background-color: #a2c1ba;

    h1{
        text-shadow: 0 1px 20px rgba(0,0,0,1);    
    }

    .score{
        text-shadow: 0 1px 20px rgba(0,0,0,1);    
    }
`
