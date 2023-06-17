import { styled } from "styled-components";
import Header from "../../components/Header";
import DreamListItem from "./DreamListItem";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";

export default function Dreamlist() {
    const URLGET = `${import.meta.env.VITE_REACT_APP_API_URL}/`;
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);

    const [dreamList, setDreamList] = useState([])

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function getDreams() {
        try {
            await axios
                .get(`${URLGET}dreams`, config)
                .then((res) => {
                    setDreamList(res.data.dream);
                })
        } catch (err) {
            console.log(err.response.data);
        }
    }

    useEffect(() => {
        getDreams()
    }, []);


    return (
        <Screen>
            <Header />
            <Container>
                {dreamList.length === 0 ? <div>loading</div> :

                    dreamList.map((item, index) => (
                        <DreamListItem
                            key={index}
                            title={item.title}
                            pictureUrl={item.pictureUrl}
                            partialPoints={item.partialPoints}
                            isDone={item.isDone}
                            dateWhenDone={item.dateWhenDone}
                            totalScore={item.totalScore}
                        />
                    ))
                }
            </Container>
        </Screen>

    )
}

const Screen = styled.div`
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin:40px;
`