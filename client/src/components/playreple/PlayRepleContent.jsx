import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/ko";

// icon
import { AiOutlineMessage } from "react-icons/ai";

const PlayRepleContent = (props) => {
    // console.log(props.reple);

    const [modalFlag, setModalFlag] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, () => setModalFlag(false));

    function useOnClickOutside(ref, handler) {
        useEffect(() => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }

    const [editFlag, setEditFlag] = useState(false);
    const [reple, setReple] = useState(props.reple.reple)

    const user = useSelector((state) => state.user);

    const SetTime = (a, b) => {
        if (a !== b) {
            return moment(b).format("YYYY년 MMMM Do a h:mm") + "(수정됨)"
        } else {
            return moment(a).format("YYYY년 MMMM Do a h:mm");
        }
    }

    // 수정
    const SubmitHandler = (e) => {
        e.preventDefault();
        let body = {
            uid: user.uid,
            reple: reple,
            matchId: props.reple.matchId,
            repleId: props.reple._id
        }

        axios.post("/api/playreple/edit", body).then((response) => {
            if (response.data.success) {
                alert("댓글 수정 성공하엿습니다.");
            } else {
                alert("댓글 수정 실패했습니다.")
            }
            return window.location.reload();
        })
    }

    // 삭제
    const DeleteHandler = (e) => {
        // e.preventDefault();
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            let body = {
                repleId: props.reple._id,
                matcchId: props.reple.matchId
            }
            axios.post("/api/playreple/delete", body).then((response) => {
                if (response.data.success) {
                    alert("댓글이 삭제되었습니다.");
                }
            })
                .catch((err) => {
                    console.log(err);
                    alert("댓글 삭제에 실패했습니다.");
                })
        }
    }


    return (
        <>
            <div className="comments">
                <div className="avatar" style={{ backgroundImage: `url(${props.reple.author.photoURL})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                <div className="text">
                    <div className="name">
                        <p>{props.reple.author.displayName}</p>
                        <div className='edit' onClick={() => { setModalFlag(true); }}>
                            {user.uid === props.reple.author.uid ? (
                                <p>편집</p>
                            ) : (
                                <p></p>
                            )}
                            {modalFlag && (
                                <div className='modal' ref={ref}>
                                    <p onClick={() => {
                                        setModalFlag(false);
                                        DeleteHandler();
                                    }}>삭제</p>

                                    <p onClick={() => {
                                        setModalFlag(false);
                                        setEditFlag(true);
                                        setReple(reple);
                                    }}>수정</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {!editFlag ? (
                        <div className="cont">
                            <p>{props.reple.reple}</p>
                        </div>
                    ) : (
                        <div className="cont" style={{ border: "2px solid rgba(0,0,0,0.15)" }}>
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
                        </div>
                    )}
                </div>
                <div className="time"><p>{SetTime(props.reple.createdAt, props.reple.updatedAt)}</p></div>
            </div>
        </>
    )
}

export default PlayRepleContent