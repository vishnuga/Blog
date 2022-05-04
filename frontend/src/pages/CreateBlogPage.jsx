import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../axios'

function CreateBlogPage() {

  const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title:'',
        body:'',
        
    });
    
    const { title, body } = formData

    const onChange = (e) =>{
        setFormData((prevState) => ({
          ...prevState,
          [e.target.name]: [e.target.value]
        }))
    }
    const onSubmit = (e) =>
    {
      e.preventDefault()
      
      if (!title) {
        alert("Enter a title");
      }
      axios
        .post('/blogs', {
          title: title[0],
          body:body[0],
        })
        .then(function (response) {
          console.log(response);
          
        })
        .catch(function (error) {
          console.log(error);
        })

        setFormData({
          title:'',
          body:'',
        })
        
        navigate("/")
    }


  return (
    <div className="container">
    <form onSubmit={onSubmit}>
     <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="type the blog title" name="title" value={title} onChange={onChange}  />
     </div>
     
     <div className="mb-3">
     <textarea className="form-control" id="body" placeholder="type the decription of blog" rows="3"name="body" value={body} onChange={onChange}></textarea>
     </div>

     <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>

  )
}

export default CreateBlogPage

