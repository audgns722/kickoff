import React from 'react'
import { Link } from 'react-router-dom'

const MainCont = (props) => {
    return (
        <>
            <div style={{ padding: "55px 300px 0 55px" }}>
                <div className="today__highlight">
                    <div className="highlight__info">
                        <div className="league">
                            PREMIER LEAGUE
                        </div>
                        <div className="home">
                            chelsea
                        </div>
                        <span>VS</span>
                        <div className="away">
                            ARSENAL
                        </div>
                        <div className="desc">
                            한국대표팀 주장 손흥민은 지난 4일
                            맨체스터 시티(이하 맨시티)를 맞아
                            1골, 1도움, 1자책골을 기록했다.
                        </div>
                        <div className="btn">
                            <Link href="/">
                                <div className="icon">

                                </div>
                                <i>VIEW</i>
                            </Link>
                        </div>
                    </div>
                    <div className="highlight__socre">
                        <div className="league">
                            <p>PREMIERLEAGUE</p>
                        </div>
                        <div className="score">
                            <div className="home">
                                <span>HOME</span>
                                <p>chelsea</p>
                            </div>
                            <div className="point">
                                <i>SCORE</i>
                                <span>
                                    <div className="home">
                                        1
                                    </div>
                                    <span>:</span>
                                    <div className="away">
                                        2
                                    </div>
                                </span>
                            </div>
                            <div className="away">
                                <span>AWAY</span>
                                <p>arsenal</p>
                            </div>
                        </div>
                        <div className="date">
                            <p>DATE <span>2023.12.06</span></p>
                        </div>
                    </div>
                </div>
                <div className="main__board">
                    <div className="card">
                        <div className="title">
                            <p>today issue</p>
                        </div>
                        <p className="desc">
                            이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 이번주
                            해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯이번주 해축 레전드인듯이번주 해축 레전드인듯 이번주 해축 레전드인듯
                            이번주 해축 레전드인듯
                            이번주 해축 레전드인듯 이번주 해축 레전드인듯
                        </p>
                        <div className="btn">
                            <div className="like">
                                따봉
                                <span>369</span>
                            </div>
                            <div className="share">
                                공유
                                <span>369</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__video">
                    <div className="video__wrap">
                        {props.videoInfo.slice(0, 5).map((video, key) => (
                            <div className="video" key={key}>
                                <Link to={video.matchviewUrl} target='_blank'>
                                    <img src={video.thumbnail} alt="썸네일" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div >
            </div>
        </>
    )
}

export default MainCont