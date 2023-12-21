import React from 'react'
import '../../assets/styles/Shop/Shop.css'
import GridItemHolder from '../../components/GridItemHolder'
import getShopItems from '../../utils/getShopItems'
import TopBar from '../Home/TopBar'

export default function Shop() {

    const {shopItems, error, loading} = getShopItems(16)

    
  return (
    <div>
        <TopBar className="topbar" />

        {shopItems &&  <GridItemHolder itemList={shopItems} />}
    </div>
  )
}
