import React, { useContext } from 'react'
import '../../assets/styles/Cart/CartItem.css'
import { ShopContext } from '../../App'

export default function CartItem({title, price, img, id}) {

    const globalShop = useContext(ShopContext)

  return (
    <div className='mainCartItemContainer'>
        <div className='cartImgContainer'>
            <div className='cartImg'>
                <img src={img} alt="" className='cartImg'/>
            </div>
            <div className='cartItemText'>
                <h5>{title}</h5>
            </div>   
        </div>
        <div className='cartInfoContainer'>
            <button className='removeCartButton' onClick={() => globalShop.removeCart(id)}>Remove</button>
            <div className='cartPrice'>
                <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
            </div>
        </div>
        
    </div>
  )
}
