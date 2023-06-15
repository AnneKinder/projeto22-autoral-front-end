import { styled } from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";

export default function NewDream() {
    const URLPOST = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const navigate = useNavigate();
    const [dream, setDream] = useState({ title: "", pictureUrl: "", date: "", score: "" })
    const [tasks, setTasks] = useState({ task1: "", task2: "", task3: "", task4: "", task5: "" })
    const [isDisabled, setIsDisabled] = useState(false)
    const [mainFormComplete, setIsMainFormComplete] = useState(false)


    function handleMainForm(e) {
        e.preventDefault();
        setIsDisabled(true)
        setIsMainFormComplete(true)
    }


    function handleTaskForm(e) {
        e.preventDefault();
        setIsDisabled(true)

        const body = {
            tasks, dream
        }

        axios
            .post(`${URLPOST}dream`, body)
            .then((res) => {
                navigate("/dreamlist");
                setIsDisabled(false)
            })
            .catch((err) => {
                alert(err);
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
                            <input
                                name="date"
                                type="text"
                                placeholder="finish line (date)"
                                required
                                onChange={(date) =>
                                    setDream({ ...dream, date: date.target.value })
                                }
                                value={dream.date}
                                data-test="date"
                            />
                            <input
                                name="score"
                                type="text"
                                placeholder="total score"
                                required
                                onChange={(score) =>
                                    setDream({ ...dream, score: score.target.value })
                                }
                                value={dream.score}
                                data-test="score"
                            />
                            <button type="submit" data-test="create-dream-btn" disabled={isDisabled}>next</button>
                        </form>
                    </Form>

                    :

                    <Form>

                        <form onSubmit={handleTaskForm}>
                            <Title>tasks to get there:</Title>
                            <input
                                name="task1"
                                type="text"
                                placeholder="..."
                                required
                                onChange={(t) =>
                                    setTasks({ ...tasks, task1: t.target.value })
                                }
                                value={tasks.task1}
                                data-test="task"
                            />

                            <input
                                name="task2"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, task2: t.target.value })
                                }
                                value={tasks.task2}
                                data-test="task"
                            />


                            <input
                                name="task3"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, task3: t.target.value })
                                }
                                value={tasks.task3}
                                data-test="task"
                            />


                            <input
                                name="task4"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, task4: t.target.value })
                                }
                                value={tasks.task4}
                                data-test="task"
                            />

                            <input
                                name="task5"
                                type="text"
                                placeholder="..."
                                onChange={(t) =>
                                    setTasks({ ...tasks, task5: t.target.value })
                                }
                                value={tasks.task5}
                                data-test="task"
                            />


                            <button type="submit" data-test="create-dream-btn" disabled={isDisabled}>start dreamin'</button>
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
