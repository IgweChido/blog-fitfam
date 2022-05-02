import React from 'react'
import '../../styles/page2/Blog.scss'
import blogimg from '../../images/bloghimg.png'
import blogimg2 from '../../images/bloghimg2.png'
import like from '../../images/likes.png'
import comment from '../../images/comments.png'
import Blogcomp1 from './Blogcomp1'
import Blogcomp2 from './Blogcomp2'

function Blog() {
  return (
    <div>
        {/* margin p */}
        <div className='marginp'>

            {/* Header blog */}
            <div className='hblog'>
                <p className='hbword'>Our Fit Fam Stories</p>
                <p className='hbp2date'>March 05, 2022</p>

                {/* image & word */}
                <div className='hbimgw'>
                    {/* header img */}
                    <div className='hbimg'>
                        <img className='hb2blogimg1' src={blogimg} alt=''></img>
                        <img className='hb2blogimg2' src={blogimg2} alt=''></img>

                    </div>

                    {/* header words */}
                    <div className='hbwords'>
                        {/* header words width div */}
                        <div className='hbwwidth'>
                            <p className='hbp2date2'>March 05, 2022</p>
                            <p className='hbtitle'>Went from zero to a hundred in a month</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Varius at quis nisl eu dapibus odio.
                            </p>
                            
                            <div className='hbp2words'>
                                {/* author */}
                                <p>igwe Chidera</p>

                                {/* comments & likes */}
                                <div className='hbcomlikes'>
                                    {/* comments */}
                                    <div className='hbcomments'>
                                        <img src={comment} alt=''></img>
                                        <p>5</p>
                                    </div>
                                    {/* likes */}
                                    <div className='hblikes'>
                                        <img src={like} alt=''></img>
                                        <p>1000</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        

                    </div>

                </div>

            </div>


            {/* body blogs */}
            <div className='bodyblog'>
               
                <Blogcomp1/> 
                <Blogcomp2/>
                <Blogcomp1/> 
                <Blogcomp2/>
                      
                
            </div>
           
            

        </div>
    </div>
  )
}

export default Blog