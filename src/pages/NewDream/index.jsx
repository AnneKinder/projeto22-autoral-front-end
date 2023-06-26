import { styled } from "styled-components";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/auth";
import React from "react";
import Header from "../../components/Header";

export default function NewDream() {
    const URLPOST = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [dream, setDream] = useState({ title: "", dateToBeDone: "", totalScore: "", pictureUrl: "" })
    const [dreamId, setDreamId] = useState({})
    const [task, setTask] = useState({descrip: "", isDone: false})
    const [firstTask, setFirstTask] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [mainFormComplete, setIsMainFormComplete] = useState(false)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function handleMainForm(e) {
        e.preventDefault();

        axios.post(`${URLPOST}dreams`, {dream}, config)
        .then((res) => {
            setDreamId(res.data.dreamId)
            setIsMainFormComplete(true)
        })
        .catch((err) => {
            console.log(err)
            setIsDisabled(false)
        });
    }

    function handleTaskForm(el) {
        el.preventDefault();

        console.log(task)
        console.log(dreamId)

        axios.post(`${URLPOST}dreams/tasks`, { task, dreamId }, config)
            .then((res) => {
                console.log("task created")
                setTask({ ...task, descrip: "" })
                setIsDisabled(false)
                setFirstTask(true)

            })
            .catch((err) => {
                alert(err);
                console.log(err)
                setIsDisabled(false)
            });

    }

    return (
        <>
            <Header />
            <Container>

                {!mainFormComplete ?

                    <Form>
                        <form onSubmit={handleMainForm}>
                            <h1>...</h1>
                            <input
                                name="title"
                                type="text"
                                placeholder="your dream title"
                                required
                                onChange={(title) =>
                                    setDream({ ...dream, title: title.target.value })
                                }
                                value={dream.title}
                                data-test="title"
                            />

                            <input
                                name="dateToBeDone"
                                type="text"
                                placeholder="finish line (date)"
                                required
                                onChange={(dateToBeDone) =>
                                    setDream({ ...dream, dateToBeDone: dateToBeDone.target.value })
                                }
                                value={dream.dateToBeDone}
                                data-test="dateToBeDone"
                            />
                            <input
                                name="totalScore"
                                type="text"
                                placeholder="total score"
                                required
                                onChange={(totalScore) =>
                                    setDream({ ...dream, totalScore: Number(totalScore.target.value) })
                                }
                                value={dream.totalScore}
                                data-test="totalScore"
                            />

                            <input
                                name="pictureUrl"
                                type="url"
                                placeholder="1 picture"
                                required
                                onChange={(pictureUrl) =>
                                    setDream({ ...dream, pictureUrl: pictureUrl.target.value })
                                }
                                value={dream.pictureUrl}
                                data-test="pictureUrl"
                            />


                            <button type="submit" data-test="create-dream-btn" disabled={isDisabled}>next</button>
                        </form>
                    </Form>

                    :

                    <Form>

                        <form onSubmit={handleTaskForm}>
                            <Title>tasks to get there:</Title>
                            <input
                                name="task"
                                type="text"
                                placeholder="..."
                                required
                                onChange={(t) =>
                                    setTask({ ...task, descrip: t.target.value })
                                }
                                value={task.descrip}
                                data-test="task"
                            />
                            <button type="submit" data-test="create-task-btn" >add task</button>
                            {firstTask ? <button onClick={() => navigate("/dreamlist")}>complete</button> : ""}
                        </form>

                    </Form>
                }

            </Container>
        </>
    );
}


const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 100vw;
  background-color: #a2c1ba;

`;

const Title = styled.div`
    display: flex;
    text-align: start;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size:30px;
    color:white;
    padding:10px;
    text-shadow: 0 1px 20px rgba(0,0,0,0.5);    

`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Galdeano', sans-serif;
  width:100%;


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;
    height: 400px;
    width: 400px;

    h1{
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:100px;
    color:white;
    text-shadow: 0 1px 20px rgba(0,0,0,0.4);    
    }

    @media (max-width: 860px) {
      margin-top: 40px;
      width: 80%;
    }
  }

  input {
    width: 600px;
    height: 50px;
    left: 956px;
    top: 317px;
    background: #FFFFFF;
    border-radius: 6px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;
    color: #9F9F9F;
    margin-bottom: 12px;
    padding:18px;

    @media (max-width: 860px) {
      width: 100%;
    }
  }

  button {
    width: 600px;
    height: 50px;
    background: #DFB3B8;
    border-radius: 6px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
    color: #FFFFFF;
    margin-bottom: 22px;
    border-color: transparent;
    box-shadow: 0 10px 10px rgba(0,0,0,.1);
    cursor: pointer;
    @media (max-width: 860px) {
      width: 100%;
    }

  }

  p {
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #FFFFFF;
  }


`;
