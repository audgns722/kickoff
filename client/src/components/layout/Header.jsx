import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('KOREA');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [currentTime]);

    const getTimeWithOffset = (offset) => {
        const localTime = new Date();
        const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
        const newTime = new Date(utc + 3600000 * offset);
        return newTime.toLocaleTimeString();
    };

    const renderTimeInfo = (timezone, offset, label) => {
        return (
            <option value={timezone}>
                {label}: {getTimeWithOffset(offset)} (GMT{offset >= 0 ? '+' : ''}{offset})
            </option>
        );
    };

    const handleChangeTimezone = (e) => {
        setSelectedTimezone(e.target.value);
    };
    return (
        <header id="header">
            <div className="header__left">
                <h1 className="logo">
                    KICKOFF
                </h1>
                <div className="search">
                    <label htmlFor="search">SEARCH</label>
                    <input type="text" name="search" placeholder="Premier League, Chelsea" />
                    <p style={{ color: "#fff" }}>돋보기이미지 넣어야함</p>
                </div>
            </div>

            <div className="header__right">
                <div className="link">
                    <label htmlFor="link" className="blind">LINK</label>
                    <select name="link" id="link">
                        <option value="NOTICE">NOTICE</option>
                        <option value="BOARD">BOARD</option>
                    </select>
                </div>
                <div className="time">
                    <label htmlFor="time" className="blind">LINK</label>
                    <select name="time" id="lintimek" onChange={handleChangeTimezone} value={selectedTimezone}>
                        {renderTimeInfo('KOREA', 9, 'Korea')}
                        {renderTimeInfo('LONDON', 1, 'London')}
                        {renderTimeInfo('USA', -5, 'USA')}
                    </select>
                </div>
                <div className="login">
                    <Link to="/login">
                        LOGIN
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header