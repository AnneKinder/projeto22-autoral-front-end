import { styled } from "styled-components"
import TaskItem from "./TaskItem"

export default function Tasklist({  tasklist, totalScore, checkedTasks, setCheckedTasks}) {
   
    const pointsByTask = (totalScore / tasklist.length)
    

    return (
        <Container>
            {tasklist.map((t, index) => (
                <TaskItem key={index} taskStatusId={taskStatusId} taskNumber={`t${index +1}`} task={t}  pointsByTask={pointsByTask} checkedTasks={checkedTasks} setCheckedTasks={setCheckedTasks} />
            ))}
            <button onClick={sendAdvanceToApi}>update</button>
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