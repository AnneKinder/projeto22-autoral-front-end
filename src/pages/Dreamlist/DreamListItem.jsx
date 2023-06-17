import { styled } from "styled-components";
import Add from "../../components/Add";

export default function DreamListItem({ title, pictureUrl, partialPoints, isDone, dateWhenDone, totalScore }) {

    return (
        <Container>
            <Add />
            <Left>
                <Title>{title}</Title>
            </Left>

            <Right>
                <img src={pictureUrl} alt={title} />
                <Score>{partialPoints}/{totalScore}</Score>
            </Right>

        </Container>



    )
}
const Container = styled.div`
    background-color:#dfb3b8;
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 50px 10px;
    padding:30px 55px 30px 55px;
    text-shadow: 0 10px 45px rgba(0,0,0,0.4);
    box-shadow: 0 30px 40px rgba(0,0,0,.1);
    border-radius: 20px;
    cursor: pointer;

`

const Right = styled.div`
        position: relative;

     img{
        height:405px;
        width:400px;
        border-radius:20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);
        border-radius: 20px;
        object-fit: cover;
        

    }
`
const Left = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;
`

const Title = styled.div`
    width: 150px;
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
    text-shadow: -1px 1px 0 #8F7B7E,
                          1px 1px 0 #8F7B7E,
                         1px -2px 0 #8F7B7E,
                        -1px -1px 0 #8F7B7E;

`
