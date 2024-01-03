import React, { useState } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/Shop/ProductDetails'
import Cart from './pages/Cart/Cart'

export default function App() {

  const [cart, setCart] = useState([])
  const [cartSize, setCartSize] = useState(cart.length)

  const updateCart = (item) => {
      let newCart = cart
      newCart.push(item)
      setCart(newCart)
      setCartSize(cart.length)
  }

  const removeCart = (id) => {
    let newCart = cart
    newCart = newCart.filter(e => e.id != id)
    setCart(newCart)
    setCartSize(cart.length-1)
  }

  return (
    <>
    <Routes>
      <Route path='/product/:id' element={<ProductDetails cartUpdater={updateCart} cart={cart} cartSize = {cartSize}/>} />
      <Route path="/product" element={<Shop cartSize={cartSize}/>} />
      <Route path='/cart' element = {<Cart cartSize={cartSize} cart={cart} removeCart={removeCart}  />} />
      <Route path='/' element={<Home cartSize={cartSize}/>} />
    </Routes>
    </>
   
  )
}
