import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import firebase from '../../firebase.js';
import { IoMdSearch } from "react-icons/io";

const Header = () => {
    const [selectedTimezone, setSelectedTimezone] = useState('KOREA');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

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

    const LogoutHandler = () => {
        firebase.auth().signOut();
        alert("로그아웃을 했습니다.");
        navigate("/");
    };

    const handleChange = (event) => {
        const path = event.target.value;
        navigate(`/${path}`);
    };

    // 검색 핸들러 수정
    const handleSearch = async (event) => {
        if (event.key === 'Enter' && searchInput.trim()) {
            try {
                const response = await axios.get(`http://localhost:5050/api/search?query=${encodeURIComponent(searchInput)}`);
                const searchResults = response.data.results;

                if (searchResults.length > 0) {
                    navigate(`/league/${searchResults[0].id}`);
                } else {
                    alert("No matching leagues found.");
                }
            } catch (error) {
                console.error('Search error:', error);
                alert('Error performing the search. Please try again.');
            }
        }
    };

    return (
        <header id="header">
            <div className="header__left">
                <Link to="/">
                    <h1 className="logo">KICKOFF</h1>
                </Link>
                <div className="search">
                    <IoMdSearch />
                    <label htmlFor="search">SEARCH</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Premier League, Chelsea"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyPress={handleSearch}
                    />
                </div>
            </div>

            <div className="header__right">
                <div className="link">
                    <label htmlFor="link" className="blind">LINK</label>
                    <select name="link" id="link" onChange={handleChange}>
                        <option value={`boardlist/notice`}>NOTICE</option>
                        <option value={`boardlist/community`}>BOARD</option>
                    </select>
                </div>
                <div className="time">
                    <label htmlFor="time" className="blind">TIME</label>
                    <select name="time" id="time" onChange={handleChangeTimezone} value={selectedTimezone}>
                        {renderTimeInfo('KOREA', 9, 'Korea')}
                        {renderTimeInfo('LONDON', 1, 'London')}
                        {renderTimeInfo('USA', -5, 'USA')}
                    </select>
                </div>
                <div className="login">
                    {user.accessToken === "" ? (
                        <Link to="/login" className='loginLink'>LOGIN</Link>
                    ) : (
                        <>
                            <p className='mypage'><Link to='/mypage'>{user.displayName}</Link><span>님 반갑습니다.</span></p>
                            <Link className='logout' onClick={(() => LogoutHandler())}>
                                LOGOUT
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
