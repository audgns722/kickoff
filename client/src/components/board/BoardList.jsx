import React, { useEffect, useState } from 'react';
import Nav from '../layout/Nav'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// icon
import { TfiComment } from "react-icons/tfi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";





// import Aside from '../layout/Aside'
const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const navigate = useNavigate();


    const BoardWrite = () => {
        navigate('/boardwrite')
    }

    useEffect(() => {
        axios.post("/api/board/list")
            .then((response) => {
                if (response.data.success) {
                    console.log(response.data)
                    setBoardList([...response.data.boardList]);
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    return (
        <>
            <Nav />
            {/* <Aside /> */}
            <div style={{ padding: "55px 0 0 55px" }}>
                <div className="boardWrap">
                    <div className="board__cate">
                        <div className="cate__notice btn active">
                            공지사항
                        </div>
                        <div className="cate__community btn">
                            자유게시판
                        </div>
                    </div>
                    <div className="board__search">
                        <div className="search__left">
                            <p>전체 <span>999,999</span>건</p>
                        </div>
                        <div className="search__right">
                            <form action="#" name="search" method="post">
                                <fieldset>
                                    <legend className="blind">검색 영역</legend>
                                    <label htmlFor="board__search" className="blind">게시판 검색</label>
                                    <input type="text" name="board__search" id="board__search" placeholder="다른사람들은 어떤 이야기를 할까?" />
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="board__btn">
                        <div className="nav__left">
                            <div className="nav__sort">
                                <form>
                                    <fieldset>
                                        <legend className="blind">정렬 영역</legend>
                                        <input type="checkbox" name="sort1" id="sort1" /><label htmlFor="sort1">인기순</label>
                                        <input type="checkbox" name="sort2" id="sort2" /><label htmlFor="sort2">최신순</label>
                                        <input type="checkbox" name="sort3" id="sort3" /><label htmlFor="sort3">댓글순</label>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="nav__right">
                            <div className="nav__write" onClick={BoardWrite}>
                                게시글작성
                            </div>
                        </div>
                    </div>
                    <div className="board__list">
                        <ul>
                            {boardList.map((board, key) => {
                                return (
                                    <li key={key}>

                                        <div className="list__left">
                                            <div className="left__title">
                                                <div className="hot active">
                                                    HOT
                                                </div>
                                                <Link to={`/boarddetail/${board.boardNum}`}>
                                                    <div className="title" style={{ cursor: "pointer" }}>
                                                        <h3>{board.title}</h3>
                                                    </div>
                                                </Link>

                                            </div>

                                            <div className="left__desc" style={{ cursor: "pointer" }}>
                                                <p>
                                                    <Link to={`/boarddetail/${board.boardNum}`}>
                                                        {board.content}
                                                    </Link>
                                                </p>


                                                <div className="img">
                                                    <img src="../assets/img/liverpool.png" alt="임시" />
                                                </div>
                                            </div>
                                            <div className="left__info">
                                                <div className="info__left">
                                                    <div className="like">
                                                        <AiOutlineLike />
                                                        <span>공감 <i>777</i></span>
                                                    </div>
                                                    <div className="comment">
                                                        <TfiComment />
                                                        <span>댓글 <i>777</i></span>
                                                    </div>
                                                    <div className="view">
                                                        <AiOutlineEye />
                                                        <span>조회수 <i>777</i></span>
                                                    </div>
                                                </div>
                                                <div className="info__right">
                                                    <p><span>{board.author.displayName}</span>님이 <i>오늘</i> 작성</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list__right">
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </ >

    )
}

export default BoardList