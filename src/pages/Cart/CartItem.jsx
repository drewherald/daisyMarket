import React from 'react'
import '../../assets/styles/Cart/CartItem.css'

export default function CartItem({title, price, img, id, removeCart}) {

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
        <button className='removeCartButton' onClick={() => removeCart(id)}>Remove</button>
        <div className='cartPrice'>
            <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
        </div>
    </div>
  )
}
