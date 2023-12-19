import React from 'react'
import Nav from '../layout/Nav'
// import Aside from '../layout/Aside'
const BoardDetail = () => {
    return (
        <>
            <Nav />
            {/* <Aside /> */}
            <div class="boardWrap">
                <div class="board__cate">
                    <div class="cate__notice btn active">
                        공지사항
                    </div>
                    <div class="cate__community btn">
                        자유게시판
                    </div>
                </div>
                <div class="board__detail">
                    <div class="title">
                        <p>제목들어가요</p>
                    </div>
                    <div class="profill">
                        <div class="profill__left">
                            <div className="img" style={{ backgroundImage: 'url(../assets/img/liverpool.png)' }}>
                                {/* <img src="../assets/img/liverpool.png" alt="임시" /> */}
                            </div>
                            <div class="text">
                                <p class="name">손흥민</p>
                                <p class="date">1일 전</p>
                            </div>
                        </div>
                        <div class="profill__right">
                            <div class="like">
                                좋아요이미지
                                <span>777</span>
                            </div>
                            <div class="comment">
                                댓글이미지
                                <span>777</span>
                            </div>
                            <div class="view">
                                {/* 조회수 */}
                                <span>777</span>
                            </div>
                        </div>
                    </div>
                    <div class="desc">
                        <p>
                            이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지
                            존속하며 그 직무를 행한다.

                            헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
                            없다.

                            법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 대한민국은
                            통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.

                            이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지
                            존속하며 그 직무를 행한다.

                            헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
                            없다.

                            법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 대한민국은
                            통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.
                        </p>
                    </div>
                    <div class="bottom">
                        <div class="tagWrap">
                            <div class="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                            <div class="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                            <div class="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                        </div>
                        <div class="btnWrap">
                            <a href="#" class="modify active">
                                수정하기
                            </a>
                            <div class="delete active">
                                <p>삭제하기</p>
                            </div>
                            <a href="#" class="list">
                                목록으로
                            </a>
                        </div>
                    </div>
                </div>
                <div class="commentWrite">
                    <form action="#" name="comment" method="post">
                        <fieldset>
                            <legend class="blind">댓글 영역</legend>
                            <textarea placeholder="댓글을 작성해주세요."></textarea>
                            <div class="bottom">
                                <div class="bottom__left">
                                    <label for="commentImg">
                                        댓글이미지
                                        <span>이미지첨부</span>
                                    </label>
                                    <span>*최대 1개(jpg, png, gif만 가능)</span>
                                </div>
                                <input type="file" class="blind" name="commentImg" id="commentImg" />
                                <button type="submit">댓글 등록</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="commentWrap">
                    <ul>
                        <li>
                            <p>
                                이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지
                                존속하며 그 직무를 행한다.

                                헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
                                없다.

                                법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 대한민국은
                                통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.

                                이 헌법시행 당시에 이 헌법에 의하여 새로 설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여 새로운 기관이 설치될 때까지
                                존속하며 그 직무를 행한다.

                                헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 군인은 현역을 면한 후가 아니면 국무위원으로 임명될 수
                                없다.

                                법률이 정하는 주요방위산업체에 종사하는 근로자의 단체행동권은 법률이 정하는 바에 의하여 이를 제한하거나 인정하지 아니할 수 있다. 대한민국은
                                통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.
                            </p>
                            <div class="bottom">

                                <div class="bottom__left">
                                    <div className="img" style={{ backgroundImage: 'url(../assets/img/liverpool.png)' }}>
                                        {/* <!-- <img src="../assets/img/liverpool.png" alt="임시"> --> */}
                                    </div>
                                    <p>
                                        <span>손흥민</span>님이 <i>1일전</i>
                                    </p>
                                </div>
                                <div class="bottom__right">
                                    <button type="submit">삭제하기</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="commentWrap__listBtn">
                        <a href="#" class="commentWrap__listBtn">
                            목록
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoardDetail