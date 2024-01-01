import React from 'react'
import '../../assets/styles/DaisyFooter.css'
import EmailContact from '../../components/EmailContact'


export default function DaisyFooter() {
  return (
    <footer className='foot'>
        <div className='footContainer'>
            <div>
                <h5>DAISY MARKET FASHION COLLECTIVE</h5>
                <br />
                <p className='mailList'>JOIN OUR MAILING LIST:</p>
                <EmailContact />
            </div> 
            <p className='alias'>2023 Alias Media & Design Co LLC</p>
        </div>
    </footer>
  )
}
