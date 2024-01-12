import React, { useContext } from 'react'
import getShopItems from '../../utils/getShopItems'
import TopBar from '../Home/TopBar';
import DaisyFooter from '../Home/DaisyFooter';
import '../../assets/styles/Cart/Cart.css'
import CartItem from './CartItem';
import { ShopContext } from '../../App'

export default function Cart() {

    const {shopItems, error, loading} = getShopItems(16)
    const globalShop = useContext(ShopContext)

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
                <CartItem title = {cartItm.title} price={cartItm.price} img={cartItm.image} id={cartItm.id}/>
            )}
        </div>
       
        
    </section>
    <section className='cartFooter'>
        <DaisyFooter />
    </section>
    </>
  )
}
