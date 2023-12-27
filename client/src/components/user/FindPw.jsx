import React, { useState } from 'react'
import firebase from '../../firebase.js'

const FindPw = () => {
    const [findEmail, setFindEmail] = useState("");

    const FindFunc = (e) => {
        e.preventDefault();

        firebase.auth().sendPasswordResetEmail(findEmail)
            .then(() => {
                alert('비밀번호 재설정 이메일이 전송되었습니다. 이메일을 확인해주세요.');
                window.location.href = "/login"
            })
            .catch((error) => {
                console.error('비밀번호 재설정 이메일 전송 중 오류가 발생했습니다:', error);
                alert('비밀번호 재설정 이메일 전송에 실패했습니다. 다시 시도해주세요.');
            });
    }

    return (
        <div>
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
                            <h2>비밀번호 찾기</h2>
                        </div>
                        <div className="EmailPage__content">
                            <form id="EmailForm">
                                <div className="email-field">
                                    <p>이전에 사용한 이메일을 입력하시면 귀하의 비밀번호를 찾아보도록 하겠습니다.</p>
                                    <div className="email_address">
                                        <label htmlFor="EmailPage-EmailField">이메일 주소</label>
                                        <input type="email" placeholder="이메일을 입력해주세요" autocomplete="email"
                                            id="EmailPage-EmailField" name="username" onChange={(e) => setFindEmail(e.currentTarget.value)} />
                                    </div>
                                </div>
                                <div className="EmailPage__submit">
                                    <button type='submit' onClick={FindFunc}>
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

export default FindPw