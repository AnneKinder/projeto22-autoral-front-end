import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Add(){
    const navigate = useNavigate()

    return(
        <Container>
            <Plus onClick={()=>navigate("/newdream")}>
                +
            </Plus>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;

`
const Plus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width:40px;
    height:40px;
    padding: 5px;
    background-color: #dfb3b8;
    border: 2px solid #ffff;
    border-radius: 50%;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:50px;
`