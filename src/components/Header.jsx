import { styled } from "styled-components"

export default function Header() {
    return (
        <Container>
            <Box><h1>when</h1></Box>
            <Box>dreams & goals</Box>
            <Box>bye!</Box>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height:65px;
    background-color: #a2c1ba;
    justify-content: space-around;
    color:white;

    h1{
    font-family: 'Barrio', cursive;
    font-size: 50px;
    line-height: 150px;
    width: 150px;
    }

    @media (max-width: 860px) {
      width: 100%;
      padding-left:50px;
      padding-right:50px;
    }
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Barriecito', cursive;
    font-size:25px;
    font-weight: 400;
    margin-left:5px;
    margin-right:5px;

    @media (max-width: 860px) {
        font-size:25px;
        h1{
            font-size: 40px;
        }
    }
   
`