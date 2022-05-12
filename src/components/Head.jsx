import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Head.scss'
import logo from '../images/bfflogo.png'
import phonenav from '../images/phonenav.png'
import cancel from '../images/cancel.png'

// This is going to be my general website Head Component and it is going to be
// Re-used by me and anyone at anytime, T for Thanks
function Head() {

    const [getNav, setGetNav] = useState(false)
    const [hideNav, setHidetNav] = useState(true)
    const [navbar, setNavbar] = useState(false)
    


    const openOverlay =()=>{
        setGetNav(true);
        setHidetNav(false)

        
    }

    const closeOverlay =()=>{
        setGetNav(false);
        setHidetNav(true)
        
    }

    const changeHeaderNav =()=>{
        // console.log(window.scrollY);
        if(window.scrollY >= 25){
            setNavbar(true);
        }
        else{
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeHeaderNav);

  return (
    // Head Container Div
    <div className={navbar ? 'headcontainer active' : 'headcontainer'}>

        {/* margin */}
        <div className='marginpp'>

            {/* head contents */}
            <div className='hcont'>

                {/* Left side */}
                <div className='hleft'>

                    {/* logo div */}
                    <Link to='/'className='logodiv'>
                        <img src={logo} alt=''></img>
                    </Link>

                    {/* nav contents (could be left or right side) */}
                    <nav className='headnav'>
                        <Link to=''>About</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/writebff'>Write a BFF</Link>
                    </nav>

                </div>

                {/* right side */}
                <div className='hright'>

                    {/* login and signup container */}
                    <div className='logindiv'>
                        <p>Login</p>

                        <div className='btnhead'>
                            <p>Get Started</p>
                        </div>
                    </div>


                    {/* Phone navigation *********************************/}
                    <div className='phonenavigation'>

                        {/* Hamburger menu set up */}
                            {setHidetNav && 
                            <div className='Hamburger' onClick={openOverlay}>
                                <img src={phonenav} alt=''></img>
                            </div>}
                            
                      

                        {/* Phone nav */}
                        { getNav && 
                        <div className='overlay'>
                            {/* background image */}

                            {/* login and signup container */}
                                <div className='logindiv2'>
                                    <p>Login</p>

                                    <div className='btnhead2'>
                                        <p>Get Started</p>
                                    </div>
                                </div>

                                 <nav className='phoneNav'>
                                    <Link to=''>About</Link>
                                    <Link to='/blog'>Blog</Link>
                                    <Link to='/writebff'>Write a BFF</Link>
                                </nav>
                           

                            {/* cancel button */}
                            <div className='cancelbtn' onClick={closeOverlay}>
                                <img src={cancel} alt=''></img>
                            </div>
                           
                        </div>}
                        
                       
                    </div>
                    
                </div>
            </div>
        </div>


        {/* Hamburger background */}
        <div className='phonebacknav'>

        </div>

    </div>
  )
}

export default Head