import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../layout/Nav';

const PlayDetail = () => {
    return (
        <>
            <Nav />
            <div style={{ padding: "55px 0 0 55px", background: "#fff" }}>
                <div className="play__wrap">
                    <div className="league__info">
                        <div className="league__title">
                            <img src="../assets/img/EPLlogo.png" alt="logo" />
                            <h3>English Premier League</h3>
                        </div>
                        <div className="play__info">
                            <div className="league__home">
                                <div className="logo">
                                    <img src="../assets/img/Liverpoollogo.png" alt="teamlogo" />
                                </div>
                                <h3 className="team">Liverpool</h3>
                                <p className="win"><em>14%</em> to win MATCH</p>
                            </div>
                            <div className="league__match">
                                <p className="date">12 Aug in <em>19:00</em></p>
                                <p className="score">1-0</p>
                                <p className="playdata">Serio A.(24) ⚽ | 🟥 Sido M.(54) </p>
                                <p className="stadium">Stadium: <em>Anfield</em></p>
                                <p className="draw"><em>14%</em> for a draw, <em>37%</em> for a???</p>
                            </div>
                            <div className="league__away">
                                <div className="logo">
                                    <img src="../assets/img/Liverpoollogo.png" alt="teamlogo" />
                                </div>
                                <h3 className="team">Liverpool</h3>
                                <p className="win"><em>14%</em> to win MATCH</p>
                            </div>
                        </div>
                        <div className="list">
                            <ul>
                                <li><Link href="#" className="active">MENU</Link></li>
                                <li><Link href="#">MENU</Link></li>
                                <li><Link href="#">MENU</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="play__bottom">
                    <div className="play__status">
                        <div className="status__top">
                            <div className="team">Liverpool</div>
                            <div>VS</div>
                            <div className="team">Liverpool</div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left"></div>
                            <div className="progress__text">
                                <div className="score">9</div>
                                <div>SHOOTING</div>
                                <div className="score">9</div>
                            </div>
                            <div className="progress__right"></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left"></div>
                            <div className="progress__text">
                                <div className="score">9</div>
                                <div>SHOOTING</div>
                                <div className="score">9</div>
                            </div>
                            <div className="progress__right"></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left"></div>
                            <div className="progress__text">
                                <div className="score">9</div>
                                <div>SHOOTING</div>
                                <div className="score">9</div>
                            </div>
                            <div className="progress__right"></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left"></div>
                            <div className="progress__text">
                                <div className="score">9</div>
                                <div>SHOOTING</div>
                                <div className="score">9</div>
                            </div>
                            <div className="progress__right"></div>
                        </div>
                        <div className="status__progress">
                            <div className="progress__left"></div>
                            <div className="progress__text">
                                <div className="score">9</div>
                                <div>SHOOTING</div>
                                <div className="score">9</div>
                            </div>
                            <div className="progress__right"></div>
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
                            <label for="comment" className="blind">댓글입력</label>
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