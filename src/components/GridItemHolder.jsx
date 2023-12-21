import React from 'react'
import GridItem from './GridItem'
import { v4 as uuidv4 } from 'uuid';
import '../assets/styles/GridItemHolder.css'


export default function GridItemHolder({itemList}) {
  return (
    <div className='gridContainer'>

        {itemList.map((id, index) => (

        <GridItem imgSrc={id.image} key={id.id} name={id.title} price={id.price}/>
        
        ))}
      
    </div>
  )
}
