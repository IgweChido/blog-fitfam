import React from 'react'
import '../styles/Footer.scss'
import facebook from '../images/facebook1.svg'
import twitter from '../images/twitter1.svg'
import instagram from '../images/instagram1.svg'
import youtube from '../images/youtube1.svg'

function Footer() {
  return (
    <div className='footer'>
        {/* margin p */}
        
        <div className='marginp '>
            <div className='footmain'>
                    {/* social links */}
                <div className='socialink'>
                    <div>
                        <img src={facebook} alt='facebook'></img>
                    </div>
                    <div>
                        <img src={twitter} alt='twitter'></img>
                    </div>
                    <div>
                        <img src={instagram} alt='instagram'></img>
                    </div>
                    <div>
                        <img src={youtube} alt='youtube'></img>
                    </div>
                </div>

                <div className='copyright'>
                    <p>© 2022 Igwe Chidera, Designed by me</p>
                </div>
            </div>
                    
        </div>
        
    </div>
  )
}

export default Footer