import React from 'react'
import TopBar from './TopBar'
import Featured from './Featured'
import '../../assets/styles/Home.css'
import daisyGif from '../../assets/daisy.gif'
import { useState } from 'react'

export default function Home() {

    const [load, setLoad] = useState(true)
    const f = false
    setTimeout(() => setLoad(f), 5000)
 
        return (
            <>
                <div className='mainContainer'>
                    <TopBar className="topbar" />
                    <Featured />
                </div>
                <div id='loading' className={`${load ? "" : "none"}`}>
                    <img src={daisyGif} alt="" />
                </div>
                
            </>
        )
    }    
  
