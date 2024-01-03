import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Aside = ({ matches, setMatches }) => {
    const [matchFlag, setMatchFlag] = useState(true);
    const [leagueNum, setLeagueNum] = useState("2021");

    const leagueNumHandler = (e) => {
        setLeagueNum(e.target.value);
    };

    useEffect(() => {
        axios.post('/api/matches', { leagueNum })
            .then((response) => {
                setMatches(response.data.matches);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [leagueNum, setMatches]);

    // 조건부 렌더링
    if (!matches || matches.length === 0) {
        return <div id='aside' style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>;
    }

    return (
        <aside id="aside">
            {matchFlag ? (
                <>
                    <div className="aside__match">
                        <div className="aside__close">
                            <span onClick={() => setMatchFlag(false)}>X</span>
                        </div>
                        <div className="aside__info">
                            <div className="home">
                                <div className="logo">
                                    <img src={matches?.[0]?.homeTeam?.crest} alt={matches?.[0]?.homeTeam?.name} />
                                </div>
                                <p className="team">{matches?.[0]?.homeTeam?.shortName}</p>
                                <Link to="#">HOME</Link>
                            </div>
                            <div className="score">
                                <div className="league">
                                    {matches?.[0]?.competition?.name}
                                </div>
                                <div className="home__score">
                                    {matches?.[0]?.score?.fullTime?.home}
                                </div>
                                <span>:</span>
                                <div className="away__score">
                                    {matches?.[0]?.score?.fullTime?.away}
                                </div>
                            </div>
                            <div className="away">
                                <div className="logo">
                                    <img src={matches?.[0]?.awayTeam?.crest} alt={matches?.[0]?.awayTeam?.name} />
                                </div>
                                <p className="team">{matches?.[0]?.awayTeam?.shortName}</p>
                                <Link to="#">AWAY</Link>
                            </div>
                        </div>
                    </div>
                    <div className="aside__ad"></div>
                </>
            ) : (
                <>
                    <div className='aside__matchOff' onClick={() => setMatchFlag(true)}>
                        <p>&lt; recent matches</p>
                    </div>
                    <div className="aside__ad off"></div>
                </>
            )}
            <div className="aside__score">
                <div className="score__title">
                    <h2>recent matches</h2>

                    <div>
                        <select name="link" id="link" onChange={leagueNumHandler} value={leagueNum}>
                            <option value="2021">EPL</option>
                            <option value="2014">LaLiga</option>
                            <option value="2019">SerieA</option>
                            <option value="2015">Ligue1</option>
                            <option value="2002">Bundesliga</option>
                        </select>
                    </div>

                </div>
                <div className="score__match">
                    <ul>
                        {matches.slice(1, 15).map((matche, key) => (
                            <li key={key}>
                                <div className="home">
                                    <div className="logo">
                                        <img src={matche.homeTeam.crest} alt={matche.homeTeam.tla} />
                                    </div>
                                    <p className={`team ${matche.score.winner === "HOME_TEAM" ? "" : matche.score.winner === "AWAY_TEAM" ? "lose" : ""}`}>
                                        {matche.homeTeam.tla}
                                    </p>
                                </div>
                                <div className="score">
                                    <div className="score__inner">

                                        {matche.score.winner === "HOME_TEAM" ? (
                                            // HOME_TEAM이 이긴 경우
                                            <div>
                                                <div className="home__score ">
                                                    {matche.score.fullTime.home}
                                                </div>
                                                <span>:</span>
                                                <div className="away__score HOME_TEAM">
                                                    {matche.score.fullTime.away}
                                                </div>
                                            </div>
                                        ) : matche.score.winner === "AWAY_TEAM" ? (
                                            // AWAY_TEAM이 이긴 경우
                                            <div>
                                                <div className="home__score HOME_TEAM">
                                                    {matche.score.fullTime.home}
                                                </div>
                                                <span>:</span>
                                                <div className="away__score" >
                                                    {matche.score.fullTime.away}
                                                </div>
                                            </div>
                                        ) : (
                                            // 무승부인 경우
                                            <div>
                                                <div className="home__score">
                                                    {matche.score.fullTime.home}
                                                </div>
                                                <span>:</span>
                                                <div className="away__score">
                                                    {matche.score.fullTime.away}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="away">
                                    <p className={`team ${matche.score.winner === "HOME_TEAM" ? "lose" : matche.score.winner === "AWAY_TEAM" ? "" : ""}`}>
                                        {matche.awayTeam.tla}
                                    </p>
                                    <div className="logo">
                                        <img src={matche.awayTeam.crest} alt={matche.awayTeam.tla} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Aside