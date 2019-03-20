// Gettign the Newly created Mongoose Model we just created 

var Post = require('../models/post.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the posts List

exports.getPosts = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var posts = await Post.paginate(query, options)
        
        // Return the posts list that was retured by the mongoose promise

        return posts;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Posts')
    }
}

exports.createPost = async function(post){
    
    // Creating a new Mongoose Object by using the new keyword

    var newPost = new Post({
        text: post.text,
        author: post.author,
        date: new Date()
    })

    try{

        // Saving the post 

        var savedPost = await newPost.save()

        return savedPost;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Post")
    }
}

exports.updatePost = async function(post){
    var id = post.id;

    try{
        //Find the old Post Object by the Id
    
        var oldPost = await Post.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the post")
    }

    // If no old Post Object exists return false

    if(!oldPost){
        return false;
    }

    console.log(oldPost)

    //Edit the Post Object

    oldPost.text = post.text
    oldPost.author = post.author
    oldPost.date = post.date


    console.log(oldPost)

    try{
        var savedPost = await oldPost.save()
        return savedPost;
    }catch(e){
        throw Error("And Error occured while updating the Post");
    }
}

exports.deletePost = async function(id){
    
    // Delete the Post

    try{
        var deleted = await Post.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Post Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Post")
    }
}