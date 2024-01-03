import React, { useEffect, useState } from 'react'
import '../../assets/styles/Shop/ProductItem.css'
import { v4 as uuidv4 } from 'uuid';

function capFirst(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function formatString(string) {
    let split = string.split(" ")   
    split = split.map((string) => capFirst(string))
    return split.join(' ')
}

export default function ProductItem({item, cartUpdater}) {

    const imgSrc = item.image

    const addToCart = () => {

        let object = {
            title: item.title,
            price: item.price,
            image: imgSrc,
            id: uuidv4()
        }

        cartUpdater(object)
    }


  return (
    <div className='productItemContainer'>
        <div className='productImgContainer'>
            <img src={imgSrc} className='productItemImg' alt="" />
        </div>
        <div className='productDetailContainer'>
            <div>
                <p className='productCategory'>{formatString(item.category)}</p>
                <h2 className='productTitle'>{`${item.title}`}</h2>
                <p>${(Math.round(item.price * 100) / 100).toFixed(2)}</p>
                <p className='description'>Description: <br /> {item.description}</p>
                <button className='addCart' onClick={() => addToCart()}>Add To Cart</button>
            </div>
        </div>
           
    </div>
  )
}
