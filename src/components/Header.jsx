import React from 'react'
import logo from '../images/bfflogo.png'
import '../styles/Header.scss'
import phonenav from '../images/phonenav.png'

function Header() {
  return (
    <div className='head'>
        {/* website margin *****************/}
        <div className='marginpp'>
            <div className='logonavarea'>
                {/* logo area */}
                <div className='logodiv'>
                    <img src={logo} alt=''></img>
                </div>


                {/* navigation */}
                <div className='divnav'>
                    <a href='' className='navs'>About</a>
                    <a href=''className='navs'>Blog</a>
                    <a href=''className='navs'>Write a BFF</a>
                </div>

                
            </div>
            </div>
            {/* phone navigation */}
                <div className='phonebacknav'>
                   
                </div>


            {/* login/getstarted */}
            <div className='marginpp'>
                
                <div className='phonedivnav'>
                    <img src={phonenav} alt=''></img>
                </div>

                <div className='logindiv'>
                    <p>Login</p>
                    <div  className='btnhead'>
                        <p>Get Started</p>
                    </div>
                
                </div>
        </div>
        
    </div>
  )
}

export default Header