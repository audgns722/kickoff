import React, { useEffect, useState } from 'react'
import axios from "axios"
import Nav from '../components/layout/Nav';
import Aside from '../components/layout/Aside';
import MainCont from '../components/main/MainCont';

const Home = () => {
    const [matches, setMatches] = useState([]);
    const [videoInfo, setVideoInfo] = useState([]);

    // data
    // useEffect(() => {
    //     axios.post("/api/matches")
    //         .then((response) => {
    //             // console.log(response);
    //             setMatches(response.data.matches);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [])

    // video
    useEffect(() => {
        axios.post("/api/video")
            .then((response) => {
                console.log(response.data)
                const countries = ["La Liga", "Serie A", "Ligue 1", "Bundesliga", "ENGLAND: Premier League"];
                const filteredVideos = response.data.response
                    .filter(video => countries.some(country => video.competition.includes(country))) // 여러 국가 포함 필터링
                    .sort((a, b) => new Date(b.date) - new Date(a.date)); // 최신순 정렬

                setVideoInfo(filteredVideos);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);



    return (
        <div>
            <Nav />
            <Aside matches={matches} setMatches={setMatches} />
            <MainCont videoInfo={videoInfo} />
        </div>
    )
}

export default Home