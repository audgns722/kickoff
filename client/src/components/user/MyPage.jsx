import React, { useEffect, useState } from 'react'
import { LiaUserEditSolid } from "react-icons/lia";
import { AiOutlineUsergroupDelete } from "react-icons/ai";

import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import MypageImage from './MypageImage';
import MypageBoardList from './MypageBoardList';
import MypageCommentList from './MypageCommentList';
import axios from 'axios';


const MyPage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState("");
    const [repleList, setRepleList] = useState("");

    useEffect(() => {
        if (user.isLoading && !user.accessToken) {
            navigate("/login");
        } else {
        }
        // eslint-disable-next-line
    }, [])

    // 탭메뉴
    const [selectedTab, setSelectedTab] = useState('mylist');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    // 내 작성글 불러오기
    useEffect(() => {
        const fetchBoardList = async () => {
            try {
                const response = await axios.post("/api/board/mypagelist", { uid: user.uid });
                if (response.data.success) {
                    setBoardList([...response.data.boardList]);
                }
                console.log(response.data)
            } catch (err) {
                console.error(err);
            }
        };

        fetchBoardList();
    }, [user.uid]);

    // 댓글 불러오기
    // useEffect(() => {
    //     const fetchRepleList = async () => {
    //         tyy {
    //             const response = await axios.post("/api/reples/mypagereple", { uid : user.uid, boardId : boardId})
    //         }
    //     }
    // })

    // 조건부 렌더링
    if (!boardList || boardList.length === 0) {
        return <div style={{ backgroundColor: "var(--bgcolor)", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><span className="loader"></span></div>;
    }


    return (
        <>
            <div id='mypage'>
                <div className="mypage__info">
                    <div className="left">
                        <MypageImage />
                    </div>
                    <div className="right">
                        {/* <div className="info">
                            <h1>BIRTH DATE</h1>
                            <p>1992.02.20</p>
                        </div> */}
                        {/* <div className="info">
                            <h1>MY TEAM</h1>
                            <p>Tottenham Hotspur</p>
                        </div> */}
                        <div className="info">
                            <h1>NAME</h1>
                            <p>{user.displayName}</p>
                        </div>
                    </div>
                </div>
                <div className="mypage__content">
                    <div className="mypage__top">
                        <ul>
                            <li className={selectedTab === 'mylist' ? 'active' : ''} onClick={() => handleTabChange('mylist')}>내 작성글</li>
                            <li className={selectedTab === 'mycomments' ? 'active' : ''} onClick={() => handleTabChange('mycomments')}>내 댓글</li>
                        </ul>
                        <div className="right__text">
                            <Link to="/findpw">
                                <LiaUserEditSolid />
                                <div>Edit Password</div>
                            </Link>
                            <Link to="/">
                                <AiOutlineUsergroupDelete />
                                <div>Unregister</div>
                            </Link>
                        </div>
                    </div>
                    <div className="mypage__bottom">
                        {selectedTab === 'mylist' && <MypageBoardList boardList={boardList} />}
                        {selectedTab === 'mycomments' && <MypageCommentList boardList={boardList} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage