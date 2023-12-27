import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
    return (
        <nav id="nav">
            <div className="nav__inner">
                <ul>
                    <li className="active">
                        <Link to="/league/2021">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/epl.png" alt="epl" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/league/2014">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/laliganew.png" alt="laliga" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/league/2019">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/seriea.png" alt="seriea" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/league/2015">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/ligue1A.png" alt="ligue1a" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/league/2002">
                            <img src="https://d37kf7rs4g1hyv.cloudfront.net/img/flags/64/101.png" alt="kleague" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default nav