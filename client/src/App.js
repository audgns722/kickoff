import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Login from './components/user/Login'
import JoinAgree from './components/user/JoinAgree'
import Join from './components/user/Join'
import JoinEnd from './components/user/JoinEnd'
import FindId from './components/user/FindId'
import FindSuccess from './components/user/FindSuccess'
import BoardList from './components/board/BoardList'
import BoardDetail from './components/board/BoardDetail'
import MyPage from './components/user/MyPage'
import LeagueDetail from './components/league/LeagueDetail'

const App = () => {
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
          <Route path='/list' element={<BoardList />}></Route>
          <Route path='/detail' element={<BoardDetail />}></Route>
          <Route path='/leagueDetail' element={<LeagueDetail />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App