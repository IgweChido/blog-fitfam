import React from 'react'
import '../styles/HomeSec5.scss'
import thick from '../images/thicked1.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isShowing } from './Reducers/ShowLogin'

function HomeSec5() {

    const {showLog} = useSelector((state)=>state.showLogin)
    const dispatch = useDispatch()
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
                <div className='Hs5btn'onClick={()=>{
                        dispatch(isShowing())
                    }}>
                    <p>Join Us</p>
                            
                </div>


            </div>
            

        </div>

    </div>
  )
}

export default HomeSec5