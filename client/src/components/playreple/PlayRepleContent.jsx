import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from "react-redux";

import moment from "moment";
import "moment/locale/ko";

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

    // // 수정
    // const SubmitHandler = (e) => {
    //     e.preventDefault();
    //     let body = {
    //         uid: user.uid,
    //         reple: reple,
    //         matchId: props.reple.matchId,
    //         repleId: props.reple._id
    //     }

    //     axios.post("/api/playreple/edit", body).then((response) => {
    //         if (response.data.success) {
    //             alert("댓글 수정 성공하엿습니다.");
    //         } else {
    //             alert("댓글 수정 실패했습니다.")
    //         }
    //         return window.location.reload();
    //     })
    // }

    // // 삭제
    // const DeleteHandler = (e) => {
    //     e.preventDefault();
    //     if (window.confirm("정말로 삭제하시겠습니까?")) {
    //         let body = {
    //             repleId: props.reple._id,
    //             boardId: props.reple.boardId
    //         }
    //         axios.post("/api/playreple/delete", body).then((response) => {
    //             if (response.data.success) {
    //                 alert("댓글이 삭제됨");
    //                 window.location.reload();
    //             }
    //         })
    //             .catch((err) => {
    //                 console.log(err);
    //                 alert("댓글 삭제 실패함");
    //             })
    //     }
    // }

    return (
        <>
            <div className="comments">
                <div className="avatar" style={{ backgroundImage: `url(${props.reple.author.photoURL})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                <div className="text">
                    <div className="name">
                        <p>{props.reple.author.displayName}</p>
                        <div className='edit' onClick={() => { setModalFlag(true); }}>
                            편집
                            {modalFlag && (
                                <div className='modal' ref={ref}>
                                    <p onClick={() => {
                                        setModalFlag(false);
                                    }}>삭제</p>

                                    <p onClick={() => {
                                        setModalFlag(false);
                                    }}>수정</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="cont">{props.reple.reple}</div>
                </div>
                <div className="time">{SetTime(props.reple.createdAt, props.reple.updatedAt)}</div>
            </div>
        </>
    )
}

export default PlayRepleContent