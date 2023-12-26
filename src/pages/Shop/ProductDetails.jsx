import React from 'react'
import { useParams } from 'react-router-dom'
import getShopItems from '../../utils/getShopItems'
import GridItem from '../../components/GridItem'

export default function ProductDetails() {
  const id = useParams()
  const {shopItems, error, loading} = getShopItems(16)
  if (error) return <p>A network error was encountered</p>;
  if (loading) return (
    <></>
  );

  return (
    <div>
         {shopItems.map((item, index) => (
          item.id ==id.id ? <GridItem imgSrc={item.image} key={item.id} name={item.title} price={item.price}/> : "" 

          ))}
    </div>
  )
}
