import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Aside = (props) => {
    const [leagueNum, setLeagueNum] = useState(""); // 상태 변수 및 업데이트 함수

    const leagueNumHandler = (e) => {
        setLeagueNum(e.target.value); // 상태 업데이트 함수를 사용하여 값을 업데이트
    };
    console.log(props.matches)
    return (
        <aside id="aside">
            <div className="aside__match">
                <div className="aside__close">
                    <span>X</span>
                </div>
                <div className="aside__info">
                    <div className="home">
                        <div className="logo">
                            <img src={props.matches?.[0]?.homeTeam?.crest} alt={props.matches?.[0]?.homeTeam?.name} />
                        </div>
                        <p className="team">{props.matches?.[0]?.homeTeam?.name}</p>
                        <Link to="#">HOME</Link>
                    </div>
                    <div className="score">
                        <div className="league">
                            {props.matches?.[0]?.competition?.name}
                        </div>
                        <div className="home__score">
                            {props.matches?.[0]?.score?.fullTime?.home}
                        </div>
                        <span>:</span>
                        <div className="away__score">
                            {props.matches?.[0]?.score?.fullTime?.away}
                        </div>
                    </div>
                    <div className="away">
                        <div className="logo">
                            <img src={props.matches?.[0]?.awayTeam?.crest} alt={props.matches?.[0]?.awayTeam?.name} />
                        </div>
                        <p className="team">{props.matches?.[0]?.awayTeam?.name}</p>
                        <Link to="#">AWAY</Link>
                    </div>
                </div>
            </div>

            <div className="aside__ad"></div>
            <div className="aside__score">
                <div className="score__title">
                    <h2>recent matches</h2>

                    <div className="link">
                        <label htmlFor="link" className="blind">LINK</label>
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
                        {props.matches.slice(1, 6).map((matche, key) => (
                            <li>
                                <div className="home">
                                    <div className="logo">
                                        <img src={matche.homeTeam.crest} alt={matche.homeTeam.tla} />
                                    </div>
                                    <p className="team">{matche.homeTeam.tla}</p>
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
                                    <p className="team">{matche.awayTeam.tla}</p>
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