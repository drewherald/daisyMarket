import React from 'react'
import '../../assets/styles/Cart/CartItem.css'

export default function CartItem({title, price, img, id}) {

  return (
    <div className='mainCartItemContainer'>
        <img src={img} alt="" className='cartImg'/>
        <div>
            <h5>{title}</h5>
            <p>{price}</p>
        </div>
    </div>
  )
}
