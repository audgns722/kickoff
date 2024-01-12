import React from 'react'

const qweqwe = () => {
    return (
        <div className="commentWrap">
            <ul>
                <li>
                    <p>
                        {props.reple.reple}
                    </p>

                    <div className="bottom">
                        <div className="bottom__left">
                            <div className="img" style={{ backgroundImage: 'url(../assets/img/liverpool.png)' }}>
                                {/* <!-- <img src="../assets/img/liverpool.png" alt="임시"> --> */}
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
                                            <label htmlFor="commentImg">
                                                댓글이미지
                                                <span>이미지첨부</span>
                                            </label>
                                            <span>*최대 1개(jpg, png, gif만 가능)</span>
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

export default qweqwe