import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Join from './pages/Join'

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/join' element={<Join />}></Route>
        </Routes>
      </Main>
    </>
  )
}

export default App