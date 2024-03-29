import React from 'react'
import TopBar from './TopBar'
import Featured from './Featured'
import '../../assets/styles/Home.css'
import GridItemHolder from '../../components/GridItemHolder'
import getShopItems from '../../utils/getShopItems'
import DaisyGif from '../../assets/daisy.gif'
import DaisyFooter from './DaisyFooter'


export default function Home({cartSize}) {

 /*const [load, setLoad] = useState(false)
    const f = false
    setTimeout(() => setLoad(f), 5000)*/
   
    

    const {shopItems, error, loading} = getShopItems(3)

        if (error) return <p>A network error was encountered</p>;
        if (loading) return (
            <div className='loadBox'>
                <img src={DaisyGif} alt="" />
                <p>loading...</p>
            </div>

        );
        return (
            <>
                <div className='mainContainer'>
                    <div className='frontPage'>
                        <TopBar className="topbar" />
                        <Featured />
                        {shopItems &&  <GridItemHolder itemList={shopItems}/>}
                        <section className='footerHome'>
                            <DaisyFooter />
                        </section>
                        
                    </div>
                   
                   
                </div>
               
                
                
            </>
        )
    }    
  
