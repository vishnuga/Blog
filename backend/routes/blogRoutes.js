const express = require('express')
const router = express.Router()
const { getBlog, getBlogs, setBlog, updateBlog, deleteBlog} =require('../controllers/blogController')

router.route('/').get(getBlogs)
router.route('/:id').get(getBlog)
router.route('/').post(setBlog)
router.route('/:id').delete(deleteBlog).put(updateBlog)

module.exports = router