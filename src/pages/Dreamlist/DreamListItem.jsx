import { styled } from "styled-components";
import Add from "../../components/Add";

export default function DreamListItem() {
    return (
        <Container>
            <Add />
            <Left>
                <Title>Make it to 8km</Title>
            </Left>

            <Right>
                <img src="./src/assets/images/run.jpg" alt="" />
                <Score>0/100</Score>
            </Right>

        </Container>
    )
}
const Container = styled.div`
    background-color:#a2c1ba;
    width: 60%;
    display: flex;
    margin: 50px 10px;
    padding:30px 10px 30px 10px;
    flex-wrap: wrap;
    text-shadow: 0 30px 40px rgba(0,0,0,0.3);
    box-shadow: 0 30px 40px rgba(0,0,0,.1);
    border-radius: 20px;
    cursor: pointer;

`

const Right = styled.div`
        position: relative;

     img{
        height:405px;
        width:630px;
        border-radius:20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);
        border-radius: 20px;

    }
`
const Left = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0px 25px;
    margin-left:50px;
    border-radius: 20px;
`

const Title = styled.div`
    width: 200px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;

`
const Score = styled.div`
    position: absolute;
    bottom: 20px;
    right:20px;
    text-align: end;
    width: 200px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #ffffff;
`
