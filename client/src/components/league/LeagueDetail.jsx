import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import LeagueFinish from './LeagueFinish';
import LeagueSchedul from './LeagueSchedul';

const LeagueDetail = ({ league, matches, scheduled }) => {
    // 리그정보
    const { leagueId } = useParams();
    // console.log(leagueId);
    const [leagueInfo, setLeagueInfo] = useState({});

    useEffect(() => {
        let info = {};

        if (leagueId === '2021') {
            info = {
                year: '1992.02.20',
                player: 'Erling Haaland',
            };
        } else if (leagueId === '2014') {
            info = {
                year: '1992',
                player: 'Jude Bellingham',
            };
        } else if (leagueId === '2019') {
            info = {
                year: '1898',
                player: 'Lautaro Martinez',
            };
        } else if (leagueId === '2015') {
            info = {
                year: '1932',
                player: 'Kylian Mbappe',
                img: '',
            };
        } else if (leagueId === '2002') {
            info = {
                year: '1962.07.28',
                player: 'Harry Kane',
            };
        }

        setLeagueInfo(info);
    }, [leagueId]);

    // 정렬
    const [sortOrder, setSortOrder] = useState('Newest');

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    let sortedMatches = matches;
    let sortedScheduled = scheduled;


    if (sortOrder === 'Oldest') {
        sortedMatches = [...matches].sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
        sortedScheduled = [...scheduled].sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
    } else {
        sortedMatches = [...matches].sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate));
        sortedScheduled = [...scheduled].sort((a, b) => new Date(b.utcDate) - new Date(a.utcDate));
    }

    // 탭메뉴
    const [selectedTab, setSelectedTab] = useState('finish');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    // 조건부 렌더링
    if (!league || league.length === 0 || !matches || matches.length === 0 || !scheduled || scheduled.length === 0) {
        return <div className='loaderWrap' style={{ padding: "55px 300px 0 55px" }}><span className="loader"></span></div>;
    }

    return (
        <>
            <div id='LeagueDetail'>
                <div className="detail__info">
                    <div className={`left ${leagueId === '2021' ? 'epl' : leagueId === '2014' ? 'laliga' : leagueId === '2019' ? 'serie' : leagueId === '2015' ? 'ligue1' : leagueId === '2002' ? 'bundesliga' : ''}`}>
                        <div className="logo">
                            <img src={league.competition.emblem} alt={league.competition.name} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="info">
                            <h1>SICNCE</h1>
                            <p>{leagueInfo.year}</p>
                        </div>
                        <div className="info">
                            <h1>NUMBER OF TEAMS</h1>
                            <p>{league.teams.length} teams</p>
                        </div>
                        <div className="info">
                            <h1>LEAGUES</h1>
                            <p>{league.competition.name}</p>
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
                            <p>{leagueInfo.player}</p>
                        </div>
                        <div className="info"></div>
                    </div>
                </div>
                <div className="detail__content">
                    <div className="content__top">
                        <div className="left__text">Score</div>
                        <ul>
                            <li className={selectedTab === 'finish' ? 'active' : ''} onClick={() => handleTabChange('finish')}>FINISH</li>
                            <li className={selectedTab === 'schedul' ? 'active' : ''} onClick={() => handleTabChange('schedul')}>SCHEDUL</li>
                        </ul>
                        <div className="right__text">
                            <select name="detailSelect" id="detailSelect" value={sortOrder} onChange={handleSortChange}>
                                <option value="option">▼ MORE</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>
                        </div>
                    </div>
                    {selectedTab === 'finish' ? (
                        <LeagueFinish leagueId={leagueId} league={league} matches={sortedMatches} />
                    ) : (
                        <LeagueSchedul league={league} scheduled={sortedScheduled} />
                    )}
                </div>
            </div>
        </>
    )
}

export default LeagueDetail