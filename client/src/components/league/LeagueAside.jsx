import React from 'react'
import AsideAD from '../ad/AsideAD';

const LeagueAside = ({ rank }) => {
    // 조건부 렌더링
    if (!rank || rank.length === 0) {
        return <div className='leagueAside' style={{ backgroundColor: "var(--bgcolor)", display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>;
    }

    return (
        <div className='leagueAside'>
            <div className="leagueAside__ad">
                <AsideAD />
            </div>
            <div className="leagueAside__rank">
                <h2><span>{rank.competition.name}</span> TABLES</h2>
                <ul>
                    {rank.standings.map((el, key) => (
                        <React.Fragment key={key}>
                            {el.table.map((team, index) => (
                                < li key={index} style={{ color: "#fff" }} >
                                    <div className="rank__left">
                                        <div className="rank__logo">
                                            <img src={team?.team?.crest} alt={team?.team?.shortName} />
                                        </div>
                                        <p className='rank__team'>{team?.team?.shortName}</p>
                                    </div>
                                    <div className="rank__right">
                                        <p className="rank__ranking">
                                            {team?.position}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div >
    )
}

export default LeagueAside