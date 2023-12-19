import React from 'react'
import { Link } from 'react-router-dom'

const Join = () => {
    return (
        <div style={{ backgroundColor: "#fff" }}>
            <div class="join__wrap">
                <div class="join__title">
                    <h2>회원가입</h2>
                </div>
                <div class="join__index">
                    <ul>
                        <li></li>
                        <li></li>
                        <li class="active3"></li>
                    </ul>
                </div>
                <div class="join__insert">
                    <legend class="blind">회원가입 영역</legend>

                    <div class="join">
                        <label htmlFor="youEmail" class="required">이메일</label>
                        <div class="write">
                            <input type="email" id="youEmail" name="youEmail" placeholder="이메일을 적어주세요!"
                                class="input__style" />
                            <button class="btn">중복체크</button>
                            <p class="msg" id="youEmailComment">이메일은 8자 이상으로 입력해주세요. 영문,숫자만 사용 가능합니다.</p>
                        </div>
                    </div>

                    <div class="join">
                        <label htmlFor="youPass" class="required">비밀번호</label>
                        <div class="write">
                            <input type="text" id="youPass" name="youPass" placeholder="비밀번호를 적어주세요!" autocomplete="off"
                                class="input__style" />
                            <p class="msg" id="youPassComment">비밀번호는 8자 이상으로 입력해주세요. 영문,숫자, 기호 사용 가능합니다.</p>
                        </div>
                    </div>

                    <div class="join">
                        <label htmlFor="youPassC" class="required">비밀번호 확인</label>
                        <div class="write">
                            <input type="password" id="youPassC" name="youPassC" placeholder="다시 한번 비밀번호를 적어주세요!"
                                autocomplete="off" class="input__style" />
                            <p class="msg" id="youPassCComment">비밀번호 확인을 위해 다시 한 번 입력해주세요</p>
                        </div>
                    </div>
                    <div class="join">
                        <label htmlFor="youName" class="required">이름</label>
                        <div class="write">
                            <input type="text" id="youName" name="youName" placeholder="이름을 적어주세요!"
                                class="input__style" />
                            <p class="msg" id="youNameComment">정확한 이름을 넣어주세요. 문자만 사용 가능합니다.</p>
                        </div>
                    </div>
                    <button class="next"><Link to="/">회원가입 완료</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Join