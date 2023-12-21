import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase.js'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!(email && password)) {
            return alert("이메일 또는 비밀번호를 채워주세요!");
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인을 했습니다.");
            navigate("/");
        } catch (err) {
            console.log(err);
            // setErrorMsg("이메일과 비밀번호를 다시 한번 확인해주세요!")
        }
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setErrorMsg("")
    //     }, 5000)
    // }, [errorMsg]);

    return (
        <div className="login__wrap">
            <div className="ContextLogo">
                <div className="logo__wrap">
                    <img className="Context__header-icon" src="/assets/img/image01.png" alt="KICKOFF" />
                    <h2 className="Context__header-title">KICKOFF</h2>
                </div>
            </div>
            <div className="CardLayout-Container">
                <div className="CardLayout">
                    <div className="CardLayout__header">
                        <h2>로그인</h2>
                    </div>
                    <div className="EmailPage__content">
                        <form id="LoginForm">
                            <div className="email-field">
                                <p>신규 사용자이신가요?<Link to="/joinAgree"> 계정 만들기</Link></p>
                                <div className="email_address">
                                    <label htmlFor="EmailPage-EmailField">이메일 주소</label>
                                    <input
                                        type="email"
                                        autoComplete="email"
                                        id="EmailPage-EmailField"
                                        name="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                    />
                                </div>
                                <div className="password-field">
                                    <div className="password">
                                        <label htmlFor="password">비밀번호</label>
                                        <input
                                            type="password"
                                            id="passwordField"
                                            name="username"
                                            autoComplete='off'
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div className="Password__submit">
                                    <p>비밀번호 모르시나요?<Link href="#"> 비밀번호 찾기</Link></p>
                                    <button
                                        type='submit'
                                        onClick={(e) => LoginFunc(e)}
                                    >
                                        계속
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="RuleWithText-container">
                            <div className="RuleWithText-line"></div>
                            <div className="RuleWithText">또는</div>
                            <div className="RuleWithText-line"></div>
                        </div>
                        <div id="SocialButtons-Container">
                            <Link to="/#">
                                <img src="/assets/img/sml-google-logo.svg" alt="" />
                                <span><em>google</em>로 계속</span>
                            </Link>
                            <Link to="/">
                                <img src="/assets/img/sml-google-logo.svg" alt="" />
                                <span><em>kakao</em>로 계속</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login