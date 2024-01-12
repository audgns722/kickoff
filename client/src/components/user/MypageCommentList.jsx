import React from 'react'
import { Link } from 'react-router-dom'

const MypageBoardList = (props) => {
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
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MypageBoardList