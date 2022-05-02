import React from 'react'
import '../styles/HomeSec5.scss'
import thick from '../images/thicked.png'

function HomeSec5() {
  return (
    <div>
        {/* marginp */}
        <div className='marginp'>
            <div className='Hs5whole'>
                <p className='Hs5head'>Accept the Challenge</p>

                {/* main */}
                <div className='Hs5main'>

                    {/* part 1 */}
                    <div className='Hs5part'>
                        {/* image */}
                        <div className='Hs5img'>
                            <img src={thick} alt=''></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet. Varius at quis. </p>
                    </div>

                    {/* part 1 */}
                    <div className='Hs5part'>
                        {/* image */}
                        <div className='Hs5img'>
                            <img src={thick} alt=''></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet. </p>
                    </div>

                    {/* part 1 */}
                    <div className='Hs5part'>
                        {/* image */}
                        <div className='Hs5img'>
                            <img src={thick} alt=''></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet.Varius at quis nisl eu dapibus odio. </p>
                    </div>

                </div>

                {/* button */}
                <div className='Hs5btn'>
                    <p>Join Us</p>
                            
                </div>


            </div>
            

        </div>

    </div>
  )
}

export default HomeSec5