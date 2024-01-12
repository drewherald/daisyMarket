import React, { useState, createContext } from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Shop from './pages/Shop/Shop'
import ProductDetails from './pages/Shop/ProductDetails'
import Cart from './pages/Cart/Cart'

export const ShopContext = createContext({
  cart: [],
  cartSize: 0,
  updateCart: () => {},
  removeCart: () => {}
});

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
    <ShopContext.Provider value={{cart, cartSize, updateCart, removeCart}}>
    <Routes>
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path="/product" element={<Shop />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/' element={<Home />} />
    </Routes>
    </ShopContext.Provider>
   
  )
}
