const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
{
    title: {
        type: String,
        required: [true, 'please add the title of blog'],
    },
    body: {
        type: String,
        required: [true, 'please add body of blog'],
    },
    
},
    {
        timestamps: true,
    })
    
    module.exports = mongoose.model('Blog', blogSchema)