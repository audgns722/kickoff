import React from 'react'
import moment from "moment";
import "moment/locale/ko";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

const MypageBoardList = (props) => {
    function formatDateString(dateStr) {
        return moment(dateStr).format('YY-MM-D');
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
                                    <img src={`http://localhost:5050/${list.image}`} alt={list.content} />
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