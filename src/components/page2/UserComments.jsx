import React from 'react'
import '../../styles/page2/UserComments.scss'
import usercom from '../../images/usercom.png'

function UserComments() {
  return (
    <div className='usermaincom'>
        {/* col1 */}
        <div className='uccol1'>
            <img src={usercom} alt=''></img>
        </div>

        {/* col2 */}
        <div className='uccol2'>
            {/* name */}
            <p className='ucname'> Magic Johnson</p>
            {/* comment */}
            <p className='ucncom'>In posuere semper morbi egestas leo.</p>
            {/* time ago */}
            <p className='ucdate'>5 days ago</p>
        </div>

    </div>
  )
}

export default UserComments