import React, { useState } from 'react';
import axios from 'axios';


const JoinInfo = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Firebase 인증 및 MongoDB 저장 로직
            const response = await axios.post('/api/register', { email, password, name });
            console.log(response.data); // 성공 메시지 또는 결과 로깅
            // 회원가입 성공 후 처리 로직
        } catch (error) {
            console.error("회원가입 오류", error);
        }
    };

    return (
        <div className="join__wrap">
            <div className="join__title">
                <h2>회원가입</h2>
            </div>
            <div className="join__index">
                <ul>
                    <li className="step active"><a href="#">1단계: 이메일 입력</a></li>
                    <li className="step"><a href="#">2단계: 비밀번호 설정</a></li>
                    <li className="step"><a href="#">3단계: 개인정보 입력</a></li>
                </ul>
            </div>
            <div className="join__insert">
                <form onSubmit={handleSubmit}>
                    <div className="join">
                        <label htmlFor="youEmail" className="required">이메일</label>
                        <div className="write">
                            <input
                                type="email"
                                id="youEmail"
                                name="youEmail"
                                placeholder="이메일을 적어주세요!"
                                className="input__style"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="join">
                        <label htmlFor="youPass" className="required">비밀번호</label>
                        <div className="write">
                            <input
                                type="password"
                                id="youPass"
                                name="youPass"
                                placeholder="비밀번호를 적어주세요!"
                                autoComplete="off"
                                className="input__style"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="join">
                        <label htmlFor="youName" className="required">이름</label>
                        <div className="write">
                            <input
                                type="text"
                                id="youName"
                                name="youName"
                                placeholder="이름을 적어주세요!"
                                className="input__style"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="next">회원가입 완료</button>
                </form>
            </div>
        </div>
    );
};

export default JoinInfo;
