import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const JoinAgree = () => {
    useEffect(() => {
        const viewDetailsBtns = document.querySelectorAll(".viewDetailsBtn1, .viewDetailsBtn2, .viewDetailsBtn3, .viewDetailsBtn4");
        const closeDetailsBtns = document.querySelectorAll(".closeDetailsBtn");
        const scrollContents = document.querySelectorAll(".scroll");
        const agreeCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="agreeCheck"]');
        const indicator5 = document.querySelector(".indicator5");

        viewDetailsBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                scrollContents.forEach((content, i) => {
                    content.classList.remove("show");
                    if (i === index) {
                        content.classList.add("show");
                    }
                });

                btn.style.display = "none";
                closeDetailsBtns[index].style.display = "inline-block";
            });
        });

        closeDetailsBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                scrollContents[index].classList.remove("show");

                closeDetailsBtns[index].style.display = "none";
                viewDetailsBtns[index].style.display = "inline-block";
            });
        });

        viewDetailsBtns.forEach((btn, index) => {
            if (scrollContents[index].classList.contains("show")) {
                btn.style.display = "none";
                closeDetailsBtns[index].style.display = "inline-block";
            } else {
                btn.style.display = "inline-block";
                closeDetailsBtns[index].style.display = "none";
            }
        });

        if (indicator5) {
            indicator5.addEventListener("click", () => {
                indicator5.checked = !indicator5.checked;

                agreeCheckboxes.forEach((checkbox) => {
                    checkbox.checked = indicator5.checked;
                });
            });
        }
    }, []);

    return (
        <div style={{ backgroundColor: "#fff" }}>
            <div className="join__wrap">
                <div className="join__title">
                    <h2>회원가입</h2>
                </div>
                <div className="join__index">
                    <ul>
                        <li className="active1"></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="join__agree">
                    <div className="agree__box">
                        <h3 className="blind">KICK OFF 이용약관</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck1">
                                KICK 이용약관에 동의합니다.(필수)
                                <input type="checkbox" name="agreeCheck1" id="agreeCheck1" />
                                <span className="indicator"></span>
                                <button data-target="scrollContent1" className="viewDetailsBtn1">전문보기</button>
                                <button className="closeDetailsBtn" data-target="scrollContent1">전문 닫기</button>
                            </label>
                        </div>
                        <div className="scroll scroll__style" id="scrollContent1">
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)

                            ① 이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지되며, 이에 동의한 이용자가 서비스에 가입함으로써 효력이 발생된다. 단, 비회원은 본인확인
                            절차를 거친 경우 이 약관에 동의한 것으로 간주한다.

                            ② 대한축구협회는 필요하다고 인정되는 경우 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 서비스 화면에 이용자가 직접 확인할 수 있도록 공지한다.

                            ③ 이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 본인의 회원등록을 취소할 수 있으며, 계속 사용하는 경우에는 약관 변경에 동의한 것으로 간주되며
                            변경된 약관은 전항과 같은 방법으로 효력이 발생한다.

                            ④ 통합회원이 이용 할 수 있는 서비스는 다음과 같다.

                            1. 대한축구협회 홈페이지(www.joinkfa.com)

                        </div>
                    </div>
                    <div className="agree__box">
                        <h3 className="blind">KICK OFF 이용약관</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck2">
                                '개인정보 수집 및 이용'에 동의합니다.(필수)
                                <input type="checkbox" name="agreeCheck2" id="agreeCheck2" />
                                <span className="indicator"></span>
                                <button data-target="scrollContent2" className="viewDetailsBtn2">전문보기</button>
                                <button className="closeDetailsBtn" data-target="scrollContent2">전문 닫기</button>
                            </label>
                        </div>
                        <div className="scroll scroll__style" id="scrollContent2">
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)
                        </div>
                    </div>
                    <div className="agree__box">
                        <h3 className="blind">KICK OFF 이용약관</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck3">
                                '개인정보 제3자 제공 및 활용'에 동의합니다.(필수)
                                <input type="checkbox" name="agreeCheck3" id="agreeCheck3" />
                                <span className="indicator"></span>
                                <button data-target="scrollContent3" className="viewDetailsBtn3">전문보기</button>
                                <button className="closeDetailsBtn" data-target="scrollContent3">전문 닫기</button>
                            </label>
                        </div>
                        <div className="scroll scroll__style" id="scrollContent3">
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)
                        </div>
                    </div>
                    <div className="agree__box">
                        <h3 className="blind">KICK OFF 이용약관</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck4">
                                '법정대리인' 개인정보 및 이용에 동의합니다.(필수)
                                <input type="checkbox" name="agreeCheck4" id="agreeCheck4" />
                                <span className="indicator"></span>
                                <button data-target="scrollContent4" className="viewDetailsBtn4">전문보기</button>
                                <button className="closeDetailsBtn" data-target="scrollContent4">전문 닫기</button>
                            </label>
                        </div>
                        <div className="scroll scroll__style" id="scrollContent4">
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)
                            1. 서론
                            웹서비스 이용약관
                            대한축구협회 웹서비스 통합 이용약관
                            제1장 총칙
                            제1장 서비스의 정의

                            제1조 (목적)

                            이 약관은 대한축구협회 웹서비스가 제공하는 통합회원 서비스(이하 "서비스"라 한다)를 이용함에 있어 이용자와 대한축구협회간의 권리·의무 및 책임사항과 기타 필요한
                            사항의 규정을 목적으로 한다.


                            제2조(약관의 효력 및 변경)

                        </div>
                    </div>
                    <div className="agree__box1">
                        <h3 className="blind">모두 동의</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck5">
                                위 이용약관 및 개인정보 취급 방침에 모두 동의합니다.
                                <input type="checkbox" name="agreeCheck5" id="agreeCheck5" />
                                <span className="indicator5"> </span>
                            </label>
                        </div>
                    </div>
                    <button className="next"><Link to="/join">가입하기</Link></button>
                </div>
            </div>
        </div>
    )
}

export default JoinAgree