import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import BoardList from './components/board/BoardList'
import BoardDetail from './components/board/BoardDetail'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/list' element={<BoardList />}></Route>
          <Route path='/detail' element={<BoardDetail />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App