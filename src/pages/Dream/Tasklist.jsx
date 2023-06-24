import { styled } from "styled-components"
import TaskItem from "./TaskItem"

export default function Tasklist({ currentScore, setCurrentScore, tasklistInfo, totalScore, checkedTasks, setCheckedTasks}) {
   
    const pointsByTask = (totalScore/tasklistInfo.length)
    

    return (
        <Container>
            {tasklistInfo.map((t, index) => (
                <TaskItem key={index} taskId={t.id} dreamId={t.dreamId} task={t.descrip} status={t.isDone} pointsByTask={pointsByTask} checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks} currentScore={currentScore} setCurrentScore={setCurrentScore}/>
            ))}
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction:column ;
    width: 100%;
    margin: 70px 0 40px 0;
    text-align: start;
    padding:10px;
`