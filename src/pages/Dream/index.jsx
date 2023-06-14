import { styled } from "styled-components"
import GoalList from "./GoalList"
import Header from "../../components/Header";
import TotalScore from "./TotalScore";

export default function Dream() {
    return (
        <Screen>
            <Header />
            <Container>
                <Container>

                    <Title>
                        Make it to 8km
                    </Title>

                    <TotalScore />

                    <GoalList />

                    <Image>
                        <img src="./src/assets/images/run.jpg" alt="" />
                    </Image>

                </Container>
            </Container>


        </Screen>

    )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width:100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin:50px;
    flex-wrap: wrap;
`

const Title = styled.div`
    width:100%;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 20px 40px rgba(0,0,0,0.6);


`

const Image = styled.div`
    img{
        height:405px;
        width:630px;
        border-radius: 20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);

    }
    
`