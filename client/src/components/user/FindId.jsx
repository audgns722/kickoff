import React from 'react'

const FindId = () => {
    return (
        <div>
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
                            <h2>내 계정 찾기</h2>
                        </div>
                        <div className="EmailPage__content">
                            <form id="EmailForm">
                                <div className="email-field">
                                    <p>이전에 사용한 이메일이나 국가 코드가 포함된 전화번호를 입력하시면 귀하의 계정을 찾아보도록 하겠습니다.</p>
                                    <div className="email_address">
                                        <label for="EmailPage-EmailField">이메일 주소</label>
                                        <input type="email" placeholder="이메일을 입력해주세요" autocomplete="email"
                                            id="EmailPage-EmailField" name="username" value="" />
                                    </div>
                                </div>
                                <div className="EmailPage__submit">
                                    <button>
                                        <span>계속</span>
                                    </button>
                                </div>
                            </form>
                            <div className="RuleWithText"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindId