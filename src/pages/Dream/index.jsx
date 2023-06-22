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
    const URLPOST= `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const [dreamInfo, setDreamInfo] = useState({})
    const [tasklistInfo, setTasklistInfo] = useState({})
    const [taskStatus, setTaskStatus] = useState({})

    async function getDreamAndTasklistAndStatusFromApi() {
        try {
            await axios
                .get(`${URLGET}dreams/dreamlist/${id}`, config)
                .then((res) => {
                    setDreamInfo(res.data.dream)
                    setTasklistInfo(res.data.tasklist)
                   setTaskStatus(res.data.statusOfTask)
                })
        } catch (err) {
            console.log(err.response.data);
        }
    }

    const [checkedTasks, setCheckedTasks] = useState([])

   const {t1, t2, t3, t4, t5 } = tasklistInfo
   let rawTasklist = [t1, t2, t3, t4, t5]
    let tasklist = []
    for (let i = 0; i < rawTasklist.length; i++) {
        if (rawTasklist[i] != "") {
            tasklist.push(rawTasklist[i])
        }
    }



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

                        <TotalScore partialPoints={dreamInfo.partialPoints} totalScore={dreamInfo.totalScore} />

                    <Tasklist  tasklist={tasklist} totalScore={dreamInfo.totalScore} taskStatusId={taskStatus.id} checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks}/>

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