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
import Join from './components/user/Join'
import MyPage from './components/user/MyPage'
import LeagueDetail from './components/league/LeagueDetail'
import JoinEnd from './components/user/JoinEnd'
import FindId from './components/user/FindId'
import FindSuccess from './components/user/FindSuccess'
import BoardList from './components/board/BoardList'
import BoardDetail from './components/board/BoardDetail'
import BoardWrite from './components/board/BoardWrite.jsx'
import VideoView from './components/video/VideoView.jsx'

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo : ", userInfo);
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
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/joinAgree' element={<JoinAgree />}></Route>
          <Route path='/join' element={<Join />}></Route>
          <Route path='/joinEnd' element={<JoinEnd />}></Route>
          <Route path='/findId' element={<FindId />}></Route>
          <Route path='/findSuccess' element={<FindSuccess />}></Route>
          <Route path='/mypage' element={<MyPage />}></Route>
          <Route path='/boardlist' element={<BoardList />}></Route>
          <Route path='/boarddetail' element={<BoardDetail />}></Route>
          <Route path='/boardwrite' element={<BoardWrite />}></Route>
          <Route path='/leagueDetail' element={<LeagueDetail />}></Route>
          <Route path='/videoview' element={<VideoView />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App