import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

// icon
import { AiOutlineMessage } from "react-icons/ai";

const PlayRepleWrite = (props) => {
    // console.log(props.matchId);

    const [reple, setReple] = useState("");
    const user = useSelector((state) => state.user);

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!reple) {
            return alert("댓글 내용을 채워주세요.");
        } else if (user.uid === '') {
            return alert("로그인을 해주세요.")
        }

        let body = {
            reple: reple,
            uid: user.uid,
            matchId: props.matchId
        }

        axios.post("/api/playreple/submit", body).then((response) => {
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
        <form action="#" name="comment" method="post">
            <fieldset>
                <legend className="blind">댓글 영역</legend>
                <label htmlFor="comment" className="blind">댓글입력</label>
                <input
                    type="text"
                    value={reple}
                    onChange={(e) => { setReple(e.currentTarget.value) }}
                    placeholder="응원톡에 참여해보세요"
                    id="comment"
                    className="commentInput" />
                <button type='submit' onClick={(e) => { SubmitHandler(e) }}>
                    <AiOutlineMessage />
                </button>
            </fieldset>
        </form>
    )
}

export default PlayRepleWrite