import React from 'react'

const LeagueDetail = ({ league }) => {
    if (!league || league.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div style={{ padding: "55px 0 0 55px" }}>
                <div className="detail__info">
                    <div className="left">
                        <div className="logo">
                            {league.competition.emblem &&
                                <img src={league.competition.emblem} alt={league.competition.name} />
                            }
                        </div>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h1>SICNCE</h1>
                            <p>1992.02.20</p>
                        </div>
                        <div className="info">
                            <h1>NUMBER OF TEAMS</h1>
                            {league &&
                                <p>{league.teams.length} teams</p>
                            }
                        </div>
                        <div className="info">
                            <h1>LEAGUES</h1>
                            {league &&
                                <p>{league.competition.name}</p>
                            }
                        </div>
                        <div className="info">
                            <h1>TEAMS</h1>
                            {league.teams.length > 0 && (
                                <div className="teams__logo">
                                    {league.teams.map((team, index) => (
                                        <div className="logo" key={index} style={{ backgroundImage: `url(${team.crest})` }}>
                                            {/* <img src={team.crest} alt={team.teamName} /> */}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="info">
                            <h1>BEST PLAYER</h1>
                            <p>Cristiano Ronaldo</p>
                        </div>
                        <div className="info"></div>
                    </div>
                </div>
                <div className="detail__content">
                    <div className="content__top">
                        <div className="left__text">Score</div>
                        <ul>
                            <li className="active">SUMMARY</li>
                            <li>RESULT</li>
                            <li>FIXTURES</li>
                            <li>VIDEOS</li>
                        </ul>
                        <div className="right__text">
                            <select name="detailSelect" id="detailSelect">
                                <option value="option1">▼ MORE</option>
                                <option value="option2">최신순</option>
                                <option value="option3">인기순</option>
                            </select>
                        </div>
                    </div>
                    <div className="content__bottom">
                        <div className="result__title">
                            <div className="left__text">Latest Scores</div>
                            <div className="right__text">BROADCAST MATCH</div>
                        </div>
                        <div className="result__info">
                            <div className="result__left">
                                <div className="league__logo"></div>
                                <div className="date">
                                    <p>21:45</p>
                                    <span>21 Aug</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team">
                                    <div className="logo"></div>
                                    <div className="name win">Liver Pool</div>
                                </div>
                                <div className="league__score"><em>2</em> : 1</div>
                                <div className="league__team">
                                    <div className="name">Liver Pool</div>
                                    <div className="logo"></div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                        <div className="result__info">
                            <div className="result__left">
                                <div className="league__logo"></div>
                                <div className="date">
                                    <p>21:45</p>
                                    <span>21 Aug</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team">
                                    <div className="logo"></div>
                                    <div className="name win">Liver Pool</div>
                                </div>
                                <div className="league__score"><em>2</em> : 1</div>
                                <div className="league__team">
                                    <div className="name">Liver Pool</div>
                                    <div className="logo"></div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                        <div className="result__info">
                            <div className="result__left">
                                <div className="league__logo"></div>
                                <div className="date">
                                    <p>21:45</p>
                                    <span>21 Aug</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team">
                                    <div className="logo"></div>
                                    <div className="name win">Liver Pool</div>
                                </div>
                                <div className="league__score"><em>2</em> : 1</div>
                                <div className="league__team">
                                    <div className="name">Liver Pool</div>
                                    <div className="logo"></div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                        <div className="result__info">
                            <div className="result__left">
                                <div className="league__logo"></div>
                                <div className="date">
                                    <p>21:45</p>
                                    <span>21 Aug</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team">
                                    <div className="logo"></div>
                                    <div className="name win">Liver Pool</div>
                                </div>
                                <div className="league__score"><em>2</em> : 1</div>
                                <div className="league__team">
                                    <div className="name">Liver Pool</div>
                                    <div className="logo"></div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                        <div className="result__info">
                            <div className="result__left">
                                <div className="league__logo"></div>
                                <div className="date">
                                    <p>21:45</p>
                                    <span>21 Aug</span>
                                </div>
                            </div>
                            <div className="result__center">
                                <div className="league__team">
                                    <div className="logo"></div>
                                    <div className="name win">Liver Pool</div>
                                </div>
                                <div className="league__score"><em>2</em> : 1</div>
                                <div className="league__team">
                                    <div className="name">Liver Pool</div>
                                    <div className="logo"></div>
                                </div>
                            </div>
                            <div className="result__right">
                                승패예측 결과 표시할 부분
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeagueDetail