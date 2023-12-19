import React from 'react'

const MyPage = () => {
    return (
        <>
            <div style={{ padding: "55px 0 0 55px" }}>
                <div className="mypage__info">
                    <div className="left">
                        <div className="profile">
                            <img src="/assets/img/profileimg.png" alt="프로필이지미" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h1>BIRTH DATE</h1>
                            <p>1992.02.20</p>
                        </div>
                        <div className="info">
                            <h1>MY TEAM</h1>
                            <p>Tottenham Hotspur</p>
                        </div>
                        <div className="info">
                            <h1>NAME</h1>
                            <p>Cristiano Ronaldo </p>
                        </div>
                    </div>
                </div>
                <div className="mypage__content">
                    <div className="mypage__top">
                        <ul>
                            <li className="active">승부예측</li>
                            <li>예측결과</li>
                            <li>내 작성글</li>
                        </ul>
                        <div className="right__text">
                            <a href="/">
                                <img src="/assets/img/edit.svg" alt="" />
                                <div>Edit Profile</div>
                            </a>
                            <a href="/">
                                <img src="/assets/img/unregister.svg" alt="" />
                                <div>Unregister</div>
                            </a>
                        </div>
                    </div>
                    <div className="mypage__bottom">
                        <div className="mypage__title">
                            <div className="left__text">Match Prediction</div>
                            <div className="right__text">BROADCAST MATCH</div>
                        </div>
                        <div className="match__result">
                            <div className="match__box">
                                <div className="left">
                                    <h1>MATCH<br />PREDICTION</h1>
                                    <p>Premier<br />League</p>
                                </div>
                                <div className="right">
                                    <div className="team">
                                        <div className="logo"></div>
                                        <div className="name">SHEFFIELD UNITED</div>
                                    </div>
                                    <span>VS</span>
                                    <div className="team">
                                        <div className="name">SHEFFIELD UNITED</div>
                                        <div className="logo myteam"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="match__box">
                                <div className="left">
                                    <h1>MATCH<br />PREDICTION</h1>
                                    <p>Premier<br />League</p>
                                </div>
                                <div className="right">
                                    <div className="team">
                                        <div className="logo"></div>
                                        <div className="name">SHEFFIELD UNITED</div>
                                    </div>
                                    <span>VS</span>
                                    <div className="team">
                                        <div className="name">SHEFFIELD UNITED</div>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="match__box result">
                                <div className="left">
                                    <h1>MATCH<br />RESULT</h1>
                                    <p>Premier<br />League</p>
                                </div>
                                <div className="right">
                                    <div className="team win">
                                        <div className="logo"></div>
                                        <div className="name">SHEFFIELD UNITED</div>
                                    </div>
                                    <span>VS</span>
                                    <div className="team win">
                                        <div className="name">SHEFFIELD UNITED</div>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="match__box result">
                                <div className="left">
                                    <h1>MATCH<br />RESULT</h1>
                                    <p>Premier<br />League</p>
                                </div>
                                <div className="right">
                                    <div className="team">
                                        <div className="logo"></div>
                                        <div className="name">SHEFFIELD UNITED</div>
                                    </div>
                                    <span>VS</span>
                                    <div className="team lose">
                                        <div className="name">SHEFFIELD UNITED</div>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage