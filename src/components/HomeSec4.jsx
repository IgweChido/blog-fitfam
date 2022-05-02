import React from 'react'
import '../styles/HomeSec4.scss'
import feather from '../images/feather.png'
import tag from '../images/Tag.png'
import promote from '../images/promote.png'

function HomeSec4() {
  return (
    <div>
        {/* background */}
        <div className='brownback'>
            {/* marginp */}
            <div className='marginp'>

                <p className='Hs4head'>How to participate</p>

                {/* main */}
                <div className='Hs4main'>

                    {/* part1 */}
                    <div className='Hs4part'>
                        <div className='Hs4img'>
                            <img src={feather} alt=''></img>
                        </div>
                        
                        <p className='Hs4p'>Write a BFF</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius at quis nisl eu dapibus odio. 
                        </p>
                    </div>

                     {/* part2 */}
                     <div className='Hs4part'>
                        <div className='Hs4img'>
                            <img src={tag} alt=''></img>
                        </div>
                        
                        <p className='Hs4p'>Add a tag</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius at quis nisl eu dapibus odio. 
                        </p>
                    </div>

                     {/* part3 */}
                     <div className='Hs4part'>
                        <div className='Hs4img'>
                            <img src={promote} alt=''></img>
                        </div>
                        
                        <p className='Hs4p'>Promote your Blog</p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius at quis nisl eu dapibus odio. 
                        </p>
                    </div>


                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSec4