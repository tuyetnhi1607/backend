const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: {type: String, strim: true, required: [true, 'Content mus be required']},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;
