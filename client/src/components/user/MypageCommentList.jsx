import React from 'react'
import moment from "moment";
import "moment/locale/ko";

const MypageCommentList = (props) => {
    if (props.repleList.length === 0) {
        return <div className='mypage__board'>
            <div className='reple__wrap'>
                <div className='list' style={{ justifyContent: "center" }}>작성된 댓글이 없습니다.</div>
            </div>
        </div>
    }
    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY년 MMMM Do a h:mm');
    }
    return (
        <>
            <div className="mypage__board">
                <div className="reple__wrap">
                    {props.repleList.map((reple, index) => (
                        <div className="list" key={index}>
                            <div className="number">{index + 1}</div>
                            <div className="content">{reple.reple}</div>
                            <div className="date">{formatDateString(reple.createdAt)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MypageCommentList