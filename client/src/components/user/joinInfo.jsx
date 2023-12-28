import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import firebase from '../../firebase.js'

const JoinInfo = () => {
    const [youName, setYouName] = useState("");
    const [youEmail, setYouEmail] = useState("");
    const [youPass, setYouPass] = useState("");
    const [youPassC, setYouPassC] = useState("");
    const [flag, setFlag] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);

    let navigate = useNavigate();

    const JoinFunc = async (e) => {
        setFlag(true);

        e.preventDefault();

        if (!(youName && youEmail && youPass && youPassC)) {
            return alert("모든 항목을 입력하셔야 회원가입이 가능합니다.");
        }
        if (youPass !== youPassC) {
            return alert("비밀번호가 일치하지 않습니다.")
        }
        if (!emailCheck) {
            return alert("이메일 중복검사를 진행해주세요.")
        }

        // firebase 회원가입
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(youEmail, youPass);

        await createdUser.user.updateProfile({
            displayName: youName,
        });

        console.log(createdUser.user);

        // mongoDB 회원가입
        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid,
        }

        axios.post("/api/user/join", body)
            .then((response) => {
                if (response.data.success) {
                    firebase.auth().signOut().then(() => {
                        alert("회원가입이 완료되었습니다.");
                        navigate("/joinEnd");
                    }).catch((error) => {
                        console.log(error);
                    });
                } else {
                    alert("회원가입이 실패하였습니다.");
                }
            })
            .catch((error) => {
                alert("회원가입 과정에서 오류가 발생했습니다.");
                console.log(error);
            });
    }

    const emailCheckFunc = (e) => {
        e.preventDefault();

        if (!youEmail) {
            return alert("이메일을 입력해주세요.");
        }

        let body = {
            email: youEmail,
        }

        axios.post("/api/user/emailcheck", body).then((response) => {
            if (response.data.success) {
                if (response.data.check) {
                    setEmailCheck(true);
                    alert("사용 가능한 이메일입니다.");
                } else {
                    alert("사용 불가능한 이메일입니다.")
                }
            }
        })
    }

    return (
        <>
            <div className="join__wrap" style={{ backgroundColor: "var(--white)" }}>
                <div className="join__title">
                    <h2>회원가입</h2>
                </div>
                <div className="join__index">
                    <ul>
                        <li></li>
                        <li className="active2"></li>
                        <li></li>
                    </ul>
                </div>
                <div className="join__insert">
                    <legend className="blind">회원가입 영역</legend>

                    <div className="join">
                        <label htmlFor="youEmail" className="required">이메일</label>
                        <div className="write">
                            <input
                                type="email"
                                id="youEmail"
                                name="youEmail"
                                placeholder="이메일을 적어주세요."
                                className="input__style"
                                autoComplete="off"
                                required
                                minLength={8}
                                value={youEmail}
                                onChange={(e) => setYouEmail(e.currentTarget.value)}
                            />
                            <button className="btn email" onClick={(e) => emailCheckFunc(e)}>중복체크</button>
                            <p className="msg" id="youEmailComment">이메일은 8자 이상으로 입력해주세요. 영문,숫자만 사용 가능합니다.</p>
                        </div>
                    </div>

                    <div className="join">
                        <label htmlFor="youPass" className="required">비밀번호</label>
                        <div className="write">
                            <input
                                type="password"
                                id="youPass"
                                name="youPass"
                                placeholder="비밀번호를 적어주세요."
                                className="input__style"
                                autoComplete="off"
                                required
                                minLength={8}
                                value={youPass}
                                onChange={(e) => setYouPass(e.currentTarget.value)}
                            />
                            <p className="msg" id="youPassComment">비밀번호는 8자 이상으로 입력해주세요. 영문,숫자, 기호 사용 가능합니다.</p>
                        </div>
                    </div>

                    <div className="join">
                        <label htmlFor="youPassC" className="required">비밀번호 확인</label>
                        <div className="write">
                            <input
                                type="password"
                                id="youPassC"
                                name="youPassC"
                                placeholder="다시 한번 비밀번호를 적어주세요."
                                autoComplete="off"
                                required
                                className="input__style"
                                value={youPassC}
                                onChange={(e) => setYouPassC(e.currentTarget.value)}
                            />
                            <p className="msg" id="youPassCComment">비밀번호 확인을 위해 다시 한 번 입력해주세요</p>
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
                                autoComplete='off'
                                required
                                className="input__style"
                                value={youName}
                                onChange={(e) => setYouName(e.currentTarget.value)}
                            />
                            <p className="msg" id="youNameComment">정확한 이름을 넣어주세요. 문자만 사용 가능합니다.</p>
                        </div>
                    </div>

                    <button disabled={flag} className="next" onClick={(e) => JoinFunc(e)}>회원가입 완료</button>

                </div>
            </div>
        </>
    )
}

export default JoinInfo