import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import axios from '../axios'

function UpdateBlog() {
    const params = useParams()
    const navigate = useNavigate();

    const [title, setTitle] = useState( '' );
    const [body, setBody] = useState( '' );

    useEffect(() => {
        axios
          .get(`/blogs/${params.id}`)
          .then((res) => {
            setTitle(res.data.title);
            setBody(res.data.body);
            console.log(res.data)
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }, []);

    

   const onTitleChange = (e) =>
    {
        setTitle(e.target.value)
       
    }

    const onBodyChange = (e) =>
    {
        setBody(e.target.value)
       
    }

    const onSubmit = (e) => {
      e.preventDefault()
      
      axios
        .put(`/blogs/${params.id}`, {
          title: title,
          body:body,
        })
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        })

        navigate(`/singleblog/${params.id}`)

    }

      
 return (
      
    <div className="container">
    <form onSubmit={onSubmit}>
     <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="type the blog title" name="title" value={title} onChange={onTitleChange}  />
     </div>
     
     <div className="mb-3">
     <textarea className="form-control" id="body" placeholder="type the decription of blog" rows="3"name="body" value={body} onChange={onBodyChange}></textarea>
     </div>

     <button type="submit" className="btn btn-primary">update</button>
    </form>
    </div>

  )
}

export default UpdateBlog