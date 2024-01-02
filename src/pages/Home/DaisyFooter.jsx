import React from 'react'
import '../../assets/styles/DaisyFooter.css'
import EmailContact from '../../components/EmailContact'


export default function DaisyFooter() {

    let date = new Date().getFullYear() 

  return (
    <footer className='foot'>
        <div className='footContainer'>
            <div>
                <h5>DAISY MARKET FASHION COLLECTIVE</h5>
                <br />
                <p className='mailList'>JOIN OUR MAILING LIST:</p>
                <EmailContact />
            </div> 
            <p className='alias'>{date} Alias Media & Design Co LLC</p>
        </div>
    </footer>
  )
}
