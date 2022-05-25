import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import SingleBlogPage from './pages/SingleBlogPage'
import CreateBlogPage from './pages/CreateBlogPage'
import UpdateBlog from './pages/UpdateBlog'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
  const user = false;
  return (
    <>
      <Router>
        <div className='container'>
          <Header user={user} />
          <Routes>
            <Route path ='/' element={<BlogPage/>} />
            <Route path ='/singleblog/:id' element={user ? <Navigate to ="/login" /> :<SingleBlogPage/>} />
            <Route path ='/createblog' element={<CreateBlogPage />}/>
            <Route path ='/updateblog/:id' element={<UpdateBlog />}/>
            <Route path ='/login' element={user ? <Navigate to ="/" /> : <Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
