import React from 'react'
import { Link } from 'react-router-dom'

const FindSuccess = () => {
    return (
        <div>
            <div class="login__wrap">
                <div class="ContextLogo">
                    <div class="logo__wrap">
                        <img class="Context__header-icon" src="/assets/img/image01.png" alt="KICKOFF" />
                        <h2 class="Context__header-title">KICKOFF</h2>
                    </div>
                </div>
                <div class="CardLayout-Container">
                    <div class="CardLayout">
                        <header class="CardLayout__header">
                            <h2>계정 발견!</h2>
                        </header>
                        <div class="EmailPage__content">
                            <form id="EmailForm">
                                <div class="email-field">
                                    <div class="notification">
                                        <div class="profile-image">
                                            <Link href="#">
                                                <img src="../assets/img/f_logo_RGB-Blue_58.png" alt="" />
                                            </Link></div>
                                        <p class="username">abc@chocolate.com</p>
                                    </div>
                                    <div class="findtext">
                                        <p>입력하신 정보와 연계된 KICKOFF 계정을 찾았습니다.</p>
                                        <p>올바른 계정이 안닌 경우 다른 이메일 주소나 전화번호로 다시 시도하십시오.</p>
                                    </div>

                                </div>
                                <div class="EmailPage__submit">
                                    <button>
                                        <span>계속</span>
                                    </button>
                                </div>
                                <div class="sumit">
                                    <button class="action-button">다시 시도</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindSuccess