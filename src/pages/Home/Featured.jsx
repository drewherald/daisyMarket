import React from 'react'
import FeaturedPic1 from '../../assets/jtKyleeDaisyBeta.jpg'
import FeaturedPic2 from '../../assets/kyleeDaisyBeta.jpg'
import '../../assets/styles/Featured.css'

export default function Featured() {
  return (
    <div className='flexContainer'>
      <div>
        <img src={FeaturedPic1} alt="" />
      </div>
      <div className='title'>
        <h2>
            The<br/> "We're Not Really Here" <br/>Collection
        </h2>
      </div>
      <div>
        <img src={FeaturedPic2} alt="" />
      </div>
    </div>
  )
}
