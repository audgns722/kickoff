import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JoinAgree = () => {
    const [allAgreed, setAllAgreed] = useState(false);
    const [individualAgreements, setIndividualAgreements] = useState({
        agreeCheck1: false,
        agreeCheck2: false,
        agreeCheck3: false,
        agreeCheck4: false,
    });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'agreeCheck5') {
            setAllAgreed(checked);
            setIndividualAgreements({
                agreeCheck1: checked,
                agreeCheck2: checked,
                agreeCheck3: checked,
                agreeCheck4: checked,
            });
        } else {
            setIndividualAgreements(prevState => ({
                ...prevState,
                [name]: checked,
            }));
            if (!checked) {
                setAllAgreed(false);
            } else {
                const allChecked = Object.values(individualAgreements).every(Boolean);
                setAllAgreed(allChecked);
            }
        }
    };

    useEffect(() => {
        if (allAgreed) {
            setIndividualAgreements({
                agreeCheck1: true,
                agreeCheck2: true,
                agreeCheck3: true,
                agreeCheck4: true,
            });
        }
    }, [allAgreed]);

    useEffect(() => {
        const allChecked = Object.values(individualAgreements).every(Boolean);
        setAllAgreed(allChecked);
    }, [individualAgreements]);

    const handleJoinClick = () => {
        if (!allAgreed) {
            alert("모든 항목을 체크해주세요.")
        }
    }

    const agreementsLabels = {
        agreeCheck1: `KICK 이용약관에 동의합니다.(필수)`,
        agreeCheck2: `'개인정보 수집 및 이용'에 동의합니다.(필수)`,
        agreeCheck3: `'개인정보 제3자 제공 및 활용'에 동의합니다.(필수)`,
        agreeCheck4: `'법정대리인' 개인정보 및 이용에 동의합니다.(필수)`,
    };

    const agreementsData = {
        agreeCheck1: (
            <>
                KICKOFF 이용약관<br /><br />
                <em>제 1조 (약관의 목적)</em><br />
                1. 본 약관은 주식회사 KICKOFF(이하 "회사")가 제공하는 KICKOFF 서비스(이하 "서비스")의 이용조건과 운영에 관한 제반 사항을 규정함을 목적으로 합니다.<br /><br />
                <em>제 2조 (약관의 효력과 변경)</em><br />
                1. 본 약관은 서비스를 이용하려는 모든 회원에게 공지함으로써 효력을 발생합니다.<br />
                2. 회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 고지함으로써 효력을 발생합니다.<br /><br />
                <em>제 3조 (이용자의 동의 및 약관의 준수)</em><br />
                1. 서비스를 이용하려는 자는 본 약관의 내용을 숙지하고 동의하여야 합니다.<br />
                2. 회사는 이용자가 약관에 동의한 경우 서비스 제공에 필요한 최소한의 개인정보를 수집할 수 있습니다.<br /><br />
                <em>제 4조 (서비스의 제공)</em><br />
                1. 회사는 이용자에게 안정적이고 지속적인 서비스를 제공하기 위해 최선을 다하며, 서비스의 일부 또는 전부를 수정하거나 중단할 수 있습니다.<br /><br />
                <em>제 5조 (서비스 이용료)</em><br />
                1. 서비스 이용은 무료로 제공되나, 일부 서비스는 별도의 유료 서비스로 제공될 수 있습니다. 유료 서비스의 경우, 이용자는 별도의 이용료를 납부하여야 합니다.<br /><br />
                <em>제 6조 (이용자의 의무)</em><br />
                1. 이용자는 서비스 이용 시 관련 법령 및 본 약관의 규정을 준수해야 합니다.<br />
                2. 이용자는 회사가 제공하는 서비스를 부정하게 이용하거나 타인에게 피해를 주어서는 안됩니다.<br /><br />
                <em>제 7조 (서비스 이용의 제한 및 정지)</em><br />
                1. 회사는 이용자가 서비스 이용에 위배되는 행위를 할 경우 사전 경고 없이 서비스 이용을 제한하거나 정지할 수 있습니다.<br /><br />
                <em>제 8조 (개인정보 보호)</em><br />
                1. 개인정보의 수집, 이용, 보관 등에 대해서는 회사의 개인정보 처리방침이 적용됩니다.<br /><br />
                <em>제 9조 (면책 및 책임제한)</em><br />
                1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인한 서비스 중단에 대한 책임을 지지 않습니다.<br /><br />
                <em>제 10조 (분쟁 해결)</em><br />
                1. 서비스 이용으로 발생한 분쟁에 대해서는 회사와 이용자간의 합의에 따라 원만하게 해결합니다.<br /><br />
            </>
        ),
        agreeCheck2: (
            <>
                개인정보 수집 및 이용 동의서<br /><br />
                <em>제 1조 (개인정보 수집 목적)</em><br />
                1. 본 동의서는 회사가 제공하는 "KICKOFF" 서비스(이하 "서비스")와 관련하여 이용자의 개인정보를 수집하는 목적을 설명합니다.<br />
                2. 회사는 서비스 제공을 위해 최소한의 개인정보를 수집하며, 수집된 정보는 아래의 목적으로만 사용됩니다.<br /><br />
                <em>제 2조 (수집하는 개인정보 항목)</em><br />
                1. 회사는 다음과 같은 개인정보를 수집할 수 있습니다.<br />
                2. 필수 항목: [예시로 주민등록번호, 주소, 전화번호 등]<br />
                3. 선택 항목: [예시로 취미, 관심사 등]<br /><br />
                <em>제 3조 (개인정보의 수집 방법)</em><br />
                1. 회사는 다음과 같은 방법으로 개인정보를 수집합니다.<br />
                2. 회원가입 시 입력
                3 .서비스 이용 과정에서 자동 수집<br /><br />
                <em>제 4조 (개인정보의 이용 목적)</em><br />
                1. 회사는 수집한 개인정보를 다음의 목적으로 이용합니다.<br />
                2. 서비스 제공, 운영, 유지보수
                3. 고객 문의 응대 및 불만 처리
                4. 신규 서비스 및 이벤트 정보 안내<br /><br />
                <em>제 5조 (개인정보의 보유 기간)</em><br />
                1. 회사는 개인정보를 수집 및 이용한 목적이 달성된 후에는 해당 정보를 즉시 파기합니다.<br /><br />
                <em>제 6조 (개인정보의 제3자 제공)</em><br />
                1. 회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.<br /><br />
                <em>제 7조 (개인정보의 안전성 확보 조치)</em><br />
                1. 회사는 이용자의 개인정보를 안전하게 관리하기 위해 기술적, 관리적, 물리적 보안 조치를 취합니다.<br /><br />
                <em>제 8조 (이용자의 권리)</em><br />
                1. 이용자는 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다.<br />
                2. 개인정보의 수집, 이용, 제공에 대한 동의 철회도 가능합니다.<br /><br />
            </>
        ),
        agreeCheck3: (
            <>
                개인정보 제3자 제공 및 활용 동의서<br /><br /><br />
                <em>제 1조 (개인정보 제3자 제공 목적)</em><br />
                1. 본 동의서는 회사가 제공하는 "KICKOFF" 서비스(이하 "서비스")와 관련하여 이용자의 개인정보를 제3자에게 제공하고 활용하는 목적을 설명합니다.<br />
                2. 회사는 서비스 제공을 위해 필요한 경우에 한하여 제3자에게 개인정보를 제공할 수 있으며, 이용자의 동의 없이는 이루어지지 않습니다.<br /><br />
                <em>제 2조 (제공하는 개인정보 항목)</em><br />
                1. 회사는 다음과 같은 개인정보를 제3자에게 제공할 수 있습니다.<br />
                2. [예시로 주민등록번호, 주소, 전화번호 등]<br /><br />
                <em>제 3조 (제공받는 자 및 제공 목적)</em><br />
                1. 회사는 제3자에게 개인정보를 제공하는 경우, 제공받는 자 및 그 목적을 명시하고 동의를 받습니다.<br />
                2. 제공받는 자: [제공받는 자의 명칭 또는 업체명]<br />
                3. 제공 목적: [제공받는 자가 개인정보를 활용하는 목적 설명]<br /><br />
                <em>제 4조 (개인정보 제3자 제공 및 활용 기간)</em><br />
                1. 회사는 개인정보를 제3자에게 제공하고 활용한 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br /><br />
                <em>제 5조 (개인정보의 안전성 확보 조치)</em><br />
                1. 회사는 이용자의 개인정보를 안전하게 보호하기 위해 필요한 조치를 취하며, 제3자에게 제공할 때에도 안전한 전송 방법 등을 이용합니다.<br /><br />
                <em>제 6조 (이용자의 권리)</em><br />
                1. 이용자는 개인정보 제3자 제공에 대한 동의를 거부할 권리가 있습니다. 동의를 거부할 경우에도 서비스 이용에 제한이 없습니다.<br /><br />
            </>
        ),
        agreeCheck4: (
            <>
                법정대리인 개인정보 수집 및 이용 동의서<br /><br />
                <em>제 1조 (개인정보 수집 목적)</em><br />
                1. 본 동의서는 회사가 제공하는 "KICKOFF" 서비스(이하 "서비스")와 관련하여 만 14세 미만 이용자의 법정대리인으로서 필요한 경우 법정대리인의 개인정보를 수집하는 목적을 설명합니다.<br />
                2. 법정대리인의 동의 없이는 만 14세 미만 이용자의 서비스 이용이 제한됩니다.<br /><br />
                <em>제 2조 (수집하는 법정대리인 개인정보 항목)</em><br />
                1. 회사는 다음과 같은 법정대리인의 개인정보를 수집할 수 있습니다.<br />
                2. 필수 항목: [예시로 주민등록번호, 주소, 전화번호 등]<br />
                3. 선택 항목: [예시로 취미, 관심사 등]<br /><br />
                <em>제 3조 (개인정보의 수집 방법)</em><br />
                1. 회사는 법정대리인의 동의를 받은 경우에 한하여 법정대리인의 개인정보를 수집합니다.<br />
                2. 법정대리인의 동의 없이는 법정대리인의 개인정보를 수집하지 않습니다.<br /><br />
                <em>제 4조 (개인정보의 이용 목적)</em><br />
                1. 회사는 법정대리인의 동의를 받은 경우에 한하여 수집된 개인정보를 다음의 목적으로 이용합니다.<br />
                2. 서비스 제공, 운영, 유지보수<br />
                3. 법정대리인에게 서비스 관련 안내 및 연락<br /><br />
                <em>제 5조 (개인정보의 보유 기간)</em><br />
                1. 회사는 법정대리인의 개인정보를 수집 및 이용한 목적이 달성된 후에는 해당 정보를 즉시 파기합니다.<br />
                <em>제 6조 (개인정보의 제3자 제공)</em><br />
                1. 회사는 법정대리인의 동의 없이는 개인정보를 제3자에게 제공하지 않습니다.<br /><br />
                <em>제 7조 (개인정보의 안전성 확보 조치)</em><br />
                1. 회사는 법정대리인의 개인정보를 안전하게 관리하기 위해 필요한 조치를 취하며, 안전한 전송 방법 등을 이용합니다.<br /><br />
                <em>제 8조 (법정대리인의 권리)</em><br />
                1. 법정대리인은 언제든지 자신의 개인정보 및 법정대리인으로서 자녀의 개인정보를 열람하고 수정할 수 있습니다.<br />
                2. 법정대리인은 서비스 제공을 위해 필요한 최소한의 개인정보를 제공하는 데 동의합니다.<br /><br />
            </>
        ),
    };

    // 약관보기
    useEffect(() => {
        const viewDetailsBtns = document.querySelectorAll(".viewDetailsBtn1, .viewDetailsBtn2, .viewDetailsBtn3, .viewDetailsBtn4");
        const closeDetailsBtns = document.querySelectorAll(".closeDetailsBtn");
        const scrollContents = document.querySelectorAll(".scroll");


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
                    {/* 개별 약관 체크박스 구성 */}
                    {Object.entries(individualAgreements).map(([key, value], index) => (
                        <div className="agree__box" key={index}>
                            <h3 className="blind">KICK OFF 이용약관</h3>
                            <div className="check">
                                <label htmlFor={key}>
                                    {agreementsLabels[key]}
                                    <input
                                        type="checkbox"
                                        name={key}
                                        id={key}
                                        checked={value}
                                        onChange={handleCheckboxChange}
                                    />
                                    <span className="indicator"></span>
                                    <button data-target={`scrollContent${index + 1}`} className={`viewDetailsBtn${index + 1}`}>전문보기</button>
                                    <button className="closeDetailsBtn" data-target={`scrollContent${index + 1}`}>전문 닫기</button>
                                </label>
                            </div>
                            <div className="scroll scroll__style" id={`scrollContent${index + 1}`}>
                                {agreementsData[key]}
                            </div>
                        </div>
                    ))}

                    <div className="agree__box1">
                        <h3 className="blind">모두 동의</h3>
                        <div className="check">
                            <label htmlFor="agreeCheck5">
                                <input
                                    type="checkbox"
                                    name="agreeCheck5"
                                    id="agreeCheck5"
                                    checked={allAgreed}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="indicator5"></span>
                                위 이용약관 및 개인정보 취급 방침에 모두 동의합니다.
                            </label>
                        </div>
                    </div>
                    <div className="next" disabled={!allAgreed} onClick={handleJoinClick}>
                        <Link to="/joininfo" onClick={(e) => !allAgreed && e.preventDefault()}>
                            가입하기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinAgree;