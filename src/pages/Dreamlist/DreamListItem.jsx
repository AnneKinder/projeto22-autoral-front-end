import { styled } from "styled-components";

export default function DreamListItem({ dreamId, openDream, title, pictureUrl, partialPoints, isDone, dateWhenDone, totalScore }) {

    return (
        <Container onClick={() => openDream(dreamId)} colorprop={isDone ? '0 30px 80px rgba(106, 187, 149, 0.719)' : '0 30px 40px rgba(0,0,0,.1)'}>
            <Left>
                <Title>{title}</Title>
            </Left>

            <Right>
                <img src={pictureUrl} alt={title} />
                <Score>
                    {isDone ? <Completed>COMPLETED</Completed> : <div>{partialPoints}/{totalScore}</div>}
                </Score>
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
    box-shadow: ${(props) => props.colorprop};
    border-radius: 20px;
    cursor: pointer;

    @media (max-width: 860px) {
    width: 100%;
    }

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


    @media (max-width: 860px) {
    width: 50%;
    margin-left: 20px;
        img{
            width:150%;
            height:100%;
        }

    }
`
const Left = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 20px;

    @media (max-width: 860px) {
    width: 50%;
    margin-right: 20px;
    }

`

const Title = styled.div`
    width: 150px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;

    @media (max-width: 860px) {
    width: 100%;
    font-size: 30px;
    display: flex;
    flex-wrap: wrap;
    }


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
    text-shadow: -1px 1px 0 #030001,
                          1px 1px 0 #080808,
                         1px -2px 0 #8F7B7E,
                        -1px -1px 0 #8F7B7E;

    @media (max-width: 860px) {
        bottom: 4px;
        right:4px;
        font-size: 20px;
    }
`

const Completed = styled.div`
 font-family: 'Barriecito', cursive;
    font-size: 40px;
    color: #a2c1ba;

    @media (max-width: 860px) {
        font-size: 20px;
    }
`
