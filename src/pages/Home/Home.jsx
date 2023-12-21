import React, { useEffect } from 'react'
import TopBar from './TopBar'
import Featured from './Featured'
import '../../assets/styles/Home.css'
import daisyGif from '../../assets/daisy.gif'
import { useState } from 'react'
import GridItem from '../../components/GridItem'
import GridItemHolder from '../../components/GridItemHolder'

export default function Home() {

    const [shopItems, setShopItems] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /*const [load, setLoad] = useState(false)
    const f = false
    setTimeout(() => setLoad(f), 5000)*/

    let array = []

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=8')
            .then((response) => {
                if (response.status >= 400) {
                throw new Error("server error");
                }
                return response.json();
            })
            .then(json=> setShopItems(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));

    }, [])


        if (error) return <p>A network error was encountered</p>;
        if (loading) return <p>Loading...</p>;
        return (
            <>
                <div className='mainContainer'>
                    <div className='frontPage'>
                        <TopBar className="topbar" />
                        <Featured />
                        <div className='gridContainer'>
                        {shopItems &&  <GridItemHolder itemList={shopItems} />}
                        </div>
                    </div>
                   
                   
                </div>
    
                
                
            </>
        )
    }    
  
