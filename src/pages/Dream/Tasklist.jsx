import { styled } from "styled-components"
import TaskItem from "./TaskItem"

export default function Tasklist({ tasklistInfo, totalScore }) {

    const { id, dreamId, t1, t2, t3, t4, t5 } = tasklistInfo

    let rawTasklist = [t1, t2, t3, t4, t5]
    let tasklist = []

    for (let i = 0; i < rawTasklist.length; i++) {
        if (rawTasklist[i] != "") {
            tasklist.push(rawTasklist[i])
        }
    }

    const pointsByTask = (totalScore / tasklist.length)

    return (
        <Container>
            {tasklist.map((t, index) => (
                <TaskItem key={index} task={t} pointsByTask={pointsByTask} />
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