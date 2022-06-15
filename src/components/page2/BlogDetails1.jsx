import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/page2/BlogDetails.scss'
import facebook from '../../images/facebookd1.svg'
import twitter from '../../images/twitterd1.svg'
import instagram from '../../images/instagramd1.svg'
import like from '../../images/likes11.svg'
import like1 from '../../images/likes12.svg'
import comment from '../../images/comments1.svg'
import commentb from '../../images/commentsb1.svg'
import back from '../../images/back1.svg'
import Blogwords from './Blogwords'
import CommentSec from './CommentSec'
import cancelcom from '../../images/cancelcom1.svg'
import { useDispatch, useSelector } from 'react-redux';
import { isMinus, isPlus } from '../Reducers/NumberLikes'
import trash from '../../images/trash.svg'
import { deleteUser } from '../Reducers/UserPostReducer'

import { useParams } from 'react-router-dom';

function BlogDetails1() {
    const {id} = useParams()
    const {index} = useParams()
    const [state, setstate] = useState(false);
    const [cancelState, cancelSetstate] = useState(false);
    const [commentOver, SetCommentOver] = useState(false)
    const {backImg} = useSelector((state)=>state.backimages)
    const {userLikes} = useSelector((state)=>state.userLike)
    const {userComs} = useSelector((state)=>state.userComm)
    const users= useSelector((store)=>store.userP)
    const {username} = useSelector((state)=>state.usernames)
    const [Euser, setEuser] = useState([])

    const dispatch = useDispatch()

    const removeCom =()=>{
        cancelSetstate(false)
        SetCommentOver(false)

      
    }

   

    const showCom =()=>{
        cancelSetstate(true)
        SetCommentOver(true)
        
    }

    const changelikebtn =()=>{
            setstate(true);
            dispatch(isPlus())
         
    }

    const changelikebtn2 =()=>{
        setstate(false);
        dispatch(isMinus())
        
}

const moveToTop=()=>{
    window.scrollTo({top: 0, behavior:'smooth'})
   
}



// background image
const backgrounImg={
    backgroundImage:`url(${backImg})`
}


//Handle Delete

const handleDelete=()=>{

    dispatch(deleteUser({id: users[index].id}))

    console.log(users)

    moveToTop()
}






 
  return (
    
    <div className='bdtable'>

        
           
             {/* col 1 */}
         <div className='bdcol1' key={id}>
         {/* marginp */}
         <div className='margindp'> 
             {/* date/name and title */}
             <div className='bddntitle'>
                 <p>{users[index].date} |</p><p>{username}</p>
 
                 <p className='bdtitle'>{users[index].title}</p>
             </div>
         </div>
 
             {/* blog image */}
             <div className='bdimage'>
                 {/* background image */}
                 <div className='bdbackimg' style={backgrounImg}>
 
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
                                 <p>{userComs}</p>
                             </div>
                             {/* likes */}
                             <div className='bdlikes'>
                                {state
                                 ? <img className='like1' src={like1} alt='' onClick={changelikebtn2}></img>
                                : <img className='like' src={like} alt='' onClick={changelikebtn}></img>
                                 }
                                
                                 
                                 
                                 <p>{userLikes}</p>
                             </div>
                         </div>
                     </div>
 
                     {/* col2 */}
                     <div  className='bdbcol2'>
                         {users[index].story}
                     </div>
 
                    
 
 
                  </div>

                 {/* Delete Blog button */}
                 <div className='delete-blog'>
                      <Link to='/blog' className='delete-blog-img' onClick={handleDelete}>
                          <img src={trash} alt=''></img>
                      </Link>
                  </div>
 
                   {/* go back arrow */}
                   <Link to='/blog'className='backtoblog' onClick={moveToTop}>
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


           {commentOver &&
                //  col2 phone overlay
                 <div className='bdcol2-1'>
                      <div className='bdcol22-1'>
                          <div className='bdcolmain-1'>
                              {/* cancel icon */}
                          <div className='ciconimg-1' onClick={removeCom}>
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

export default BlogDetails1