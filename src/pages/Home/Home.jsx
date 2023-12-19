import React from 'react'
import TopBar from './TopBar'
import Featured from './Featured'
import '../../assets/styles/Home.css'

export default function Home() {
  return (
    <>
        <div className='mainContainer'>
            <TopBar className="topbar" />
            <Featured />
        </div>
    </>
  )
}
