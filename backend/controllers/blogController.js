const asyncHandler = require('express-async-handler')
const blogModel = require('../model/blogModel')
const Blog = require('../model/blogModel')
const Blogs = require('../model/blogModel')

// get blogs
const getBlogs = asyncHandler(async (req, res) => { 
    const blogs = await Blog.find()
    res.status(200).json(blogs)
})

//get single blog
const getBlog = asyncHandler(async (req, res) => { 
    const blogs = await Blog.findById(req.params.id)

    res.status(200).json(blogs)
})

// set blogs
const setBlog = asyncHandler(async (req, res) => { 
    if (!req.body.title){
        res.status(400)
        throw new Error( 'please add a title field')
    }
    if (!req.body.body){
        res.status(400)
        throw new Error( 'please add a body field')
    }
 const blogs = await Blog.create({
     title: req.body.title,
     body: req.body.body,
 })
 
    res.status(200).json(blogs)
})

// update blog
const updateBlog = asyncHandler(async (req, res) => { 
    const blog = await Blog.findById(req.params.id)

    if(!blog){
        res.status(400)
        throw new Error('Blog not found')
    }

    const updatedBlog = await blogModel.findByIdAndUpdate(req.params.id, req.body, { 
        new: true,
    })
    
    res.status(200).json(updatedBlog)
})

// delete blog
const deleteBlog =asyncHandler( async (req, res) => { 

    const blog = await Goal.findById(req.params.id)

    if(!blog){
        res.status(400)
        throw new Error('blog not found')
    }
    await blog.remove()

    res.status(200).json({ id: req.params.id})
})




module.exports = {
    getBlog, 
    getBlogs,
    setBlog,
    updateBlog,
    deleteBlog,
}