import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Aside = (props) => {
    const [matchFlag, setMatchFlag] = useState(true);

    console.log(props.matches)
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
                                    <img src={props.matches?.[0]?.homeTeam?.crest} alt={props.matches?.[0]?.homeTeam?.name} />
                                </div>
                                <p className="team">{props.matches?.[0]?.homeTeam?.shortName}</p>
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
                                <p className="team">{props.matches?.[0]?.awayTeam?.shortName}</p>
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
                </div>
                <div className="score__match">
                    <ul>
                        {props.matches.slice(1, 20).map((matche, key) => (
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