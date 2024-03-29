import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from "react-redux";


import moment from "moment";
import "moment/locale/ko";


const RepleContent = (props) => {
    const [editFlag, setEditFlag] = useState(false);
    const [reple, setReple] = useState(props.reple.reple)

    const user = useSelector((state) => state.user);

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY MMMM Do a h:mm") + "(수정됨)"
        } else {
            return moment(a).format("YYYY MMMM Do a h:mm");
        }
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            uid: user.uid,
            reple: reple,
            boardId: props.reple.boardId,
            repleId: props.reple._id
        }

        axios.post("/api/reple/edit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 수정되었습니다.");
            } else {
                alert("댓글 수정에 실패했습니다.")
            }
            return window.location.reload();
        })
    }


    const DeleteHandler = (e) => {
        e.preventDefault();
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                repleId: props.reple._id,
                boardId: props.reple.boardId
            }
            axios.post("/api/reple/delete", body).then((response) => {
                if (response.data.success) {
                    alert("댓글이 삭제되었습니다.");
                    // window.location.reload();
                }
            })
                .catch((err) => {
                    console.log(err);
                    alert("댓글 삭제에 실패했습니다.");
                })
        }
    }

    // 이미지 주소 판별
    const isFullUrl = user.photoURL?.startsWith('http://') || user.photoURL?.startsWith('https://');
    const imageUrl = isFullUrl ? user.photoURL : `http://localhost:5050/${user.photoURL}`;
    return (
        <div className="commentWrap">
            <ul>
                <li>
                    <p>
                        {props.reple.reple}
                    </p>

                    <div className="bottom">
                        <div className="bottom__left">
                            <div className="img">
                                <img src={imageUrl} alt="프로필 이미지" />
                            </div>
                            <p>
                                <span>{props.reple.author.displayName}</span>님이 <i>{SetTime(props.reple.createdAt, props.reple.updatedAt)}</i>
                            </p>
                        </div>
                        {user.uid === props.reple.author.uid ? (
                            <div className="bottom__right">
                                <button type="submit" onClick={(e) => DeleteHandler(e)}>삭제하기</button>
                                <button type="submit" onClick={() => { setEditFlag(true); }}>수정하기</button>
                            </div>
                        ) : (
                            <div className="bottom__right"></div>
                        )}
                    </div>

                    {editFlag ? (
                        <div className="editWrite">
                            <form action="#" name="comment" method="post">
                                <fieldset>
                                    <legend className="blind">댓글 영역</legend>
                                    <textarea
                                        text="text"
                                        value={reple}
                                        onChange={(e) => { setReple(e.currentTarget.value) }}
                                        placeholder="댓글을 작성해주세요.">
                                    </textarea>
                                    <div className="bottom">
                                        <div className="bottom__left">
                                            {/* <label htmlFor="commentImg">
                                                댓글이미지
                                                <span>이미지첨부</span>
                                            </label> */}
                                            <span>*남을 비방하거나 상업적 용도의 글은 통보없이 삭제될 수 있습니다.</span>
                                        </div>
                                        <input type="file" className="blind" name="commentImg" id="commentImg" />
                                        <div style={{ display: "flex", gap: "1px" }}>
                                            <button type="submit" onClick={(e) => { SubmitHandler(e) }}>댓글 수정</button>
                                            <button
                                                type="submit"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setEditFlag(false);
                                                }}
                                            >수정 취소</button>
                                        </div>

                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    ) : (
                        <p></p>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default RepleContent