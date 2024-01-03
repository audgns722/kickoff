import React from 'react'
import Nav from '../layout/Nav'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { AiTwotoneLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";
import RepleWrite from '../reple/RepleWrite';
import RepleList from '../reple/RepleList';

import moment from "moment";
import "moment/locale/ko";


// import Aside from '../layout/Aside'
const BoardDetail = (props) => {

    let params = useParams();
    const navigate = useNavigate();

    const NoticeLink = () => {
        navigate('/boardlist')
    }

    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY년 MMMM Do a h:mm');
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
                                <p className="date">{formatDateString(props.boardInfo.createdAt)}</p>
                            </div>
                        </div>
                        <div className="profill__right">
                            <div className="like">
                                <AiTwotoneLike />
                                <span>777</span>
                            </div>
                            <div className="comment">
                                <TfiComment />
                                <span>{props.boardInfo.repleNum}</span>
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        <p>
                            {props.boardInfo.content}
                        </p>
                        <img className='boardImg' src={`http://localhost:5050/${props.boardInfo.image}`} alt={props.boardInfo.content} />
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


                <RepleWrite boardId={props.boardInfo._id} />

                <RepleList boardId={props.boardInfo._id} />
            </div>
        </div>
    )
}

export default BoardDetail