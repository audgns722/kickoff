import React, { useEffect, useState } from 'react';
import Nav from '../layout/Nav';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TfiComment } from "react-icons/tfi";
import { AiOutlineEye } from "react-icons/ai";
import moment from "moment";
import "moment/locale/ko";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sort, setSort] = useState("최신순");
    const [isLatestChecked, setIsLatestChecked] = useState(true);
    const [isCommentChecked, setIsCommentChecked] = useState(false);
    const [isViewChecked, setIsViewChecked] = useState(false);
    const { cate } = useParams(); // useParams로부터 cate 값을 가져옴

    const navigate = useNavigate();

    const BoardWrite = () => {
        navigate('/boardwrite');
    }

    function formatDateString(dateStr) {
        return moment(dateStr).format('YYYY년 MMMM Do a h:mm');
    }


    const getBoardList = () => {
        let body = {
            sort: sort,
            searchTerm: searchTerm,
            cate: cate
        };

        axios.post("/api/board/list", body)
            .then((response) => {
                if (response.data.success) {
                    setBoardList([...response.data.boardList]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        getBoardList();
        // eslint-disable-next-line
    }, [sort, cate]);

    const SearchHandler = () => {
        getBoardList();
    }

    const handleSortChange = (type) => {
        setSort(type);
        setIsLatestChecked(type === "최신순");
        setIsCommentChecked(type === "댓글순");
        setIsViewChecked(type === "조회순");

    }


    return (
        <>
            <Nav />
            <div id='boardList'>
                <div className="boardWrap">
                    <div className="board__cate">
                        <Link className={`cate__notice btn ${cate === 'notice' ? 'active' : ''}`} to={`/boardlist/notice`}>
                            공지사항
                        </Link>
                        <Link to={`/boardlist/community`} className={`cate__community btn ${cate === 'community' ? 'active' : ''}`}>
                            자유게시판
                        </Link>
                    </div>
                    <div className="board__search">
                        <div className="search__left">
                            <p>전체 <span>{boardList.length}</span>건</p>
                        </div>
                        <div className="search__right">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    SearchHandler();
                                }}
                            >
                                <fieldset>
                                    <legend className="blind">검색 영역</legend>
                                    <label htmlFor="board__search" className="blind">
                                        게시판 검색
                                    </label>
                                    <input
                                        type="text"
                                        name="board__search"
                                        id="board__search"
                                        placeholder="다른 사람들은 어떤 이야기를 할까?"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.currentTarget.value)}
                                    />
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
                                        <input
                                            type="checkbox"
                                            name="sort1"
                                            id="sort1"
                                            checked={isLatestChecked}
                                            onChange={() => handleSortChange("최신순")}
                                        />
                                        <span className="indicator" onClick={() => handleSortChange("최신순")}></span>
                                        <label htmlFor="sort1" >최신순</label>

                                        <input
                                            type="checkbox"
                                            name="sort2"
                                            id="sort2"
                                            checked={isCommentChecked}
                                            onChange={() => handleSortChange("댓글순")}
                                        />
                                        <span className="indicator" onClick={() => handleSortChange("댓글순")}></span>
                                        <label htmlFor="sort2">댓글순</label>

                                        <input
                                            type="checkbox"
                                            name="sort3"
                                            id="sort3"
                                            checked={isViewChecked}
                                            onChange={() => handleSortChange("조회순")}
                                        />
                                        <span className="indicator" onClick={() => handleSortChange("조회순")}></span>
                                        <label htmlFor="sort3">조회순</label>
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
                                                    <div className="title">
                                                        <h3>{board.title}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="left__desc">
                                                <p>
                                                    <Link to={`/boarddetail/${board.boardNum}`}>
                                                        {board.content}
                                                    </Link>
                                                </p>
                                                <Link className='boardImg' to={`/boarddetail/${board.boardNum}`}>
                                                    <img src={`http://localhost:5050/${board.image}`} alt={board.content} />
                                                </Link>
                                            </div>
                                            <div className="left__info">
                                                <div className="info__left">
                                                    {/* <div className="like">
                                                        <AiOutlineLike />
                                                        <span>공감 <i>777</i></span>
                                                    </div> */}
                                                    <div className="comment">
                                                        <TfiComment />
                                                        <span>댓글 <i>{board.repleNum}</i></span>
                                                    </div>
                                                    <div className="view">
                                                        <AiOutlineEye />
                                                        <span>조회수 <i>{board.views}</i></span>
                                                    </div>
                                                </div>
                                                <div className="info__right">
                                                    <p><span>{board.author.displayName}</span>님이 <i>{formatDateString(board.createdAt)}</i> 작성</p>
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
        </>
    )
}

export default BoardList

