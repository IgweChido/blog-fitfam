import React from 'react'
import '../../styles/page2/WriteBlog.scss'
import camera from '../../images/camera.png';
import Blogcomp1 from '../page2/Blogcomp1';
import Blogcomp2 from '../page2/Blogcomp2';

function WriteBlog() {
  return (
    <div>
        {/* marginp */}
        <div className='marginp'>
            {/* main write */}
            <div className='wbmainwrite'>
                {/* header tite */}
                <p>Write your story let others be inspired</p>
                {/* write box */}
                <div className='wbwritebx'>
                    <textarea placeholder='Write your story'></textarea>

                </div>

                {/* prompt buttons */}
                <div className='wbprmtbtn'>
                    {/* button */}
                    <div className='wbherobtn2'>
                        <div>
                            <p>Upload Photo </p><img src={camera} alt=''></img>
                        </div>
                        
                            
                    </div>

                    {/* button */}
                    <div className='wbherobtn'>
                        <p>Post story</p>
                        
                    </div>
                </div>
                

            </div>


            {/* other blog comp */}
            <div className='wbotherblog'>
                <p className='wbotherblogh'>Your FitFam Stories</p>

                {/* component area */}
                <div className='wbcomparea'>
                    <Blogcomp1/>
                    <Blogcomp2/>
                    <Blogcomp2/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WriteBlog