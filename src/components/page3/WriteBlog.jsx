import React, { useEffect, useState } from 'react'
import '../../styles/page2/WriteBlog.scss'
import '../../styles/page2/Blogcomp1.scss'
import '../../styles/page2/Blogcomp2.scss'
import { Link } from 'react-router-dom'
import camera from '../../images/camera1.svg';
import Images from '../Images';
import Blogcomp11 from '../page2/Blogcomp11'
import BlogComp21 from '../page2/BlogComp21'
import { useDispatch, useSelector } from 'react-redux';
import { isThere } from '../Reducers/backImgReducer'
import { addPost } from '../Reducers/UserPostReducer'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import { isShowing } from '../Reducers/ShowLogin'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { v4 as uuidv4 } from 'uuid';

function WriteBlog() {
    const {showLog} = useSelector((state)=>state.showLogin)
    const users= useSelector((store)=>store.userP)
    const {userLogged} = useSelector((state)=>state.userloggedin)
    const {username} = useSelector((state)=>state.usernames)
    const dispatch = useDispatch()
    const [pic, setPic] = useState(false)
    
  
     const dt = new Date().toLocaleDateString();
    
    
    
    const [userValues, setUserValues]= useState({
       
        title:'',
        story: '',
        picture: '',
        date:''
    })

    useEffect(()=>{
       
        setUserValues({...userValues, date: dt});
      
    },[])

    
    const postStory2=(file)=>{
        
        const formData= new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'tudt0ncg')

        axios.post('https://api.cloudinary.com/v1_1/chidodo-enterprises/image/upload', formData)
        .then((response)=>{
            toast.info('image uploaded successfully')
            setUserValues({...userValues, picture:response.data.url})
            setPic(true)
        })
        .catch((error)=>{
            toast.error("please try again")
        })
        
       
        
    }

    console.log(users)
    console.log(userValues)

    
        


    const postStory=()=>{

        // to get date
  
        
        
         
          
       
    
        
        
        dispatch(addPost({
            // Print out random ids from 1-20, if id exists then dont
            
            id: uuidv4(),
            title: userValues.title,
            story: userValues.story,
            picture: userValues.picture,
            date:userValues.date
        }))
        
    }


   


  

    return (
    <div>
        <ToastContainer/>
        {/* marginp */}
        <div className='marginp'>
            {/* main write */}
            <form className='wbmainwrite'>
                {/* header tite */}
                <p>Write your story let others be inspired</p>

                {/* title box */}
                <div className='title-box'>
                    <input placeholder='Title' type='text' onChange={(e)=>setUserValues({...userValues, title: e.target.value})}></input>
                </div>
                {/* write box */}
                <div className='wbwritebx'>
                    <textarea placeholder='Write your story' onChange={(e)=>setUserValues({...userValues, story: e.target.value})}></textarea>

                </div>

                {/* prompt buttons */}
                 {userLogged ? 
                <div className='wbprmtbtn'>
                    {/* button */}

                    {/* inputting a filr */}
                    <input
                        type='file'
                        accept='image/*'
                        id='upload-photo'
                        onChange={(e)=>  postStory2(e.target.files[0])}
                    />
                
                    <label className='wbherobtn2' htmlFor='upload-photo'>
                        <div>
                            <p>Upload Photo </p><img src={camera} alt=''></img>
                        </div>
                    
                        
                    </label>
                    {/* button */}
                    {pic 
                    ?   <div className='wbherobtn' onClick={postStory}>
                            <p>Post story</p>
                    
                        </div>
                    :  <div className='wbherobtn' disabled>
                         <p>Post story</p>
                        
                        </div>
                    }
                   
                </div>
             :
                    <div className='wbprmtbtn'>
                        {/* button */}
                    
                        <div className='wbherobtn2' onClick={()=>{dispatch(isShowing())}}>
                            <div>
                                <p>Upload Photo </p><img src={camera} alt=''></img>
                            </div>
                        
                            
                        </div>
                        {/* button */}
                        <div className='wbherobtn'  onClick={()=>{dispatch(isShowing())}}>
                            <p>Post story</p>
                            
                        </div>
                    </div>
                    

                    }
                

            </form>


            {/* other blog comp */}
            <div className='wbotherblog'>
                <p className='wbotherblogh'>Your FitFam Stories</p>

                {/* component area */}
                <div >

                    {userValues &&

                         
                                <div className='wbcomparea' key={uuidv4()}>
                                    {/* //  blog component 1 */}
                                {/* <Link to={`/blog/${userValues.id}`} className='wetin-deygel' onClick={()=>dispatch(isThere({
                                    setImg: userValues.picture,
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
    </div>
  )
}

export default WriteBlog