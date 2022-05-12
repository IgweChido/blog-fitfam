
import './App.scss';

import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import Blog from './components/page2/Blog';
import BlogDetails from './components/page2/BlogDetails';
import WriteBlog from './components/page3/WriteBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Head from './components/Head';


function App() {
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
                <HeroPage/>
              </Route>

              <Route  path='/blog'>
                <Blog/>
              </Route>

              <Route path='/blogdetails'>
                <BlogDetails/>
              </Route>

              <Route  path='/writebff'>
                <WriteBlog/>
              </Route>
              
            </Switch>
          </div>
       
        <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
