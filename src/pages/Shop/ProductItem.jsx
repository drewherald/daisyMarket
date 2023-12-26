import React from 'react'
import '../../assets/styles/Shop/ProductItem.css'

function capFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function formatString(string) {
    let split = string.split(" ")   
    split = split.map((string) => capFirst(string))
    return split.join(' ')
}

export default function ProductItem(item) {

    const imgSrc = item.item.image

  return (
    <div className='productItemContainer'>
        <div className='productImgContainer'>
            <img src={imgSrc} className='productItemImg' alt="" />
        </div>
        <div className='productDetailContainer'>
            <div>
                <p className='productCategory'>{formatString(item.item.category)}</p>
                <h2 className='productTitle'>{`${item.item.title}`}</h2>
                <p>${(Math.round(item.item.price * 100) / 100).toFixed(2)}</p>
                <p className='description'>Description: <br /> {item.item.description}</p>
            </div>
        </div>
           
    </div>
  )
}
