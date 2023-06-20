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
                .get(`${URLGET}dreams/dreamlist`, config)
                .then((res) => {
                    setDreamList(res.data);
                })
        } catch (err) {
            console.log(err.response.data);
        }
    }

    async function openDream(dreamId) {
        try {
            navigate(`/dream/${dreamId}`)
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getDreams()
    }, []);


    return (
        <Screen>
            <Header />
            <Container>
                {dreamList.length === 0 ? <><p>nothing to see here</p> <p style={{ "text-decoration": "underline", "cursor": "pointer" }} onClick={() => navigate('/')}>Go to login page</p></> :

                    dreamList.map((d, index) => (
                        <DreamListItem
                            key={index}
                            dreamId={d.id}
                            title={d.title}
                            pictureUrl={d.pictureUrl}
                            partialPoints={d.partialPoints}
                            isDone={d.isDone}
                            dateWhenDone={d.dateWhenDone}
                            totalScore={d.totalScore}
                            openDream={openDream}
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