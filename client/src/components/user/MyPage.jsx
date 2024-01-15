import React, { useEffect, useState } from 'react'

// icon
import { FaKey } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa6";

import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import MypageImage from './MypageImage';
import MypageBoardList from './MypageBoardList';
import MypageCommentList from './MypageCommentList';
import axios from 'axios';
import { getAuth, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";


const MyPage = () => {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [boardList, setBoardList] = useState([]);
    const [repleList, setRepleList] = useState([]);
    const [selectedTab, setSelectedTab] = useState('mylist');

    useEffect(() => {
        // 사용자가 로드되지 않았거나, 필요한 정보가 없으면 데이터를 가져오지 않습니다.
        if (!user.accessToken || !user.uid) {
            // navigate("/login");
            return;
        }

        // 데이터를 동시에 가져옵니다.
        const fetchData = async () => {
            try {
                await Promise.all([fetchBoardList(), fetchRepleList()]);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
        // eslint-disable-next-line
    }, [user.accessToken, user.uid]); // 사용자의 accessToken과 uid가 변경될 때마다 데이터를 다시 가져옵니다.

    // 내 작성글 불러오기
    const fetchBoardList = async () => {
        try {
            const response = await axios.post("/api/board/mypagelist", { uid: user.uid });
            if (response.data.success) {
                setBoardList([...response.data.boardList]);
            }
        } catch (err) {
            console.error(err);
        }
    };

    // 댓글 불러오기
    const fetchRepleList = async () => {
        try {
            const response = await axios.post("/api/reple/mypagereple", { uid: user.uid });
            if (response.data.success) {
                setRepleList(response.data.comments);
            }
        } catch (err) {
            console.error(err);
        }
    };

    // 회원탈퇴
    const handleUnregister = async () => {
        const auth = getAuth();
        const user = auth.currentUser;

        // 사용자에게 비밀번호 입력 요청
        const password = window.prompt("회원 탈퇴를 위해 비밀번호를 입력해주세요.");

        if (password) {
            const credential = EmailAuthProvider.credential(user.email, password);

            try {
                // 사용자 재인증
                await reauthenticateWithCredential(user, credential);

                // Firebase Authentication에서 사용자 삭제
                await deleteUser(user);

                // 서버에 MongoDB 데이터 삭제 요청
                await axios.post('/api/user/delete', { uid: user.uid });
                navigate("/");
            } catch (error) {
                alert("비밀번호가 일치하지 않습니다.")
            }
        } else {
            // 비밀번호 입력 취소
            console.log("회원 탈퇴가 취소되었습니다.");
        }
    };

    // 탭메뉴
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

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
                        <div className="info">
                            <h1>EMAIL</h1>
                            <p>{user.email}</p>
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
                                <FaKey />
                                <div>Edit Password</div>
                            </Link>
                            <span onClick={handleUnregister}>
                                <FaUserMinus />
                                <div>Unregister</div>
                            </span>
                        </div>
                    </div>
                    <div className="mypage__bottom">
                        {selectedTab === 'mylist' && <MypageBoardList boardList={boardList} />}
                        {selectedTab === 'mycomments' && <MypageCommentList repleList={repleList} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPage