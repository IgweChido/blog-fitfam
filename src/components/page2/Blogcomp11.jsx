import React from 'react'
import '../../styles/page2/Blogcomp1.scss'
import like from '../../images/likes11.svg'
import comment from '../../images/comments1.svg'
import { useDispatch, useSelector } from 'react-redux';


function Blogcomp11() {

    const {userLikes} = useSelector((state)=>state.userLike)
    const {userComs} = useSelector((state)=>state.userComm)
    const {username} = useSelector((state)=>state.usernames)
    const users= useSelector(store=>store.userP)

    const dispatch = useDispatch()

    

  return (
      <div className='checkdiv2'>
            
                {users.map((user)=>(
              console.log(user.picture),
               <div className='blogcomp1' key={user.id}>
               {/* image div */}
               <div className='bc1img'>
                   <img src={user.picture} alt=''></img>
               </div>
               {/* words */}
               <div className='bc1words'>
                   <p>{user.date}</p>
                   <p className='bc1title'>{user.title}</p>
                   <p>{user.story.substring(0,32)}...</p>
                   
                   <div className='bc1pword'>
                       {/* author */}
                       <p>{username}</p>
       
                       {/* comments & likes */}
                       <div className='bc1comlikes'>
                           {/* comments */}
                           <div className='bc1com'>
                               <img src={comment} alt=''></img>
                               <p>{userComs}</p>
                           </div>
                           {/* likes */}
                           <div className='bc1likes'>
                               <img src={like} alt=''></img>
                               <p>{userLikes}</p>
                           </div>
                       </div>
       
                   </div>
               </div>
           </div>
          ))}
            
          

      </div>
   
  )
}

export default Blogcomp11