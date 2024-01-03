import React from 'react'
import daisyLogo from '../../assets/daisyMarketLogo.png'
import '../../assets/styles/topBar.css'
import { Link } from 'react-router-dom'


export default function TopBar({cartSize}) {

  return (
    <header>
        <span className='top'>
            WELCOME TO DAISY MARKET        
        </span>
        <div className='flexBox'>
            <div className='logo'>
                <Link to={'/'}> <img src={daisyLogo} alt="" /></Link>
                <ul>
                    <li><Link to={'/product'} className='link'>Shop</Link></li>
                    <li>Collections</li>
                    <li>Locations</li>
                </ul>
            </div>
            <div className='links'>
                <a href="https://www.instagram.com/daisymrkt/"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 2476 2476" id="instagram"><path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path></svg></a>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" id="twitter"><path d="M28.77 8.11a.87.87 0 0 0-.23-.2A4.69 4.69 0 0 0 29 6.54a1 1 0 0 0-.44-1 1 1 0 0 0-1.1 0 6.42 6.42 0 0 1-2.28.92 6.21 6.21 0 0 0-7.08-1A6.07 6.07 0 0 0 15 12.2a1 1 0 0 0 2-.4 4.08 4.08 0 0 1 2-4.52 4.24 4.24 0 0 1 5.12 1 1 1 0 0 0 .88.28h.25a1 1 0 0 0 .34 1.62 1 1 0 0 0-.36.88 13.07 13.07 0 0 1-4.89 11.24 12.75 12.75 0 0 1-12.65 2.31 9.06 9.06 0 0 0 4.54-2.18 1 1 0 0 0 .15-1.09 1 1 0 0 0-.93-.57 4 4 0 0 1-3-1.39 3.63 3.63 0 0 0 1-.35A1 1 0 0 0 10 18a1 1 0 0 0-.76-.84 4.42 4.42 0 0 1-3-2.48c.24 0 .48.05.74.06a1 1 0 0 0 1-.62A1 1 0 0 0 7.67 13C6 11.48 5.59 9.85 5.83 8.7a13.88 13.88 0 0 0 7 4 1 1 0 1 0 .38-2 12.1 12.1 0 0 1-6.82-4.39 1 1 0 0 0-.75-.38 1 1 0 0 0-.78.33 5.34 5.34 0 0 0-.31 6h-.09a1 1 0 0 0-.52.81 5.84 5.84 0 0 0 1.95 4.47 1 1 0 0 0-.18 1 6.63 6.63 0 0 0 3.18 3.57A13.89 13.89 0 0 1 4 23a1 1 0 0 0-.5 1.86 16.84 16.84 0 0 0 8.5 2.49 15.16 15.16 0 0 0 9.6-3.57 15.12 15.12 0 0 0 5.69-12.42 4.62 4.62 0 0 0 1.62-2.25 1 1 0 0 0-.14-1Z" data-name="twitter bird social media trending"></path></svg>
                <Link to={'/cart'}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32.402 32" id="cart"><path d="M6 30a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zm18 0a2 2 1080 1 0 4 0 2 2 1080 1 0-4 0zM-.058 5a1 1 0 0 0 1 1H3.02l1.242 5.312L6 20c0 .072.034.134.042.204l-1.018 4.58A.997.997 0 0 0 6 26h22.688a1 1 0 0 0 0-2H7.248l.458-2.06c.1.016.19.06.294.06h18.23c1.104 0 1.77-.218 2.302-1.5l3.248-9.964C32.344 8.75 31.106 8 30 8H6c-.156 0-.292.054-.438.088l-.776-3.316A1 1 0 0 0 3.812 4H.942a1 1 0 0 0-1 1zm6.098 5h23.81l-3.192 9.798c-.038.086-.07.148-.094.19-.066.006-.17.012-.334.012H8v-.198l-.038-.194L6.04 10z"></path></svg>
                    <span className='badge badge-warning' id='lblCartCount'>{cartSize}</span>
                </Link>
               
            </div>
        </div>
    </header>
  )
}
