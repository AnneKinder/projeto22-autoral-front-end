import { styled } from "styled-components"

export default function TaskItem({ task, pointsByTask }) {
    return (
        <TaskItemSty>
            <div className="checkbox">X</div>
            <div className="task">{task}</div>
            <div className="score">{pointsByTask}</div>
        </TaskItemSty>

    )
}


const TaskItemSty = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width:100%;
    height:40px;    
    margin: 5px 0;
    padding: 15px;
    background-color: #dfb3b8;
    border-radius: 18px;
    position: relative;
    font-family: 'Galdeano', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    text-shadow: 0 20px 40px rgba(0,0,0,0.6);

    .checkbox{
        font-size: 15px;
        border: 2px white solid;
        padding:5px;
        border-radius: 50%;
        width:30px;
        cursor:pointer;

        &:hover{
            background-color: #a2c1ba;
        }
    }

    .task{
        padding-left:15px;
    }

    .score{
        position: absolute;
        right: 8px;
        font-size: 20px;
        border: 2px white solid;
        padding:5px;
        border-radius: 50%;
      //  background-color: #DFB3B8;
        cursor:pointer;
        color:white;
    }
    `