import React, { useContext, useMemo } from 'react'
import getShopItems from '../../utils/getShopItems'
import TopBar from '../Home/TopBar';
import DaisyFooter from '../Home/DaisyFooter';
import '../../assets/styles/Cart/Cart.css'
import CartItem from './CartItem';
import { ShopContext } from '../../App'
import { v4 as uuidv4 } from 'uuid';

export default function Cart() {

    const {shopItems, error, loading} = getShopItems(16)
    const globalShop = useContext(ShopContext)

    const total = useMemo(
       () => {
        let tempTotal = 0
        globalShop.cart.forEach((cartItem) => tempTotal += cartItem.price)
        return tempTotal
    }
    )
   
    console.log(total)

    if (error) return <p>A network error was encountered</p>;
    if (loading) return (
        <div className='loadShop'>
        </div>

    );
    if(globalShop.cartSize===0){
        return(
            <>

            <div className="emptyCartContent" >
                <TopBar />
                <p className='emptyCartText'>Your Cart is Empty</p> 
                <br />
                <p>Click Shop to Continue Browsing</p>
            </div>
            
            <section>
                <DaisyFooter />
            </section>
            </>
        )
    }

  return (
    <>
    <section className='mainCartContent'>
        <div className="topBar" >
            <TopBar />
        </div>
        <div className='cartItems'>
            {globalShop.cart.map((cartItm) => 
                <CartItem title = {cartItm.title} price={cartItm.price} img={cartItm.image} id={cartItm.id} key={uuidv4()}/>
            )}
            <div>
                <p className='subTotal'>Subtotal: ${(Math.round(total * 100) / 100).toFixed(2)}</p>
            </div>
        </div>
       
        
    </section>
    <section className='cartFooter'>
        <DaisyFooter />
    </section>
    </>
  )
}
