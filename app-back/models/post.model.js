var User = require('./user.model')

var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var PostSchema = new mongoose.Schema({
    text: String,
    author: String,
    date: Date,
})

PostSchema.plugin(mongoosePaginate)
const Post = mongoose.model('Post', PostSchema)

module.exports = Post;