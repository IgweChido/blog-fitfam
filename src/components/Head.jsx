import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Head.scss'
import logo from '../images/bfflogo.png'
import phonenav from '../images/phonenav1.svg'
import cancel from '../images/cancel1.svg'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux';
import { isShowing } from './Reducers/ShowLogin'

// This is going to be my general website Head Component and it is going to be
// Re-used by me and anyone at anytime, T for Thanks
function Head() {

    const [getNav, setGetNav] = useState(false)
    const [hex, setHex] = useState('#ffffff')
    const [hideNav, setHidetNav] = useState(true)
    const [navbar, setNavbar] = useState(false)

    const {userLogged} = useSelector((state)=>state.userloggedin)
    const {showLog} = useSelector((state)=>state.showLogin)
    const {username} = useSelector((state)=>state.usernames)

    const sliceUser = username.substr(0,1).toUpperCase();

    const dispatch = useDispatch()
    


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

    const moveToAbout=()=>{
        window.scrollTo({top: 1027, behavior:'smooth'})
    }
    const moveToAbout2=()=>{
        window.scrollTo({top: 1270, behavior:'smooth'})
        setGetNav(false);
        setHidetNav(true)
    }

    const moveToTop=()=>{
        window.scrollTo({top: 0, behavior:'smooth'})
        setGetNav(false);
        setHidetNav(true)
    }

    // open login overlay
    const openLogin =()=>{
        dispatch(isShowing())
        setGetNav(false);
        setHidetNav(true)
    } 
    
    const color={
        backgroundColor: `${hex}`,
    }


    // function to generate random colors
    const randomizedHex=()=>{
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setHex(randomColor);
    }

    useEffect(()=>{
        randomizedHex()
    },[])

    window.addEventListener('scroll', changeHeaderNav);
    // console.log(userLogged)
    // console.log(showLog)

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
                    <Link to='/' onClick={moveToTop} className='logodiv'>
                        <img src={logo} alt=''></img>
                    </Link>

                    {/* nav contents (could be left or right side) */}
                    <nav className='headnav'>
                        <Link to='/' onClick={moveToAbout}>About</Link>
                        <Link to='/blog'onClick={moveToTop}>Blog</Link>
                        <Link to='/writebff' onClick={moveToTop}>Write a BFF</Link>
                    </nav>

                </div>

                {/* right side */}
                <div className='hright'>
                    {userLogged ?
                     // {/* User Image and profile  */}
                    <div className='user-current'>
                        {/* image */}
                        <div className='user-circle' style={color}>
                            <p>{sliceUser}</p>
                        </div>
                        

                        {/* user name */}
                        <div className='user-name'>
                            <p>{username}</p>
                        </div>
                        
                    </div>
                    :// {/* login and signup container */}
                    <div className='logindiv'>
                    <p onClick={openLogin}>Login</p>

                    <div className='btnhead' onClick={openLogin}>
                        <p>Get Started</p>
                    </div>
                </div> 
                   }
                    

                    


                    {/* Phone navigation *********************************/}
                    <div className='phonenavigation'>

                        {/* Hamburger menu set up */}
                            {setHidetNav && 
                            <div className='Hamburger' onClick={openOverlay}>
                                <img src={phonenav} alt=''></img>
                            </div>}
                            
                      

                        {/* Phone nav *****/}
                        {/* background image */}
                        <div className={getNav ?'overlay full' : 'overlay'}>
                            
                        {userLogged ?
                         // {/* User Image and profile  */}
                         <div className='user-current2'>
                            {/* image */}
                            <div className='user-circle2' style={color}>
                                <p>{sliceUser}</p>
                            </div>

                            {/* user name */}
                            <div className='user-name2'>
                                <p>{username}</p>
                            </div>
                        
                    </div>
                     :// {/* login and signup container */}
                    <div className='logindiv2'>
                    <p onClick={openLogin}>Login</p>

                    <div className='btnhead2' onClick={openLogin}>
                        <p>Get Started</p>
                    </div>
                </div>
                   
                   }
                    

                                 <nav className='phoneNav'>
                                    <Link to='/'onClick={moveToAbout2}>About</Link>
                                    <Link to='/blog' onClick={moveToTop}>Blog</Link>
                                    <Link to='/writebff' onClick={moveToTop}>Write a BFF</Link>
                                </nav>
                           

                            {/* cancel button */}
                            <div className='cancelbtn' onClick={closeOverlay}>
                                <img src={cancel} alt=''></img>
                            </div>
                           
                        </div>
                        
                       
                    </div>
                    
                </div>
            </div>
        </div>


        {/* Hamburger background */}
        <div className='phonebacknav'>

        </div>

        {/* login overlay */}
        {showLog ? 
        <div>
            <Login/>
        </div>: <div></div>}

    </div>
  )
}

export default Head