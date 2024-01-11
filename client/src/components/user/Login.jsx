import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../../firebase';
import { auth, googleProvider } from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginFunc = async (e) => {
        e.preventDefault();

        if (!(email && password)) {
            return alert("이메일 또는 비밀번호를 채워주세요.");
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            alert("로그인을 했습니다.");
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("이메일과 비밀번호를 다시 한번 확인해주세요.");
        }
    }

    // google 로그인
    // const signInWithGoogle = async () => {
    //     try {
    //         await auth.signInWithPopup(googleProvider);
    //         // 로그인 후 필요한 동작 수행
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const signInWithGoogle = async () => {
        try {
            // Google 로그인
            const result = await auth.signInWithPopup(googleProvider);

            // 로그인 성공 후 서버로 사용자 정보 전송
            if (result.user) {
                const user = {
                    email: result.user.email,
                    displayName: result.user.displayName,
                    uid: result.user.uid,
                    photoURL: result.user.photoURL,
                };

                // 서버에 사용자 정보 전송
                const response = await fetch('/api/user/google-signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(user),
                });

                if (response.ok) {
                    const serverResponse = await response.json();
                    console.log('User data saved on the server:', serverResponse);
                } else {
                    console.error('Failed to save user data on the server');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login__wrap">
            <div className="ContextLogo">
                <div className="logo__wrap">
                    {/* <img className="Context__header-icon" src="/assets/img/image01.png" alt="KICKOFF" /> */}
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
                                <p>신규 사용자이신가요? <Link to="/joinAgree">계정 만들기</Link></p>
                                <div className="email_address">
                                    <label htmlFor="EmailPage-EmailField">이메일 주소</label>
                                    <input
                                        type="email"
                                        autoComplete="off"
                                        required
                                        id="EmailPage-EmailField"
                                        name="username"
                                        value={email}
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                    />
                                </div>
                                <div className="password-field">
                                    <div className="password">
                                        <label htmlFor="passwordField">비밀번호</label>
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
                                    <p>비밀번호 모르시나요? <Link to="/findpw">비밀번호 찾기</Link></p>
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
                            <Link to="/">
                                {/* <img src="../assets/img/sml-google-logo.svg" alt="google" /> */}
                                <svg
                                    id="Button_-_Google"
                                    data-name="Button - Google"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 50 50"
                                >
                                    <rect id="Background" width="50" height="50" rx="25" fill="#fff" />
                                    <g id="Group_69890" data-name="Group 69890" transform="translate(13 10.771)">
                                        <g id="logo_googleg_48dp" transform="translate(0 2.228)">
                                            <path
                                                id="Shape"
                                                d="M20.52,9.818A13.788,13.788,0,0,0,20.3,7.364H9v4.642h6.458a5.52,5.52,0,0,1-2.395,3.622v3.011h3.878a11.7,11.7,0,0,0,3.578-8.82Z"
                                                transform="translate(3 2.455)"
                                                fill="#4285f4"
                                                fillRule="evenodd"
                                            />
                                            <path
                                                id="Shape-2"
                                                data-name="Shape"
                                                d="M11.681,20.43a11.456,11.456,0,0,0,7.942-2.907l-3.878-3.011a7.24,7.24,0,0,1-10.778-3.8H.957v3.109A12,12,0,0,0,11.681,20.43Z"
                                                transform="translate(0.319 3.57)"
                                                fill="#34a853"
                                                fillRule="evenodd"
                                            />
                                            <path
                                                id="Shape-3"
                                                data-name="Shape"
                                                d="M5.285,12.627a7.094,7.094,0,0,1,0-4.56V4.958H1.276a12.015,12.015,0,0,0,0,10.778l4.009-3.109Z"
                                                transform="translate(0 1.653)"
                                                fill="#fbbc05"
                                                fillRule="evenodd"
                                            />
                                            <path
                                                id="Shape-4"
                                                data-name="Shape"
                                                d="M11.681,4.773a6.483,6.483,0,0,1,4.587,1.795L19.71,3.125A11.533,11.533,0,0,0,11.681,0,12,12,0,0,0,.957,6.611L4.966,9.72a7.152,7.152,0,0,1,6.715-4.947Z"
                                                transform="translate(0.319)"
                                                fill="#ea4335"
                                                fillRule="evenodd"
                                            />
                                            <path id="Shape-5" data-name="Shape" d="M0,0H24V24H0Z" fill="none" fillRule="evenodd" />
                                        </g>
                                    </g>
                                </svg>
                                <span onClick={() => signInWithGoogle()}><em>google</em>로 계속</span>
                            </Link>
                            {/* <Link to="/">
                                <img src="../" alt="" />
                                <span><em>kakao</em>로 계속</span>
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login