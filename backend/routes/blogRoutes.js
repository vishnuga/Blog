const express = require('express')
const router = express.Router()
const { getBlog, setBlog, updateBlog, deleteBlog} =require('../controllers/blogController')

router.route('/').get(getBlog)
router.route('/').post(setBlog)
router.route('/:id').delete(deleteBlog).put(updateBlog)

module.exports = router