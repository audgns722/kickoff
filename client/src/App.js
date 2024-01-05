import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'


import Header from './components/layout/Header'
import Main from './components/layout/Main'

import Home from './pages/Home'
import Login from './components/user/Login'
import JoinAgree from './components/user/JoinAgree'
import JoinInfo from './components/user/joinInfo'
import JoinEnd from './components/user/JoinEnd'
import MyPage from './pages/MyPage.jsx'
import League from './pages/League'
import FindPw from './components/user/FindPw.jsx'
import BoardList from './components/board/BoardList'
import BoardWrite from './components/board/BoardWrite'
import BoardModify from './components/board/BoardModify.jsx'
import BoardArea from './components/board/BoardArea.jsx'
import LeagueDetail from './components/league/LeagueDetail.jsx'
import FindSuccess from './components/user/FindSuccess.jsx'
import Video from './pages/Video.jsx'
import PlayDetail from './components/league/PlayDetail.jsx'


const App = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo", userInfo);
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser())
      }
    })
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/login' element={<Login />} />

          <Route path='/joinagree' element={<JoinAgree />} />
          <Route path='/joininfo' element={<JoinInfo />} />
          <Route path='/joinend' element={<JoinEnd />} />

          <Route path='/findpw' element={<FindPw />} />
          <Route path='/findSuccess' element={<FindSuccess />} />

          <Route path='/mypage' element={<MyPage />} />
          <Route path='/boardlist/:cate' element={<BoardList />} />
          <Route path='/boardwrite' element={<BoardWrite />} />
          <Route path='/boarddetail/:boardNum' element={<BoardArea />} />
          <Route path='/boardmodify/:boardNum' element={<BoardModify />} />

          <Route path='/league/:leagueId' element={<League />} />
          <Route path='/leaguedetail' element={<LeagueDetail />} />

          <Route path="/playdetail/:leagueId/:matchId" element={<PlayDetail />} />

          <Route path='/videoview/:videoId' element={<Video />} />
        </Routes>
      </Main>
    </>
  )
}

export default App