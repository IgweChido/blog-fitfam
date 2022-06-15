
import './App.scss';

import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import Blog from './components/page2/Blog';
import BlogDetails from './components/page2/BlogDetails';
import BlogDetails1 from './components/page2/BlogDetails1';
import WriteBlog from './components/page3/WriteBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Head from './components/Head';
import { useEffect, useState } from 'react';
import Loading from './components/page2/Loading';
import run from './images/run-running.gif';
import basketball from './images/basketball.gif'


function App() {
  const [loader, setLoader] = useState(false)
  const [loading, setLoading] = useState(true)

      useEffect(()=>{
         setTimeout(()=>{
        
        setLoader(true)
        setLoading(false)

      }, 3000)

      },[])
     
  
  return (
    <Router>
      <div className="App">
        {/* grey area */}
        <div className='greyarea'>

        </div>
        <Head/>
          <div>
            <Switch>
              <Route exact path='/'>
                {loading && <Loading image={run}/>}
                {loader && <HeroPage/>}
                
              </Route>

              <Route  exact path='/blog'>
               
              {loading && <Loading image={run}/> }
                {loader && <Blog/>}
                
                
              </Route>

              <Route  exact path='/blog/:id'>
               
               {loading && <Loading image={run}/> }
                 {loader && <BlogDetails/>}
                 
                 
               </Route>

               <Route  exact path='/blog/:username/:id/:index'>
               
               {loading && <Loading image={run}/> }
                 {loader && <BlogDetails1/>}
                 
                 
               </Route>


              <Route  path='/writebff'>
              {loading && <Loading image={run}/>}
                {loader && <WriteBlog/>}
                
                
              </Route>
              
            </Switch>
          </div>
       
        <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
