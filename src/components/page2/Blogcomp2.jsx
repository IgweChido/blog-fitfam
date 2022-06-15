import React from 'react'
import '../../styles/page2/Blogcomp1.scss'
import '../../styles/page2/Blogcomp2.scss'
import like from '../../images/likes21.svg'
import comment from '../../images/comments21.svg'
import { useDispatch, useSelector } from 'react-redux';

function Blogcomp2() {

    const {userLikes} = useSelector((state)=>state.userLike)
    const {userComs} = useSelector((state)=>state.userComm)

    const dispatch = useDispatch()
    
  return (
    //   background image
    <div>

        {/* darkened area */}
        <div className='bc2dark'>
             {/* words */}
            <div className='bc2words'>
                <p>March 05, 2022</p>
                <p className='bc2title'>Went from zero to a hundred in a month</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius at quis nisl eu dapibus odio.
                </p>
                
                <div className='bc2pword'>
                    {/* author */}
                    <p>igwe Chidera</p>

                    {/* comments & likes */}
                    <div className='bc2comlikes'>
                        {/* comments */}
                        <div className='bc2com'>
                            <img src={comment} alt=''></img>
                            <p>{userComs}</p>
                        </div>
                        {/* likes */}
                        <div className='bc2likes'>
                            <img src={like} alt=''></img>
                            <p>{userLikes}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogcomp2