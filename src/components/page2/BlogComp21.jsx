import React from 'react'
// import '../../styles/page2/Blogcomp1.scss'
import '../../styles/page2/Blogcomp2.scss'

import Images from '../Images';
import like from '../../images/likes21.svg'
import comment from '../../images/comments21.svg'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { isThere } from '../Reducers/backImgReducer'

function Blogcomp21() {

    const {userLikes} = useSelector((state)=>state.userLike)
    const {userComs} = useSelector((state)=>state.userComm)
    const users= useSelector((store)=>store.userP)
    const {username} = useSelector((state)=>state.usernames)

    const dispatch = useDispatch()

    var background =null;


    const detailsFunc=(user)=>{
        dispatch(isThere({
            setImg: user.picture,
        }))
    
        const moveToTop=()=>{
            window.scrollTo({top: 0, behavior:'smooth'})
           
        }

        moveToTop()
    
    }  


  
   
   
  return (
    //   background image
    <div className='check-div'> 
        
        
                 {users.map((user, index)=>(
                     background= {
                        backgroundImage:`url(${user.picture})`
                    },
                    
        <Link to={`/blog/${username}/${user.id}/${index}`}
         onClick={()=> detailsFunc(user) } className='bc2backimg' 
         style={background} key={user.id}>

        {/* darkened area */}
        <div className='bc2dark'>
             {/* words */}
            <div className='bc2words'>
                <p>{user.date}</p>
                <p className='bc2title'>{user.title.substring(0,32)}...</p>
                <p>{user.story.substring(0,42)}...
                </p>
                
                <div className='bc2pword'>
                    {/* author */}
                    <p>{username}</p>

                    {/* comments & likes */}
                    <div className='bc2comlikes'>
                        {/* comments */}
                        <div className='bc2com'>
                            <img src={comment} alt=''></img>
                            <p>{userComs}</p>
                        </div>
                        {/* likes */}
                        <div className='bc2likes'>
                            <img src={like} alt=''></img>
                            <p>{userLikes}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Link>
                 ))}

          

             </div>
     
            
           
       
    
  )
}

export default Blogcomp21