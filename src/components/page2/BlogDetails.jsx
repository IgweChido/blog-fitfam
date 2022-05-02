import React, { useState } from 'react'
import '../../styles/page2/BlogDetails.scss'
import facebook from '../../images/facebookd.png'
import twitter from '../../images/twitterd.png'
import instagram from '../../images/instagramd.png'
import like from '../../images/likes.png'
import like1 from '../../images/likes1.png'
import comment from '../../images/comments.png'
import back from '../../images/back.png'
import Blogwords from './Blogwords'

function BlogDetails() {

    const [state, setstate] = useState(false);

    const changelikebtn =()=>{
            setstate(true);
    }

    const changelikebtn2 =()=>{
        setstate(false);
}

  return (
    <div>
        {/* marginp */}
        <div className='margindp'> 
            {/* date/name and title */}
            <div className='bddntitle'>
                <p>March 05, 2022 |</p><p> Igwe Chidera</p>

                <p className='bdtitle'>Went from zero to a hundred in a month</p>
            </div>
        </div>

            {/* blog image */}
            <div className='bdimage'>
                {/* background image */}
                <div className='bdbackimg'>

                </div>
                {/* border around image */}
                <div className='bdborder'>

                </div>
            </div>


            {/* marginp */}
            <div className='margindp2'>
                {/* body of the blog */}
                <div className='bdbody'>

                    {/* col1 */}
                    <div className='bdbcol1'>

                        <div className='bdsocialink'>
                            <div>
                                <img src={facebook} alt='facebook'></img>
                            </div>
                            <div>
                                <img src={twitter} alt='twitter'></img>
                            </div>
                            <div>
                                <img src={instagram} alt='instagram'></img>
                            </div>
                            
                        </div>

                        {/* comments & likes */}
                        <div className='bdcomlikes'>
                            {/* comments */}
                            <div className='bdcom'>
                                <img src={comment} alt=''></img>
                                <p>5</p>
                            </div>
                            {/* likes */}
                            <div className='bdlikes'>
                               {state
                                ? <img className='like1' src={like1} alt='' onClick={changelikebtn2}></img>
                               : <img className='like' src={like} alt='' onClick={changelikebtn}></img>
                                }
                               
                                
                                
                                <p>1000</p>
                            </div>
                        </div>
                    </div>

                    {/* col2 */}
                    <div  className='bdbcol2'>
                        <Blogwords/>
                    </div>

                   


                 </div>

                  {/* go back arrow */}
                  <div className='backtoblog'>
                        <img src={back} alt=''></img>
                        <p>Back to blog</p>
                    </div>
            </div>
            
            


        </div>

    
  )
}

export default BlogDetails