import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Nav from '../components/layout/Nav';
import LeagueDetail from '../components/league/LeagueDetail';

const League = () => {
    const leagueNum = useParams();
    const [league, setLeague] = useState([]);
    // const [matches, setMatches] = useState([]);

    console.log(leagueNum.leagueId);

    // 리그정보
    useEffect(() => {
        axios.post("/api/league", { leagueNum: leagueNum.leagueId })
            .then((response) => {
                setLeague(response.data.league)
                console.log(response.data.league)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [leagueNum]);

    // // 리그경기
    // useEffect(() => {
    //     axios.post("/api/matches", { leagueNum })
    //         .then((response) => {
    //             console.log(response);
    //             setMatches(response.data.matches)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         });
    // }, [leagueNum]);

    return (
        <>
            <Nav />
            <LeagueDetail league={league} />
        </>
    )
}

export default League