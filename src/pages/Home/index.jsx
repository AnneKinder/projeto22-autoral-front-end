import { styled } from "styled-components";
import Header from "../../components/Header";
import Preview from "./Preview";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

export default function Home() {
    const  {token } = useContext(AuthContext);
console.log(token)
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