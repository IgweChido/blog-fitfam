import React, { useEffect, useState } from 'react'
import usercom from '../../images/usercom.png'
import '../../styles/page2/UserwriteCom.scss'

import { useDispatch, useSelector } from 'react-redux';

function UserwriteCom() {

  const {username} = useSelector((state)=>state.usernames)
  const [hex, setHex] = useState('#ffffff')

    const sliceUser = username.substr(0,1).toUpperCase();


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
  return (
    <div className='uwcmaincom'>
         {/* col1 */}
         <div className='uwcol1' style={color}>
         <p>{sliceUser}</p>
        </div>

        {/* col2 */}
        <form>
            <input placeholder='write a comment' type='text'>
            
            </input>

        </form>
    </div>
  )
}

export default UserwriteCom