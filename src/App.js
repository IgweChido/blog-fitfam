import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import Blog from './components/page2/Blog';
import BlogDetails from './components/page2/BlogDetails';
import WriteBlog from './components/page3/WriteBlog';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <WriteBlog/> */}
      {/* <BlogDetails/> */}
      {/* <Blog/> */}
      <HeroPage/>
      <Footer/>
    </div>
  );
}

export default App;
