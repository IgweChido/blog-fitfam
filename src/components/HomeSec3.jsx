import React from 'react'
import '../styles/HomeSec3.scss'
import img1 from '../images/Sec3img1.png'
import img2 from '../images/Sec3img2.png'
import img3 from '../images/Sec3img3.png'
import img4 from '../images/Sec3img4.png'

function HomeSec3() {
  return (
    <div >
        {/* marginp */}
        <div className='marginp'>
            {/* main */}
            <div className='Hs3main'>
                {/* image div */}
                <div className='Hs3imgdiv'>
                    
                    {/* first half */}
                    <div className='Hs3firstimg'>

                        <div className='Hs3img1'>
                            <img src={img1} alt=''></img>
                        </div>
                        <div className='Hs3img2'>
                            <img src={img2} alt=''></img>
                        </div>

                    </div>
                      
                   
                    
                        <div className='Hs3secondimg'>
                            <div className='Hs3img3'>
                                <img src={img3} alt=''></img>
                            </div>
                            <div className='Hs3img4'>
                                <img src={img4} alt=''></img>
                            </div>
                        </div>
                       
                    
                    

                </div>

                {/* word div */}
                <div className='Hs3wordiv'>
                    <div className='Hs3wwdiv'>
                        <p className='Hs3bigp'>What is BlogFitFam?</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Varius at quis nisl eu dapibus odio. 
                         </p>
                    </div>
                   
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default HomeSec3