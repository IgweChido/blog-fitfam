import React from 'react'
import usercom from '../../images/usercom.png'
import '../../styles/page2/UserwriteCom.scss'

function UserwriteCom() {
  return (
    <div className='uwcmaincom'>
         {/* col1 */}
         <div className='uwcol1'>
            <img src={usercom} alt=''></img>
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