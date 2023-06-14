import { styled } from "styled-components"

export default function Tasklist() {
    return (
        <Container>

            <TaskItem>
                <div className="checkbox">X</div>
                <div className="task">task 1</div>
                <div className="score">500</div>

            </TaskItem>

            <TaskItem>
                <div className="checkbox">V</div>
                <div className="task">task 2</div>
                <div className="score" >10</div>
            </TaskItem>

        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction:column ;
    width: 100%;
    margin: 70px 0 70px 0;
    text-align: start;
    padding:10px;
`

const TaskItem = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width:100%;
    height:40px;    
    margin: 5px 0;
    padding: 15px;
    background-color: #a2c1ba;
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
            background-color: #DFB3B8;
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


