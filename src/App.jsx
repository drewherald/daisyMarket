import React, { useState } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/Shop/ProductDetails'

export default function App() {

  const [cart, setCart] = useState([])
  const [cartSize, setCartSize] = useState(cart.length)

  const updateCart = (item) => {
      let newCart = cart
      newCart.push(item)
      setCart(newCart)
      setCartSize(cart.length)
  }

  return (
    <>
    <Routes>
      <Route path='/product/:id' element={<ProductDetails cartUpdater={updateCart} cart={cart} cartSize = {cartSize}/>} />
      <Route path="/product" element={<Shop cartSize={cartSize}/>}></Route>
      <Route path='/' element={<Home cartSize={cartSize}/>}></Route>
    </Routes>
    </>
   
  )
}
