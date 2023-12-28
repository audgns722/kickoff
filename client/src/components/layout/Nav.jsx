import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Nav = () => {
    const { leagueId } = useParams();

    return (
        <nav id="nav">
            <div className="nav__inner">
                <ul>
                    <li className={leagueId === '2021' ? 'active' : ''}>
                        <Link to="/league/2021">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/epl.png" alt="epl" />
                        </Link>
                    </li>
                    <li className={leagueId === '2014' ? 'active' : ''}>
                        <Link to="/league/2014">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/laliganew.png" alt="laliga" />
                        </Link>
                    </li>
                    <li className={leagueId === '2019' ? 'active' : ''}>
                        <Link to="/league/2019">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/seriea.png" alt="seriea" />
                        </Link>
                    </li>
                    <li className={leagueId === '2015' ? 'active' : ''}>
                        <Link to="/league/2015">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/ligue1A.png" alt="ligue1a" />
                        </Link>
                    </li>
                    <li className={leagueId === '2002' ? 'active' : ''}>
                        <Link to="/league/2002">
                            <img src="https://crests.football-data.org/BL1.png" alt="bundesliga" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav