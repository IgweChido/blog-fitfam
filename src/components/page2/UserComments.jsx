import React, { useEffect, useState } from 'react'
import '../../styles/page2/UserComments.scss'
import usercom from '../../images/usercom.png'
import Loading from './Loading'
import run from '../../images/run-running.gif'
import { useDispatch, useSelector } from 'react-redux';

function UserComments() {
   const [data, setData] = useState([])
   const [data1, setData1] = useState([])
   const [loading, setLoading] = useState(true);
    const[error, setError] = useState(false)
    const[error1, setError1] = useState(false)
    const {userComs} = useSelector((state)=>state.userComm)

    const dispatch = useDispatch()
  

    useEffect( ()=>{

      setTimeout(()=>{
        async function fetchData (){
          try{
            const url =`https://randomuser.me/api/?results=${userComs}`;
           
               const response = await fetch(url)
               
               
               setData(await response.json());
               
               setLoading(false);
          }
          catch(error){
             setError(true);
             setLoading(false);
             // console.log(error)
            
   
          }
        }
  
        async function fetchSecond(){
          try{
          
            const url1 ="https://jsonplaceholder.typicode.com/posts/1/comments";
              
               const response1 = await fetch(url1)
               
              
               setData1(await response1.json());
               setLoading(false);
          }
          catch(error){
             setError1(true);
             setLoading(false);
             // console.log(error)
            
   
          }
        }

        fetchData()
      fetchSecond()
      },2000)
      


     
      
     
    }, [])
     const {results} = data;
    // console.log(error)
    // console.log(error1)
    // console.log(results)
    // console.log(data1)

    // const zip = (results, data1) => results.map((x, i) => [x, data1[i]]);
    // console.log(zip(results, data1))
    

  return (
    <div>
      {loading && <Loading image={run}/>}
      {error && <div>Something went wrong</div>}
      {results  && data1 &&
      
      <div>
       
        {results.map((dat,dats)=>([dat, data1[dats]],
        
          <div className='usermaincom'>
        {/* col1 */}
        <div className='uccol1'>
            <img src={dat.picture.medium} alt=''></img>
        </div>

        {/* col2 */}
       
        <div className='uccol2'>
            {/* name */}
            <p className='ucname'>{dat.name.first} {dat.name.last}</p>
            {/* comment */}
          
            <p className='ucncom'>{data1[dats].body}</p>
             
            {/* time ago */}
            <p className='ucdate'>5 days ago</p>
        </div>

    </div>
      ))}
      </div>}
      
      
     
    </div>
   
  )
}

export default UserComments