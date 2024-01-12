import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../layout/Nav';
import axios from 'axios';
import moment from 'moment';
import "moment/locale/ko";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PlayDetail = () => {
    const [playMatches, setPlayMatches] = useState(null);
    const [playMatches2, setPlayMatches2] = useState(null);
    const [head2Head, setHead2Head] = useState(null);
    const { leagueId, matchId } = useParams();


    // 날짜변경
    const convertUtcToKst = (utcDateString) => {
        const utcDate = moment.utc(utcDateString).locale('en');

        const kstDate = utcDate.add(9, 'hours');

        // 원하는 날짜 및 시간 포맷으로 변환 ('YY.MM.DDD HH:mm' 형식, 월을 영어로 표시)
        return kstDate.format('MMM DD HH:mm');
    }

    useEffect(() => {
        axios.post("/api/matches", { leagueNum: leagueId })
            .then((response) => {
                // 가져온 경기 데이터에서 해당 matchId와 일치하는 경기 정보를 찾음
                const match = response.data.matches.find(m => m.id === parseInt(matchId));

                if (match) {
                    setPlayMatches(match); // 찾은 경기 정보를 상태에 설정
                    // console.log(match)
                } else {
                    console.log("해당 경기 정보를 찾을 수 없습니다.");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line
    }, []);

    // head2head 정보 가져오기
    useEffect(() => {
        const fetchHeads = async () => {
            try {
                const response = await axios.post("/api/head2head", { matchId: matchId });
                setHead2Head(response.data.head)
            }
            catch (err) {
                console.log(err);
            }
        }
        fetchHeads();
    }, [matchId])

    useEffect(() => {
        const fetchMatches = async () => {
            try {
                // 첫 번째 API에서 경기 데이터 가져오기
                const response1 = await axios.post("/api/matches", { leagueNum: leagueId });
                const matchFromApi1 = response1.data.matches.find(m => m.id === parseInt(matchId));

                if (matchFromApi1 && matchFromApi1.homeTeam) {
                    // 두 번째 API에서 해당 날짜의 경기 데이터 가져오기
                    const response2 = await axios.get('https://api-football-beta.p.rapidapi.com/fixtures', {
                        params: { date: matchFromApi1.utcDate.substring(0, 10) },
                        headers: {
                            'x-rapidapi-key': '36c0488b9bmsha694c50fc1a58dap12df45jsn98128f857dfb',
                            'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
                        }
                    });

                    // 두 번째 API에서 홈 팀 이름이 일치하는 경기 찾기 (유사도 기준)
                    const matchedFixture = findMostSimilarMatch(matchFromApi1.homeTeam.name, response2.data.response);

                    if (matchedFixture) {
                        const fixtureId = matchedFixture.fixture.id;
                        const statistics = await axios.get('https://api-football-beta.p.rapidapi.com/fixtures/statistics', {
                            params: { fixture: fixtureId },
                            headers: {
                                'x-rapidapi-key': '36c0488b9bmsha694c50fc1a58dap12df45jsn98128f857dfb',
                                'x-rapidapi-host': 'api-football-beta.p.rapidapi.com'
                            }
                        });
                        setPlayMatches2(statistics.data.response);
                        // console.log(statistics.data.response);
                    } else {
                        console.log("일치하는 경기를 찾을 수 없습니다.");
                    }
                } else {
                    console.log("해당 경기 정보를 찾을 수 없습니다.");
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchMatches();
        // eslint-disable-next-line
    }, []);

    // 레벤슈타인 거리 함수
    function getLevenshteinDistance(a, b) {
        const matrix = [];

        // 각 문자열의 길이에 따라 행렬 초기화
        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }
        for (let i = 0; i <= a.length; i++) {
            matrix[0][i] = i;
        }

        // 거리 계산
        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
                }
            }
        }

        return matrix[b.length][a.length];
    }

    // 가장 유사한 경기 찾는 함수
    function findMostSimilarMatch(homeTeamName, matches) {
        let closestMatch = null;
        let smallestDistance = Infinity;

        matches.forEach(match => {
            const homeNameApi2 = match.teams.home.name;
            const distance = getLevenshteinDistance(homeTeamName, homeNameApi2);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                closestMatch = match;
            }
        });

        return closestMatch;
    }

    // 조건부 렌더링
    if (!playMatches || playMatches.length === 0 || !playMatches2 || playMatches2.length === 0 || !head2Head || head2Head.length === 0) {
        return <div style={{ backgroundColor: "var(--bgcolor)", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>;
    }

    return (
        <>
            <Nav />
            <div style={{ padding: "55px 0 0 55px", background: "#fff" }}>
                <div className="play__wrap">
                    <div className="league__info">
                        <div className="league__title">
                            <img src={playMatches.competition.emblem} alt={playMatches.competition.name} />
                            <h3>{playMatches.competition.name}</h3>
                        </div>
                        <div className="play__info">
                            <div className="league__home">
                                <div className="logo">
                                    <CircularProgressbar value={(head2Head.aggregates.homeTeam.wins / head2Head.aggregates.numberOfMatches) * 100} strokeWidth={5} circleRatio={0.75} styles={buildStyles({ rotation: 1 / 2 + 1 / 8, strokeLinecap: "butt", pathColor: "#f44336" })} />
                                    <img src={playMatches.homeTeam.crest} alt={playMatches.homeTeam.shortName} />
                                </div>
                                <h3 className="team">{playMatches.homeTeam.shortName}</h3>
                                <p className="win">expected goals<em>{playMatches2[0].statistics[16].value}</em></p>
                            </div>
                            <div className="league__match">
                                <p className="date">{convertUtcToKst(playMatches.utcDate)}</p>
                                {/* <p className="score">halftime : {playMatches.score.halfTime.home}-{playMatches.score.halfTime.away}</p> */}
                                <p className="score">{playMatches.score.fullTime.home} - {playMatches.score.fullTime.away}</p>
                                <p className="playdata">{playMatches.matchday} <em>Round</em></p>
                                {/* <p className="stadium">Stadium: <em>Anfield</em></p> */}
                                <p className="referee"><span></span>{playMatches.referees[0].name}</p>
                            </div>
                            <div className="league__away">
                                <div className="logo">
                                    <CircularProgressbar value={(head2Head.aggregates.awayTeam.wins / head2Head.aggregates.numberOfMatches) * 100} strokeWidth={5} circleRatio={0.75} styles={buildStyles({ rotation: 1 / 2 + 1 / 8, strokeLinecap: "butt", pathColor: "#3F51B5" })} />
                                    <img src={playMatches.awayTeam.crest} alt={playMatches.awayTeam.shortName} />
                                </div>
                                <h3 className="team">{playMatches.awayTeam.shortName}</h3>
                                <p className="win">expected goals<em>{playMatches2[1].statistics[16].value}</em></p>
                            </div>
                        </div>
                        <div className="list">
                            <ul>
                                <li><Link href="#" className="active">MENU</Link></li>
                                {/* <li><Link href="#">MENU</Link></li>
                                <li><Link href="#">MENU</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="play__bottom">
                    <div className="play__status">
                        <div className="status__top">
                            <div className="team">{playMatches.homeTeam.shortName}</div>
                            <div>VS</div>
                            <div className="team">{playMatches.awayTeam.shortName}</div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[9].value) }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[9].value}</div>
                                <div>점유율</div>
                                <div className="score">{playMatches2[1].statistics[9].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[9].value) }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[2].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[2].value}</div>
                                <div>전체슛</div>
                                <div className="score">{playMatches2[1].statistics[2].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[2].value) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[0].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[0].value}</div>
                                <div>유효숫</div>
                                <div className="score">{playMatches2[1].statistics[0].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[0].value) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[8].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[8].value}</div>
                                <div>오프사이드</div>
                                <div className="score">{playMatches2[1].statistics[8].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[8].value) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[6].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[6].value}</div>
                                <div>파울</div>
                                <div className="score">{playMatches2[1].statistics[6].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[6].value) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[7].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[7].value}</div>
                                <div>코너킥</div>
                                <div className="score">{playMatches2[1].statistics[7].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[7].value) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[15].value) }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[15].value}</div>
                                <div>패스성공률</div>
                                <div className="score">{playMatches2[1].statistics[15].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[15].value) }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[12].value) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[12].value}</div>
                                <div>선방</div>
                                <div className="score">{playMatches2[1].statistics[12].value}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[12].value || 0) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[10].value || 0) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[10].value || 0}</div>
                                <div>경고</div>
                                <div className="score">{playMatches2[1].statistics[10].value || 0}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[10].value || 0) * 5 + '%' }}></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left" style={{ '--progress-width': (playMatches2[0].statistics[11].value || 0) * 5 + '%' }}></div>
                            <div className="progress__text">
                                <div className="score">{playMatches2[0].statistics[11].value || 0}</div>
                                <div>퇴장</div>
                                <div className="score">{playMatches2[1].statistics[11].value || 0}</div>
                            </div>
                            <div className="progress__right" style={{ '--progress-width': (playMatches2[1].statistics[11].value || 0) * 5 + '%' }}></div>
                        </div>
                    </div>
                    <div className="play__comment">
                        <div className="comment__top">
                            ⚽ NOTICE <em>타팀 비하, 욕설 금지</em>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="comments">
                            <div className="avatar"></div>
                            <div className="text">
                                <div className="name">축덕</div>
                                <div className="cont">가고싶다 집에</div>
                            </div>
                            <div className="time">오후 12:30</div>
                        </div>
                        <div className="commnetBox">
                            <label htmlFor="comment" className="blind">댓글입력</label>
                            <input type="text" placeholder="응원톡에 참여해보세요" id="comment" className="commentInput" />
                            <div className="comment__view">1.6M+ <em>view</em></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayDetail