import React, { useState } from 'react'
import '../styles/Login.scss'
import logo from '../images/bfflogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { isLogged } from './Reducers/LoginReducer';
import { isNotShowing } from './Reducers/ShowLogin';
import { isNamed } from './Reducers/UserName';
import cancel from '../images/cancel1.svg'

function Login() {
    const {userLogged} = useSelector((state)=>state.userloggedin)
    const {showLog} = useSelector((state)=>state.showLogin)
    const {username} = useSelector((state)=>state.usernames)
    const [plshow, setPlshow]= useState(false)

    const [name, setName] = useState('')
    const dispatch = useDispatch()

   

  


    // setting the username
    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(isLogged())
        dispatch(isNotShowing())

        dispatch(isNamed({
            username: name,
        }))

       
    }
   
    //  console.log(name)
        

   
  return (
    //   overlay of black background
    <div className='login-overlay'> 

        <div className='login-white'>

            {/* cancel button */}
            <div className='login-cancel' onClick={()=> dispatch(isNotShowing())}>
                <img src={cancel} alt=''></img>
            </div>

            {/* bff logo */}
            <div className='login-logo'>
                <img src={logo} alt=''></img>
            </div>
            <p className='login-header'>Join the Blog Fit Fam Challenge</p>
            <form className='login-main' onSubmit={(e)=> handleSubmit(e)}>
                {/* fullname */}
                <div className='login-input'>
                    <input type='text' placeholder='Full name' onChange={(e)=> setName(e.target.value)}></input>
                </div>

                {/* Email */}
                <div className='login-input'>
                    <input type='email' placeholder='Email'></input>
                </div>
                { name !== ''
                ?
                <button className='login-button'>
                    Join Us
                </button>

                 :
                 <button className='login-button' disabled>
                    Join Us
                </button>
                 }
               


            </form>
        </div>

    </div>
  )
}

export default Login