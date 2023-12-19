import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Main from './components/layout/Main'


import UserLogin from './components/user/UserLogin'
import UserJoin from './components/user/UserJoin'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<UserLogin />}></Route>
          <Route path='/Join' element={<UserJoin />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App