import React from 'react';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav'
// import Aside from '../layout/Aside'
const BoardList = () => {
    return (
        <>
            <Nav />
            {/* <Aside /> */}
            <div style={{ padding: "55px 0 0 55px" }}>
                <div className="boardWrap">
                    <div className="board__cate">
                        <div className="cate__notice btn active">
                            공지사항
                        </div>
                        <div className="cate__community btn">
                            자유게시판
                        </div>
                    </div>
                    <div className="board__search">
                        <div className="search__left">
                            <p>전체 <span>999,999</span>건</p>
                        </div>
                        <div className="search__right">
                            <form action="#" name="search" method="post">
                                <fieldset>
                                    <legend className="blind">검색 영역</legend>
                                    <label htmlFor="board__search" className="blind">게시판 검색</label>
                                    <input type="text" name="board__search" id="board__search" placeholder="다른사람들은 어떤 이야기를 할까?" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="board__btn">
                        <div className="nav__left">
                            <div className="nav__sort">
                                <form action="#" name="sort" method="post">
                                    <fieldset>
                                        <legend class="blind">정렬 영역</legend>
                                        <input type="checkbox" name="sort" id="sort" value="인기순" /><label
                                            for="sort">인기순</label>
                                        <input type="checkbox" name="sort" id="sort" value="인기순" /><label
                                            for="sort">인기순</label>
                                        <input type="checkbox" name="sort" id="sort" value="인기순" /><label
                                            for="sort">인기순</label>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="nav__right">
                            <div className="nav__write">
                                글쓰기
                            </div>
                        </div>
                    </div>
                    <div className="board__list">
                        <ul>
                            <li>
                                <div className="list__left">
                                    <div className="left__title">
                                        <div className="hot active">
                                            HOT
                                        </div>
                                        <div className="title">
                                            <h3>제목들어가요.</h3>
                                        </div>
                                    </div>
                                    <div className="left__desc">
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
                                        <div className="img">
                                            <img src="../assets/img/liverpool.png" alt="임시" />
                                        </div>
                                    </div>
                                    <div className="left__info">
                                        <div className="info__left">
                                            <div className="like">
                                                공감이미지
                                                <span>공감 <i>777</i></span>
                                            </div>
                                            <div className="comment">
                                                댓글이미지
                                                <span>댓글 <i>777</i></span>
                                            </div>
                                            <div className="view">
                                                조회수이미지
                                                <span>조회수 <i>777</i></span>
                                            </div>
                                        </div>
                                        <div className="info__right">
                                            <p><span>손흥민</span>님이 <i>오늘</i> 작성</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="list__right">

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </ >

    )
}

export default BoardList