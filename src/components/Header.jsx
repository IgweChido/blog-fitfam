import React, { useState } from 'react'
import logo from '../images/bfflogo.png'
import '../styles/Header.scss'
import phonenav from '../images/phonenav.png'

function Header() {

    const [phoneNav , setPhoneNav] = useState(false);

    const openOverlay =()=>{
        setPhoneNav(true);
    }

    const closeOverlay =()=>{
        setPhoneNav(false);
    }

  return (
    <div className='head '>
        {/* website margin *****************/}


        <div className='marginpp'>
              {/* website navigation *****************************/}
            <div className='logonavarea'>
                {/* logo area */}
                <div className='logodiv'>
                    <img src={logo} alt=''></img>
                </div>


                {/* navigation */}
                <div className='divnav '>
                    <a href='' className='navs'>About</a>
                    <a href=''className='navs'>Blog</a>
                    <a href=''className='navs'>Write a BFF</a>
                </div>

                
            </div>

            <div className='logindiv'>
                    <p>Login</p>
                    <div  className='btnhead'>
                        <p>Get Started</p>
                    </div>
                
                </div>
            </div>
          

            {phoneNav ? 
                /* phone navigation *****************************/
                /* overlay */
                <div className='overlay'>
                        {/* navigation */}
                        <div className='overlay-content'>
                            <a href='' className='navs'>About</a>
                            <a href=''className='navs'>Blog</a>
                            <a href=''className='navs'>Write a BFF</a>
                        </div>

                        {/* close btn */}
                        <div className='closeOverlay' onClick={closeOverlay}>
                            <img src='' alt=''></img>
                        </div>
                </div>
            :   /* Phone overlay button */
                <div className='phoneobtn'>
                    <div className='phonebacknav '>
                
                    </div>

                        {/* login/getstarted */}
                        <div className='marginpp'>
                            
                            <div className='phonedivnav' onClick={openOverlay}>
                                <img src={phonenav} alt=''></img>
                            </div>

                            
                        </div>
                </div>
            }
        

          


            
          
        
    </div>
  )
}

export default Header