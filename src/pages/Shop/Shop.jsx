import React from 'react'
import '../../assets/styles/Shop/Shop.css'
import GridItemHolder from '../../components/GridItemHolder'
import getShopItems from '../../utils/getShopItems'
import TopBar from '../Home/TopBar'
import DaisyFooter from '../Home/DaisyFooter'

export default function Shop() {

    const {shopItems, error, loading} = getShopItems(16)

    
  return (
    <div>
      <div className="topBar" >
        <TopBar />
      </div>
        

        <div className='gridContainer' >
          {shopItems &&  <GridItemHolder itemList={shopItems} />}
        </div>
        <div className='footerShop'>
          <DaisyFooter />
        </div>
    </div>
  )
}
