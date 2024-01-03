import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Nav from '../components/layout/Nav';
import LeagueDetail from '../components/league/LeagueDetail';
import LeagueAside from '../components/league/LeagueAside';

const League = () => {
    const leagueNum = useParams();
    const [league, setLeague] = useState([]);
    const [matches, setMatches] = useState([]);
    const [scheduled, setScheduled] = useState([]);
    const [rank, setRank] = useState([]);

    // console.log(leagueNum.leagueId);

    // 리그정보
    useEffect(() => {
        axios.post("/api/league", { leagueNum: leagueNum.leagueId })
            .then((response) => {
                setLeague(response.data.league)
                // console.log(response.data.league)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [leagueNum]);


    // 리그 종료된 경기
    useEffect(() => {
        axios.post("/api/matches", { leagueNum: leagueNum.leagueId })
            .then((response) => {
                setMatches(response.data.matches.slice(0, 10))
                // console.log(response.data.matches)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [leagueNum]);

    // 리그 예정된 경기
    useEffect(() => {
        axios.post("/api/scheduled", { leagueNum: leagueNum.leagueId })
            .then((response) => {
                setScheduled(response.data.scheduled.slice(0, 10))
                // console.log(response.data.scheduled)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [leagueNum])

    // 리그 랭킹
    useEffect(() => {
        axios.post("/api/rank", { leagueNum: leagueNum.leagueId })
            .then((response) => {
                setRank(response.data.rank)
                // console.log(response.data.rank)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [leagueNum])

    return (
        <>
            <Nav />
            <LeagueAside league={league} rank={rank} />
            <LeagueDetail league={league} matches={matches} scheduled={scheduled} />
        </>
    )
}

export default League