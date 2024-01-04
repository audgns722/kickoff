import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from "moment";
import "moment/locale/ko";

// icon
// import { FaShare } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const MainBoard = () => {
    const [boardList, setBoardList] = useState([]);

    useEffect(() => {
        axios.post("/api/board/mainlist")
            .then((response) => {
                if (response.data.success) {
                    // console.log(response.data)
                    setBoardList([...response.data.boardList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [boardList])

    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY-MM-DD');
    }

    return (
        <div className="main__board">
            {boardList.slice(0, 4).map((board, key) => {
                return (
                    <div className="card" key={key}>
                        <div className="title">
                            <p>
                                <Link to={`/boarddetail/${board.boardNum}`}>
                                    {board.title}
                                </Link>
                            </p>
                        </div>
                        <p className="desc">
                            <Link to={`/boarddetail/${board.boardNum}`}>
                                {board.content}
                            </Link>
                        </p>

                        <div className="card__btn">
                            <div className="btn__left">
                                <div className='date'>
                                    <span>{formatDateString(board.createdAt)}</span>
                                </div>
                                <div className='author'>
                                    <span>{board.author.displayName}</span>
                                </div>
                            </div>

                            <div className="btn__right">
                                <div className="like">
                                    <AiOutlineLike />
                                    <span>369</span>
                                </div>
                                {/* <div className="share">
                                <FaShare />
                                <span>369</span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MainBoard