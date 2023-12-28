import React, { useEffect, useState } from 'react'
import Nav from '../layout/Nav'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios';
import BoardImage from './BoardImage';

const BoardWrite = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();
    const NoticeLink = () => {
        navigate('/boardDetail');
    };

    const user = useSelector(state => state.user);

    useEffect(() => {
        if (!user.accessToken) {
            alert("로그인한 회원만 작성이 가능합니다.");
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === "" || content === "") {
            return alert("내용을 채워주세요!");
        }

        let body = {
            title: title,
            content: content,
            image: image,
            uid: user.uid
        }

        axios.post("/api/board/write", body)
            .then((resopnse) => {
                if (resopnse.data.success) {
                    alert("글 작성이 완료되었습니다.");
                    navigate("/boardlist");
                } else {
                    alert("글 작성이 실패하였습니다.");
                }
            })
    }
    return (
        <div style={{ padding: "55px 0 0 55px" }}>
            <Nav />
            <div className="boardWrap">
                <div className="board__cate">
                    <div className="cate__notice btn active" onClick={NoticeLink}>
                        공지사항
                    </div>
                    <div className="cate__community btn">
                        자유게시판
                    </div>
                </div>
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
                                <BoardImage setImage={setImage} />
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

export default BoardWrite