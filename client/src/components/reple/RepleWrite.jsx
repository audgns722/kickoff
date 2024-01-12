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
                            <span>*남을 비방하거나 상업적 용도의 글은 통보없이 삭제될 수 있습니다.</span>
                        </div>
                        <button type="submit" onClick={(e) => { SubmitHandler(e) }}>댓글 등록</button>
                    </div>
                </fieldset>
            </form>
        </div>

    )
}

export default RepleWrite