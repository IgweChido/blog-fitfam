import React, { useEffect, useState } from 'react'
import '../../styles/page2/Blog.scss'
import '../../styles/page2/Blogcomp1.scss'
import '../../styles/page2/Blogcomp2.scss'
import Images from '../Images'
import like from '../../images/likes11.svg'
import comment from '../../images/comments1.svg'
import Blogcomp1 from './Blogcomp1'
import Blogcomp2 from './Blogcomp2'
import BlogComp21 from './BlogComp21'
import Blogcomp11 from './Blogcomp11'


import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { isThere } from '../Reducers/backImgReducer'

import { v4 as uuidv4 } from 'uuid';

function Blog() {

   const {backImg} = useSelector((state)=>state.backimages)
    const [imagez, setImagez] = useState(null)
    const {userLikes} = useSelector((state)=>state.userLike)
    const {userComs} = useSelector((state)=>state.userComm)
    const users= useSelector((store)=>store.userP)
    const {username} = useSelector((state)=>state.usernames)

   

    const dispatch = useDispatch()

    const blogBack={
        backgroundImage:`url(${Images.Hero10})`
    }

    
    const blogBack1={
        backgroundImage:`url(${Images.blogcomp2})`
    }

    const blogBack2={
        backgroundImage:`url(${Images.Hero13})`
    }


    const detailsFunc=(pic)=>{
        dispatch(isThere({
            setImg: pic,
        }))
    
        const moveToTop=()=>{
            window.scrollTo({top: 0, behavior:'smooth'})
           
        }

        moveToTop()
    
    }  

    
 
   
   
        
   

   
  return (
     
          
    <div>
        {/* margin p */}
        <div className='marginp'>

            {/* Header blog */}
            <div className='hblog'>
                <p className='hbword'>Our Fit Fam Stories</p>
                <p className='hbp2date'>March 05, 2022</p>

                {/* image & word */}
                <Link to={`/blog/${uuidv4()}`}  className='hbimgw'onClick={()=>detailsFunc(Images.blogimg2)}>
                    {/* header img */}
                    <div className='hbimg'>
                        <img  src={Images.blogimg2} alt=''></img>
                      

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
                                        <p>{userComs}</p>
                                    </div>
                                    {/* likes */}
                                    <div className='hblikes'>
                                        <img src={like} alt=''></img>
                                        <p>{userLikes}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        

                    </div>

                </Link>

            </div>


            {/* body blogs */}
            <div className='bodyblog'>

                <div className='bodyblog1'>
                    
                {/* blog component 1 */}
               <Link to={`/blog/${uuidv4()}`} className='blogcomp1' onClick={()=>detailsFunc(Images.blogcomp1)}>
                   <Blogcomp1 image={Images.blogcomp1} /> 
               </Link>

                {/* blog component 2 */}
                <Link to={`/blog/${uuidv4()}`} className='bc2backimg' style={blogBack} onClick={()=>detailsFunc(Images.Hero10)}>
                    <Blogcomp2/>
                </Link>
                
                 {/* blog component 1*/}
                <Link to={`/blog/${uuidv4()}`} className='blogcomp1' onClick={()=>detailsFunc(Images.Hero8)}>
                     <Blogcomp1 image={Images.Hero8} /> 
                </Link>

                 {/* blog component 2 */}
                <Link to={`/blog/${uuidv4()}`}className='bc2backimg' style={blogBack1} onClick={()=>detailsFunc(Images.blogcomp2)}>
                    <Blogcomp2/>
                </Link>

                 {/* blog component 1*/}
                 <Link to={`/blog/${uuidv4()}`} className='blogcomp1' onClick={()=>detailsFunc(Images.Hero3)}>
                     <Blogcomp1 image={Images.Hero3} /> 
                </Link>

                {/* blog component 2 */}
                <Link to={`/blog/${uuidv4()}`}className='bc2backimg' style={blogBack2} onClick={()=>detailsFunc(Images.Hero13)}>
                    <Blogcomp2/>
                </Link>

                </div>



                {/* extra created blogs by user */}

                {users && 
                    
                         <div className='bodyblog2' >
                            {/* //  blog component 1 */}
                        {/* <Link to={`/blog/${user.id}`} className='wetin-deygel' onClick={()=>dispatch(isThere({
                                setImg: users.picture,
                            }))}>
                                <Blogcomp11 /> 
                            </Link> */}

                        {/* //  blog component 2 */}
                        
                        <BlogComp21/>
                        
                    </div>
                    
                   
                }
               
                
               
               
                      
                
            </div>
           
            

        </div>
    </div>
       
    
  )
}

export default Blog