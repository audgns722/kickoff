
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';

import Nav from '../layout/Nav'

const BoardModify = () => {

    const [boardInfo, setBoardInfo] = useState({});
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    let params = useParams();
    let navigate = useNavigate();
    // const NoticeLink = () => {
    //     navigate('/boardDetail');
    // };

    // 글 정보 가져오기
    useEffect(() => {
        let body = {
            boardNum: params.boardNum
        }

        axios.post('/api/board/detail', body)
            .then((response) => {
                if (response.data.success) {
                    setBoardInfo(response.data.board);
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }, [params.boardNum])

    useEffect(() => {
        setTitle(boardInfo.title || "");
        setContent(boardInfo.content || "");
    }, [boardInfo]);

    // 글 수정하기
    const onSubmit = (e) => {
        e.preventDefault();

        if (title === '' || content === '') {
            return alert('모든 항목을 채워주세요!!');
        }

        let body = {
            title: title,
            content: content,
            boardNum: params.boardNum
        }

        axios
            .post('/api/board/modify', body)
            .then((response) => {
                if (response.data.success) {
                    alert('글 수정이 완료됐습니다.')
                    navigate('/boardlist');
                } else {
                    alert('글 수정이 실패하였습니다');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div style={{ padding: "55px 0 0 55px" }}>
            <Nav />
            {/* <Aside /> */}
            <div className="boardWrap">
                {/* <div className="board__cate">
                    <div className="cate__notice btn active" >
                        공지사항
                    </div>
                    <div className="cate__community btn">
                        자유게시판
                    </div>
                </div> */}
                <div className="board__detail write">
                    <form>
                        <fieldset>
                            <input
                                type='text'
                                className="title"
                                placeholder='제목을 입력해주세요'
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.currentTarget.value)} />
                            <div className="desc">
                                <textarea
                                    placeholder='내용을 입력해주세요'
                                    id="content"
                                    type='text'
                                    value={content}
                                    onChange={(e) => setContent(e.currentTarget.value)}
                                />
                            </div>
                            <div className="bottom">
                                <div className="bottom__left">
                                    <label htmlFor="commentImg">
                                        <span>이미지첨부</span>
                                    </label>
                                    <span>*최대 1개(jpg, png, gif만 가능)</span>
                                    <input type="file" className="blind" name="commentImg" id="commentImg" accept="image/png, image/jpeg, image/gif" />
                                </div>
                                <div className="btnWrap">
                                    <Link to="/boardlist" className="list">
                                        목록으로
                                    </Link>
                                    <button type="submit" className="writebtn" onClick={(e) => onSubmit(e)}>
                                        글 작성
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BoardModify