import React from 'react'
import getShopItems from '../../utils/getShopItems'
import TopBar from '../Home/TopBar';
import DaisyFooter from '../Home/DaisyFooter';
import '../../assets/styles/Cart/Cart.css'
import CartItem from './CartItem';

export default function Cart({cartSize, cart, removeCart}) {

    const {shopItems, error, loading} = getShopItems(16)

    if (error) return <p>A network error was encountered</p>;
    if (loading) return (
        <div className='loadShop'>
        </div>

    );
    if(cartSize===0){
        return(
            <>

            <div className="emptyCartContent" >
                <TopBar cartSize={cartSize} />
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

    const testVar = cart[0]
    console.log(testVar)

  return (
    <>
    <section className='mainCartContent'>
        <div className="topBar" >
            <TopBar cartSize={cartSize} />
        </div>
        <div className='cartItems'>
            {cart.map((cartItm) => 
                <CartItem title = {cartItm.title} price={cartItm.price} img={cartItm.image} id={cartItm.id} removeCart={removeCart}/>
            )}
        </div>
       
        
    </section>
    <section className='cartFooter'>
        <DaisyFooter />
    </section>
    </>
  )
}
