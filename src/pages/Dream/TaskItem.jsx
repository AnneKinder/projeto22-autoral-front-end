import { styled } from "styled-components"
import { ImCheckboxUnchecked } from 'react-icons/im';
import { ImCheckboxChecked } from 'react-icons/im';
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";


export default function TaskItem({ taskId, dreamId, task, status, pointsByTask, checkedTasks, setCheckedTasks }) {
    const { token } = useContext(AuthContext);
    const URLPOST = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function checkTask(taskId) {
        try {
            await axios
                .post(`${URLPOST}dreams/status/${taskId}`, "", config)
                .then((res) => {
                    setCheckedTasks([...checkedTasks, taskId])
                })
        } catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <TaskItemSty >
            <div className="checkbox" onClick={() => checkTask(taskId)}>{status ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}</div>
            <div className="task">{task}</div>
            <Score colorprop={status ? "#a2c1ba" : ""}>{parseInt(pointsByTask)}</Score>
        </TaskItemSty>

    )
}

const Score = styled.div`
        position: absolute;
        right: 8px;
        font-size: 20px;
        border: 2px white solid;
        padding:5px;
        border-radius: 50%;
        cursor:pointer;
        color:white;
        background-color: ${(props) => props.colorprop}; ;

`
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

    }
    `