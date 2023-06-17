import { styled } from "styled-components"
import { useNavigate } from "react-router-dom"

export default function Add(){
    const navigate = useNavigate()

    return(
        <Container>
            <Plus onClick={()=>navigate("/newdream")}>
                add dream here!
            </Plus>
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    position: absolute;
    top:15%;
    right: 10%;
`
const Plus = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width:100px;
    height:100px;
    padding: 10px;
    background-color: white;
    border: 5px solid #a2c1ba;
    border-radius: 50%;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:20px;
    
`