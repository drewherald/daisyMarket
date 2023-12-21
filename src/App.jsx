import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
    </Routes>
    </>
   
  )
}
