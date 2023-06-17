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
    const [tasks, setTasks] = useState({ t1: "", t2: "", t3: "", t4: "", t5: "" })
    const [isDisabled, setIsDisabled] = useState(false)
    const [mainFormComplete, setIsMainFormComplete] = useState(false)

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    function handleMainForm(e) {
        e.preventDefault();
        setIsDisabled(true)
        setIsMainFormComplete(true)
    }
    function handleTaskForm(e) {
        e.preventDefault();

        axios.post(`${URLPOST}dreams`, { dream, tasks }, config)
            .then((res) => {
                navigate("/dreamlist");
                setIsDisabled(false)
            })
            .catch((err) => {
                alert(err);
                console.log(err)
                setIsDisabled(false)
            });

    }

    return (
        <Screen>
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
                                name="t1"
                                type="text"
                                placeholder="..."
                                required
                                onChange={(t) =>
                                    setTasks({ ...tasks, t1: t.target.value })
                                }
                                value={tasks.t1}
                                data-test="task"
                            />

                            <input
                                name="t2"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, t2: t.target.value })
                                }
                                value={tasks.t2}
                                data-test="task"
                            />


                            <input
                                name="t3"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, t3: t.target.value })
                                }
                                value={tasks.t3}
                                data-test="task"
                            />


                            <input
                                name="t4"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, t4: t.target.value })
                                }
                                value={tasks.t4}
                                data-test="task"
                            />

                            <input
                                name="t5"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, t5: t.target.value })
                                }
                                value={tasks.t5}
                                data-test="task"
                            />


                            <button type="submit" data-test="create-task-btn" >start dreamin'</button>
                        </form>

                    </Form>
                }

            </Container>
        </Screen>
    );
}
const Screen = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
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

const Plus = styled.div`
    display: flex;
    align-items: center;
    width: 200px;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #ffffff;
    text-shadow: 0 1px 20px rgba(0,0,0,0.5);    


`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Galdeano', sans-serif;
  width:100%;


  form {
    display: flex;
    flex-direction: column;
    margin: 80px 0 0 0;
    height: 400px;

    h1{
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size:100px;
    color:white;
    text-shadow: 0 1px 20px rgba(0,0,0,0.4);    
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
