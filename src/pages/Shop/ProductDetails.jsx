import React from 'react'
import { useParams } from 'react-router-dom'
import getShopItems from '../../utils/getShopItems'
import GridItem from '../../components/GridItem'
import TopBar from '../Home/TopBar'
import '../../assets/styles/Shop/ProductDetails.css'
import ProductItem from './ProductItem'
import { v4 as uuidv4 } from 'uuid'
import DaisyFooter from '../Home/DaisyFooter'

export default function ProductDetails() {
  const id = useParams()
  const {shopItems, error, loading} = getShopItems(16)
  if (error) return <p>A network error was encountered</p>;
  if (loading) return (
    <></>
  );

  return (
    <div className='mainFlex'>
        <TopBar />
        <div className='mainContent' key={uuidv4()}>
           <ProductItem item={shopItems[parseInt(id.id, 10)-1]} /> 
        </div>
        <DaisyFooter />
    </div>
  )
}
