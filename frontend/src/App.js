import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'
import UpdateBlog from './pages/UpdateBlog'
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path ='/' element={<BlogPage/>} />
            <Route path ='/singleblog/:id' element={<SingleBlogPage/>} />
            <Route path ='/createblog' element={<CreateBlogPage />}/>
            <Route path ='/updateblog/:id' element={<UpdateBlog />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
