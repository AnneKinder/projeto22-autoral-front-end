import { styled } from "styled-components";
import Header from "../../components/Header";
import Preview from "./Preview";

export default function Home() {
    return (
        <Screen>
            <Header />
            <Container>
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
                <Preview></Preview>
            </Container>


        </Screen>

    )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin:50px;
    flex-wrap: wrap;
`