import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/page2/BlogDetails.scss'
import facebook from '../../images/facebookd.png'
import twitter from '../../images/twitterd.png'
import instagram from '../../images/instagramd.png'
import like from '../../images/likes.png'
import like1 from '../../images/likes1.png'
import comment from '../../images/comments.png'
import commentb from '../../images/commentsb.png'
import back from '../../images/back.png'
import Blogwords from './Blogwords'
import CommentSec from './CommentSec'
import cancelcom from '../../images/cancelcom.png'

function BlogDetails() {

    const [state, setstate] = useState(false);
    const [cancelState, cancelSetstate] = useState(false);

    const removeCom =()=>{
        cancelSetstate(false)

      
    }

    const showCom =()=>{
        cancelSetstate(true)
        
    }

    const changelikebtn =()=>{
            setstate(true);
    }

    const changelikebtn2 =()=>{
        setstate(false);
}

  return (
    <div className='bdtable'>

        {/* col 1 */}
         <div className='bdcol1'>
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
                            <div className='bdcom' onClick={showCom} >
                                { cancelState ? <img src={commentb} alt=''></img> 
                                : <img src={comment} alt=''></img>}
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
                  <Link to='/blog'className='backtoblog'>
                        <img src={back} alt=''></img>
                        <p>Back to blog</p>
                    </Link>
            </div>
            
            


        </div>


        {/* col2 */}
        {cancelState && 
           <div className='bdcol2'>
                <div className='bdcol22'>
                    <div className='bdcolmain'>
                        {/* cancel icon */}
                    <div className='ciconimg' onClick={removeCom}>
                        <img src={cancelcom}></img>

                    </div>

                <CommentSec/> 
                    </div>
                                    
            </div>

           </div>
           }
        
    </div>
   

    
  )
}

export default BlogDetails