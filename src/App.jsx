import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/Shop/ProductDetails'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/product" element={<Shop/>}></Route>
      <Route path='/' element={<Home />}></Route>
    </Routes>
    </>
   
  )
}
