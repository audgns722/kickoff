import React from 'react'

const LeagueAside = ({ rank }) => {
    if (!rank || rank.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className='leagueAside'>
            <div className="leagueAside__ad"></div>
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