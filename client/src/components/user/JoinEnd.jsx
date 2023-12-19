import React from 'react'
import { Link } from 'react-router-dom'

const joinEnd = () => {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <div className="join__wrap">
                <div className="join__title">
                    <h2>회원가입</h2>
                </div>
                <div className="join__index">
                    <ul>
                        <li className="active1"></li>
                        <li className="active2"></li>
                        <li className="active3"></li>
                    </ul>
                </div>
                <div className="join__end">
                    <p>회원가입을 환영합니다.</p>
                    <button className="next"><Link to="/login">로그인 화면으로 이동</Link></button>
                </div>
            </div>
        </div>
    )
}

export default joinEnd