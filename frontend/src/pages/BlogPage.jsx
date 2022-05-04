import axios from '../axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function Blogpage() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('/blogs').then((response) => {
      setBlogs(response.data);
    }).catch((error) => {
      console.log(error.response.data)
    })
  }, []);
  //console.log(blogs)
  
  return (
  
    <div className="container">
    <div className="row">
    <div className="col-md-20">

      {blogs.map((blog,i) => {
        return (
          <div key={i}>
            <div className="card mb-3">
            <div className="card-body">
              <Link to={`/singleblog/${blog._id}`}><h1 className="blog-title">{blog.title}</h1></Link>
              <p className="blog-text">{blog.body}</p>
              
            </div>
            </div>
         </div>
        )
       })
     }
      </div>
      
      
    
  </div>
  </div>
    );

  

}

export default Blogpage