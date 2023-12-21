import React from 'react'
import GridItem from './GridItem'
import { v4 as uuidv4 } from 'uuid';


export default function GridItemHolder({itemList}) {
  return (
    <>
        {itemList.map((id, index) => (

        <GridItem imgSrc={id.image} key={id.id} name={id.title} price={id.price} />
        
        ))}
        
        
    </>
  )
}
