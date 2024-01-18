import React from 'react'
import moment from "moment";
import "moment/locale/ko";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MypageBoardList = (props) => {
    if (props.boardList.length === 0) {
        return <div className='mypage__board'>
            <div className='list__wrap'>
                <div className='list' style={{ justifyContent: "center" }}>작성된 글이 없습니다.</div>
            </div>
        </div>
    }
    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY-MM-DD');
    }
    return (
        <>
            <div className="mypage__board">
                <div className="list__wrap">
                    {props.boardList.map((list, index) => (
                        <Link className="list" key={index} to={`/boarddetail/${list.boardNum}`}>
                            <div className="left">
                                <div className="number">{index + 1}</div>
                                <div className="img">
                                    <img src={`${list.image}`} alt={list.content} />
                                </div>
                                <div className="title">{list.title}</div>
                                <div className="content">{list.content}</div>
                                <span>[{list.repleNum}]</span>
                            </div>
                            <div className="right">
                                <div className="date">{formatDateString(list.createdAt)}</div>
                                <div className="view"><AiOutlineEye />3</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MypageBoardList