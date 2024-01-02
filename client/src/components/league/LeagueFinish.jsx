import React from 'react'

const LeagueFinish = ({ league, matches }) => {
    return (
        <>
            <div className="content__bottom">
                <div className="result__title">
                    <div className="left__text">Latest Scores</div>
                    <div className="right__text">BROADCAST MATCH</div>
                </div>
                {matches.slice(0, 10).map((matche, key) => {
                    const matchDate = new Date(matche.utcDate);

                    // 날짜와 시간 추출
                    const matchTime = matchDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
                    const matchDay = matchDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
                    return (
                        <div className="result__info" key={key}>
                            <div className="result__left">
                                <div className="league__logo" style={{ backgroundImage: `url(${league.competition.emblem}` }}></div>
                                <div className="date">
                                    <p>{matchTime}</p>
                                    <span>{matchDay}</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team home">
                                    <div className="logo">
                                        <img src={matche.homeTeam.crest} alt={matche.homeTeam.tla} />
                                    </div>
                                    <div className={`name ${matche.score.fullTime.home < matche.score.fullTime.away ? 'lose' : ''}`}>{matche.homeTeam.shortName}</div>
                                </div>
                                <div className="league__score">
                                    <span>
                                        <em className={matche.score.fullTime.home < matche.score.fullTime.away ? 'lose' : ''}>{matche.score.fullTime.home}</em> : <em className={matche.score.fullTime.home > matche.score.fullTime.away ? 'lose' : ''}>{matche.score.fullTime.away}</em>
                                    </span>
                                </div>
                                <div className="league__team away">
                                    <div className={`name ${matche.score.fullTime.home > matche.score.fullTime.away ? 'lose' : ''}`}>{matche.awayTeam.shortName}</div>
                                    <div className="logo">
                                        <img src={matche.awayTeam.crest} alt={matche.awayTeam.tla} />
                                    </div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default LeagueFinish