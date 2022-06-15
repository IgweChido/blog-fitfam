import React, {  useEffect, useState } from 'react'
import '../styles/HeroPage.scss'
import Images from './Images'
import pbox from '../images/picturebox.png'
import heart from '../images/Heart1.svg'
import HomeSec2 from './HomeSec2'
import HomeSec3 from './HomeSec3'
import HomeSec4 from './HomeSec4'
import HomeSec5 from './HomeSec5'
import { useDispatch, useSelector } from 'react-redux';
import { isShowing } from './Reducers/ShowLogin'

function HeroPage() {
    const {showLog} = useSelector((state)=>state.showLogin)
    const dispatch = useDispatch()

    const [state, setState] = useState(0);
    const [changeFrame , setChangeFrame] = useState(0)
    const arr = [Images.Hero1,Images.Hero2,Images.Hero3,
        Images.Hero4,Images.Hero5,Images.Hero6,Images.Hero7,
        Images.Hero8,Images.Hero9,Images.Hero10,Images.Hero11,
        Images.Hero12,Images.Hero13,Images.Hero14,Images.Hero15, ]

    const fades = ['fade', 'fade1' ]
    

    useEffect(()=>{
        
        const slideInterval = setInterval(()=>{
          
            setState(state => state < arr.length - 1 ? state + 1 : 0)
            setChangeFrame(changeFrame => changeFrame < fades.length -1 ? changeFrame + 1 : 0)
        },4000)
      
      
        return()=> clearInterval(slideInterval);
        
    },[]);
   

    

        
    

    

  return (
    <div>
        {/* margin p */}
        <div className='marginp'>
            <div className='flexhero'>

                {/* left side *******************/}
                <div className='leftside'>
                    <p className='headerp'>Join the Blog Fit Fam Challenge</p>
                    <p className='smallp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius at quis nisl eu dapibus odio. </p>
                    
                    {/* button */}
                    <div className='herobtn' onClick={()=>{
                        dispatch(isShowing())
                    }}>
                        <p>Join Us</p>
                        
                    </div>
                    
                </div>

                {/* right side ***************/}
                <div className='rightside'>
                    
                    <img  src={arr[state]} alt='' className={`heroimg ${fades[changeFrame]}`}></img>

                    {/* small box */}
                    <div className='smallbox'>
                        <div className='sbimg '>
                            <img src={heart} alt='heart'></img>
                        </div>
                        
                        <div className='sbwords'>
                            <p className='sbbig'>+1000</p>
                            <p>loved your FitFam story</p>
                        </div>
                        
                    </div>

                    {/* picture box */}
                    <img  src={pbox} alt='picturebox 'className='picturebox'>

                    </img>
                    
                </div>

            </div>
            
           

        </div>

        {/* grey area */}
        <div className='greyarea'>

        </div>

        {/* section 2 */}
       <HomeSec2/>

       {/* section 3 */}
       <HomeSec3/>

       {/* section 4 */}
       <HomeSec4/>

         {/* section 5 */}
       <HomeSec5/>

    </div>
  )
}

export default HeroPage