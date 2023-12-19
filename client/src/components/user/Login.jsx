import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                    <header className="CardLayout__header">
                        <h2>로그인</h2>
                    </header>
                    <div className="EmailPage__content">
                        <form id="EmailForm">
                            <div className="email-field">
                                <p>신규 사용자이신가요?<Link to="/joinAgree"> 계정 만들기</Link></p>
                                <div className="email_address">
                                    <label for="EmailPage-EmailField">이메일 주소</label>
                                    <input type="email" autocomplete="email" id="EmailPage-EmailField" name="username" value="" />
                                </div>
                            </div>
                        </form>
                        <form id="PasswordForm">
                            <div class="password-field">
                                <div class="password">
                                    <label for="password">비밀번호</label>
                                    <input type="password" id="passwordField" name="username" value="" />
                                </div>
                            </div>
                            <div class="Password__submit">
                                <p>비밀번호 모르시나요?<Link href="#"> 비밀번호 찾기</Link></p>
                                <button>
                                    <span>계속</span>
                                </button>
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