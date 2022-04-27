import axios from '../axios'
import { useState, useEffect } from 'react'

function Blogpage() {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios.get('/blogs').then((response) => {
      setBlogs(response.data);
    }).catch((error) => {
      console.log(error.response.data)
    })
  }, []);
  console.log(blogs)

  return (
  
    <div className="container">
    <div className="row">
    <div className="col-md-8">

     { blogs.map((blog,i) => {
        return (
          <div key={i}>
            <div className="card mb-3">
            <div className="card-body">
              <h1 className="blog-title">{blog.title}</h1>
              <p className="blog-text">{blog.body}</p>
              <p className="blog-text">{blog.postedby}</p>
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