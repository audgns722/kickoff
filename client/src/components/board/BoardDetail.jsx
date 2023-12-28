import React from 'react'
import Nav from '../layout/Nav'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";





// import Aside from '../layout/Aside'
const BoardDetail = (props) => {

    let params = useParams();
    const navigate = useNavigate();

    const NoticeLink = () => {
        navigate('/boardlist')
    }

    const DeleteHandler = () => {
        if (window.confirm('정말로 삭제하시겠습니까?')) {
            let body = {
                boardNum: params.boardNum,
            }
            axios
                .post('/api/board/delete', body)
                .then((resonpse) => {
                    if (resonpse.data.success) {
                        alert('게시글이 삭제되었습니다.')
                        navigate('/boardlist')
                    }
                })
                .catch((err) => {
                    console.log(err);
                    alert('게시글 삭제가 실패했습니다.')
                })
        }
    }


    return (
        <div style={{ padding: "55px 0 0 55px" }}>
            <Nav />
            {/* <Aside /> */}
            <div className="boardWrap">
                <div className="board__cate">
                    <div className="cate__notice btn active" onClick={NoticeLink}>
                        공지사항
                    </div>
                    <div className="cate__community btn">
                        자유게시판
                    </div>
                </div>
                <div className="board__detail">
                    <div className="title">
                        <p>{props.boardInfo.title}</p>
                    </div>
                    <div className="profill">
                        <div className="profill__left">
                            <div className="img" style={{ backgroundImage: 'url(../assets/img/liverpool.png)' }}>
                                {/* <img src="../assets/img/liverpool.png" alt="임시" /> */}
                            </div>
                            <div className="text">
                                <p className="name">{props.boardInfo.author.displayName}</p>
                                <p className="date">1일 전</p>
                            </div>
                        </div>
                        <div className="profill__right">
                            <div className="like">
                                <AiTwotoneLike />
                                <span>777</span>
                            </div>
                            <div className="comment">
                                <TfiComment />
                                <span>777</span>
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        <p>
                            {props.boardInfo.content}
                        </p>
                    </div>
                    <div className="bottom">
                        <div className="tagWrap">
                            <div className="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                            <div className="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                            <div className="tag">
                                <p># <span>첫번째</span></p>
                            </div>
                        </div>
                        <div className="btnWrap">
                            <Link to={`/boardmodify/${props.boardInfo.boardNum}`} className="modify active">
                                수정하기
                            </Link>
                            <div className="delete active">
                                <p onClick={() => DeleteHandler()} >삭제하기</p>
                            </div>
                            <Link to="/boardlist" className="list">
                                목록으로
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="commentWrite">
                    <form action="#" name="comment" method="post">
                        <fieldset>
                            <legend className="blind">댓글 영역</legend>
                            <textarea placeholder="댓글을 작성해주세요."></textarea>
                            <div className="bottom">
                                <div className="bottom__left">
                                    <label htmlFor="commentImg">
                                        댓글이미지
                                        <span>이미지첨부</span>
                                    </label>
                                    <span>*최대 1개(jpg, png, gif만 가능)</span>
                                </div>
                                <input type="file" className="blind" name="commentImg" id="commentImg" />
                                <button type="submit">댓글 등록</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="commentWrap">
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
                            <div className="bottom">

                                <div className="bottom__left">
                                    <div className="img" style={{ backgroundImage: 'url(../assets/img/liverpool.png)' }}>
                                        {/* <!-- <img src="../assets/img/liverpool.png" alt="임시"> --> */}
                                    </div>
                                    <p>
                                        <span>손흥민</span>님이 <i>1일전</i>
                                    </p>
                                </div>
                                <div className="bottom__right">
                                    <button type="submit">삭제하기</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="commentWrap__listBtn">
                        <Link href="#" className="commentWrap__listBtn">
                            목록
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardDetail