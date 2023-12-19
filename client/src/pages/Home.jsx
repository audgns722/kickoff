import React, { useEffect, useState } from 'react'
import axios from "axios"
import Nav from '../components/layout/Nav';
import Aside from '../components/layout/Aside';
import MainCont from '../components/main/MainCont';

const Home = () => {
    const [matches, setMatches] = useState([]);
    const [videoInfo, setVideoInfo] = useState([]);

    // data
    useEffect(() => {
        axios.post("/api/matches")
            .then((response) => {
                // console.log(response);
                setMatches(response.data.matches);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    // video
    useEffect(() => {
        axios.post("/api/video")
            .then((response) => {
                // console.log(response.data);
                setVideoInfo(response.data.response);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])



    return (
        <div>
            <Nav />
            <Aside matches={matches} />
            <MainCont videoInfo={videoInfo} />
        </div>
    )
}

export default Home