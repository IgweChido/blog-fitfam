import React from 'react'
import '../../styles/page2/Blogcomp1.scss'
import like from '../../images/likes.png'
import comment from '../../images/comments.png'
import blogcomp from '../../images/blogcomp1.png'

function Blogcomp1() {
  return (
    <div className='blogcomp1'>
        {/* image div */}
        <div className='bc1img'>
            <img src={blogcomp} alt=''></img>
        </div>
        {/* words */}
        <div className='bc1words'>
            <p>March 05, 2022</p>
            <p className='bc1title'>Went from zero to a hundred in a month</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius at quis nisl eu dapibus odio.
            </p>
            
            <div className='bc1pword'>
                {/* author */}
                <p>igwe Chidera</p>

                {/* comments & likes */}
                <div className='bc1comlikes'>
                    {/* comments */}
                    <div className='bc1com'>
                        <img src={comment} alt=''></img>
                        <p>5</p>
                    </div>
                    {/* likes */}
                    <div className='bc1likes'>
                        <img src={like} alt=''></img>
                        <p>1000</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Blogcomp1