import { styled } from "styled-components"
import { ImCheckboxUnchecked } from 'react-icons/im';
import { ImCheckboxChecked } from 'react-icons/im';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";


export default function TaskItem({ taskNumber, task, pointsByTask, checkedTasks, setCheckedTasks }) {
    const { token } = useContext(AuthContext);

    function closeTask(taskNumber) {
        const newArray = [...checkedTasks, taskNumber]
        setCheckedTasks(newArray)
    }

    return (
        <TaskItemSty>
            <div className="checkbox" onClick={() => closeTask(taskNumber)}>{checkedTasks.includes(taskNumber) ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}</div>
            <div className="task">{task}</div>
            <div className="score">{parseInt(pointsByTask)}</div>
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
        display:flex;
        align-items: center;
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