import React, {  useEffect,useRef, useState } from 'react'
import '../styles/HeroPage.scss'
import Hero1 from '../images/Heroimage1.png'
import Hero2 from '../images/Heroimage2.png'
import Hero3 from '../images/Heroimage3.png'
import Hero4 from '../images/Heroimage4.png'
import Hero5 from '../images/Heroimage5.png'
import pbox from '../images/picturebox.png'
import heart from '../images/Heart.png'
import HomeSec2 from './HomeSec2'
import HomeSec3 from './HomeSec3'
import HomeSec4 from './HomeSec4'
import HomeSec5 from './HomeSec5'

function HeroPage() {
    const [state, setState] = useState(Hero1);
    const arr = [Hero1, Hero2, Hero3, Hero4, Hero5 ]
    

    useEffect(()=>{
         setInterval(() => {
        setState(arr[0]);
        setState(arr[1]);
        
    }, 3000);
    },[state]);
   

    

        
    

    

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
                    <div className='herobtn'>
                        <p>Join Us</p>
                        
                    </div>
                    
                </div>

                {/* right side ***************/}
                <div className='rightside'>
                    
                    <img  src={state} alt='' className='heroimg'></img>

                    {/* small box */}
                    <div className='smallbox'>
                        <div className='sbimg'>
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