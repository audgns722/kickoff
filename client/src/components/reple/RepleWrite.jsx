import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const RepleWrite = (props) => {
    const [reple, setReple] = useState("");
    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        console.log("props.boardId:", props.boardId);
        e.preventDefault();

        if (!reple) {
            return alert("댓글 내용을 채워주세요!!!");
        }

        let body = {
            reple: reple,
            uid: user.uid,
            boardId: props.boardId
        }

        axios.post("/api/reple/submit", body).then((response) => {
            console.log(response.data);
            if (response.data.success) {
                alert("댓글 작성이 성공하였습니다.");
                window.location.reload();
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        })
    }
    return (

        <div className="commentWrite">
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
                            <label htmlFor="commentImg">
                                댓글이미지
                                <span>이미지첨부</span>
                            </label>
                            <span>*최대 1개(jpg, png, gif만 가능)</span>
                        </div>
                        <input type="file" className="blind" name="commentImg" id="commentImg" />
                        <button type="submit" onClick={(e) => { SubmitHandler(e) }}>댓글 등록</button>
                    </div>
                </fieldset>
            </form>
        </div>

    )
}

export default RepleWrite