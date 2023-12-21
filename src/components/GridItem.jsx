import React from 'react'
import '../assets/styles/GridItem.css'

export default function GridItem({imgSrc, name, price}) {
  return (
    <div className='bigContainer'>
        <div className='imgContainer'>
            <img src={imgSrc} className='productImg' alt="" />
        </div>
        <div>
            <p className='titleText'>{name}</p>
            <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
        </div>
      </div>
  )
}
