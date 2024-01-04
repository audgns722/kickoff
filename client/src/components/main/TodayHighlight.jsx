import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// data
import { todayHL } from '../../data/todayHL';

// icon
import { FaShare } from "react-icons/fa";

const TodayHighlight = () => {
    const highlights = todayHL();
    const [randomHighlight, setRandomHighlight] = useState(null);

    useEffect(() => {
        const randomHighlights = highlights
            .filter((_, index) => index < 3)
            .sort(() => Math.random() - 0.5);

        setRandomHighlight(randomHighlights[0]);
        // eslint-disable-next-line
    }, []);

    if (!randomHighlight) return <div>Loading...</div>;

    return (
        <div className="today__highlight" style={{ backgroundImage: `url(${randomHighlight.img})` }}>
            <div className="highlight__info">
                <div className="league">
                    {randomHighlight.league}
                </div>
                <div className="home">
                    <p>{randomHighlight.home}</p>
                </div>
                <span>VS</span>
                <div className="away">
                    <p>{randomHighlight.away}</p>
                </div>
                <div className="desc">
                    {randomHighlight.desc}
                </div>
                <div className="btn">
                    <Link to={randomHighlight.link} target='_blank'>
                        <div className="icon">
                            <FaShare />
                        </div>
                        <i>VIEW</i>
                    </Link>
                </div>
            </div>
            <div className="highlight__socre">
                <div className="league">
                    <p>{randomHighlight.league}</p>
                </div>
                <div className="score">
                    <div className="home">
                        <span>HOME</span>
                        <p>{randomHighlight.homeTla}</p>
                    </div>
                    <div className="point">
                        <i>SCORE</i>
                        <span>
                            <div className="home">
                                {randomHighlight.homeScore}
                            </div>
                            <span>:</span>
                            <div className="away">
                                {randomHighlight.awayScore}
                            </div>
                        </span>
                    </div>
                    <div className="away">
                        <span>AWAY</span>
                        <p>{randomHighlight.awayTla}</p>
                    </div>
                </div>
                <div className="date">
                    <p>DATE <span>{randomHighlight.date}</span></p>
                </div>
            </div>
        </div>
    )
}

export default TodayHighlight