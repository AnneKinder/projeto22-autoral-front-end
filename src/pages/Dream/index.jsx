import { styled } from "styled-components"
import Header from "../../components/Header";
import TotalScore from "./TotalScore";
import Tasklist from "./Tasklist";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";

export default function Dream() {
    const { id } = useParams();
    const { token } = useContext(AuthContext);
    const URLGET = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const [dreamInfo, setDreamInfo] = useState({})
    const [tasklistInfo, setTasklistInfo] = useState([])
    const [currentScore, setCurrentScore] = useState(0)

    async function getDreamAndTasklistAndStatusFromApi() {
        try {
            await axios
                .get(`${URLGET}dreams/dreamlist/${id}`, config)
                .then((res) => {
                    setDreamInfo(res.data.dream)
                    setTasklistInfo(res.data.tasklist)
                    setCurrentScore(res.data.dream.partialPoints)
                })
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const [checkedTasks, setCheckedTasks] = useState([])


    useEffect(() => {
        getDreamAndTasklistAndStatusFromApi()
        }, [checkedTasks]);
    return (

        <Screen>
            <Header />
            <Container>

                {dreamInfo.length === 0 ? <div>loading</div> :

                    <Container>

                        <Title>
                            {dreamInfo.title}
                        </Title>

                        <TotalScore currentScore={currentScore} totalScore={dreamInfo.totalScore} />

                    <Tasklist setCurrentScore={setCurrentScore} currentScore={currentScore} tasklistInfo={tasklistInfo} totalScore={dreamInfo.totalScore} checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks}/>

                        <DateToBeDone>due: {dreamInfo.dateToBeDone}</DateToBeDone>
                        <Image>
                            <img src={dreamInfo.pictureUrl} alt={dreamInfo.title} />
                        </Image>

                    </Container>
                }
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

const DateToBeDone = styled.div`
     width:500px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 3px 30px rgba(0,0,0,1);
    margin-bottom: 45px;
`

const Image = styled.div`
    img{
        height:405px;
        width:630px;
        border-radius: 20px;
        box-shadow: 0 30px 40px rgba(0,0,0,.1);

    }
    
`