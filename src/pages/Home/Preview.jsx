import { styled } from "styled-components"

export default function Preview (){
    return(
        <Container>
            <img src="./src/assets/images/run.jpg" alt="" />
            <h1>Make it to 8km</h1>
            <h2>0/100</h2>
        </Container>
    )
}

const Container = styled.div`
    height:450px;
    width:700px;
    border-radius:20px;
    margin:40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    img{
        height:90%;
        width:90%;
        border-radius:20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);

    }

`