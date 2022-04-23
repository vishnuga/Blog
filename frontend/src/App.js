import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path ='/' element={<BlogPage/>} />
            <Route path ='/singleblog' element={<SingleBlogPage/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
