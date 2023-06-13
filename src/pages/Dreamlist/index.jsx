import { styled } from "styled-components";
import Header from "../../components/Header";
import DreamListItem from "./DreamListItem";

export default function Dreamlist() {
    return (
        <Screen>
            <Header />
            <Container>
                <DreamListItem />
                <DreamListItem />
                <DreamListItem />
                <DreamListItem />
                <DreamListItem />
                <DreamListItem />
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin:40px;
`