import { styled } from "styled-components";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import { BsCloudHaze } from "react-icons/bs";


export default function Home() {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            <Container>
                <Welcome>hello, {user.name}!</Welcome>
                <Image><BsCloudHaze /></Image>
                <Quote>
                    <h1>"If a little dreaming is dangerous, the cure for it is not to dream less, but to dream more, to dream all the time."</h1>
                    <h2>Proust, M</h2>
                </Quote>
            </Container>
            </>
    )
}



const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding:50px;
    width: 100%;

    @media (max-width: 860px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

`
const Welcome = styled.div`
    width: 400px;
   font-family: 'Barrio', cursive;
   font-size:100px;
   color: white;
   text-shadow: 0 10px 60px rgba(0,0,0,0.1);

   @media (max-width: 860px){
        width: 100%;
        font-size:70px;
    }
`
const Image = styled.div`
    font-size: 200px;
    width: 300px;
    color: white;
    margin-top: 150px;
    text-align: center;

    @media (max-width: 860px){
        width: 100%;
        font-size: 150px;
        margin-top: 50px;
    }
`
const Quote = styled.div`
    width: 400px;
    font-family: 'Barriecito', cursive;
    font-size:50px;
    font-weight: 400;
    color: white;
    margin-top: 250px;
    text-shadow: 0 20px 40px rgba(0,0,0,0.1);
    @media (max-width: 860px){
        width: 100%;
        font-size:40px;
        margin-top: 50px;
    }
`