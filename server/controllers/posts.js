import { CreatePost } from "../models/post.js";
import { CreateUser } from "../models/user.js";
import mongoose from "mongoose";

export const getAllPosts = async (request, response) => {
    try {
        const all_posts = await CreatePost.find().sort({created_on:-1});
        response.json(all_posts);
    }
    catch (error){
        response.status(409).json({message: error.message});
    }
}

export const getFilteredPostById = async (request, response) => {
    var filteredPosts = [];
    var filters = request.params;
    var type = Object.keys(filters);
    var filter = filters[type];
    try {
        const filtered_post = await CreatePost.find({[type]: [filter]}).sort({created_on:-1});
        filteredPosts.push(filtered_post);
    }
    catch (error){
        response.status(409).json({message: error.message});
    }
    response.status(201).json(filteredPosts);
}

export const getFilteredPostByCategory = async (request, response) => {
    console.log("filteredPostByCategory");
    var filters = request.params;
    var type = Object.keys(filters);
    var filter = filters[type];
    try {
        const filtered_posts = await CreatePost.find({[type]: [filter]}).sort({created_on:-1});
        response.json(filtered_posts);
    }
    catch (error){
        response.status(409).json({message: error.message});
    }
}

 export const createPosts = async (request, response) => {
     const the_post = request.body;
     const new_post = new CreatePost(the_post);
     try {
         await new_post.save();
         response.status(201).json(new_post);
     }
     catch (error){
         response.status(409).json({message: error.message});
     }
 }

 export const updatePosts = async (request, response) => {  
    const id = request.body.post_id;
    const updatedBody = request.body;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (response.status(404).send("No post with that ID"));
    }
    the_post = CreatePost.findById(id);
    if (the_post.created.created_by === request.body.userID){
        const updatedPost = await CreatePost.findByIdAndUpdate(id, updatedBody, {new: true});
        response.json(updatedPost);
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }

 export const likePosts = async (request, response) => {
    const id  = request.body.post_id;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (response.status(404).send("No post with that ID"));
    }
    const alreadyLiked = await CreateUser.find({likes: request.body.post_id});
    if(alreadyLiked == null){
        const the_post = await CreatePost.findById(id);
        const likedPost = await CreatePost.findByIdAndUpdate(id, {likes : (the_post.likes + 1)}, {new: true});
        await CreateUser.findByIdAndUpdate(request.body.user_id, { $push: { likes: request.body.post_id } }, {new: true});
        response.json(likedPost);
    }
    else{
        response.json(unlikePosts(request.body.post_id, request.body.user_id));
    }
 }

 async function unlikePosts (post_id, user_id){
    const the_post = await CreatePost.findById(post_id);
    const unlikedPost = await CreatePost.findByIdAndUpdate(post_id, {likes : the_post.likes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { likes: post_id } }, {new: true});
    return unlikedPost;
 }

 export const dislikePosts = async (request, response) => {
    const id = request.body.post_id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const alreadyDisliked = await CreateUser.find({dislikes: request.body.post_id});
    if(alreadyDisliked == null){
        const the_post = await CreatePost.findById(id);
        const dislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : the_post.dislikes + 1}, {new: true});
        await CreateUser.findByIdAndUpdate(request.body.user_id, { $push: { dislikes: request.body.post_id } }, {new: true});
        response.json(dislikedPost);
    }
    else{
        response.json(undislikePosts(request.body.post_id, request.body.user_id));
    }
 }

 async function undislikePosts(post_id, user_id){
    const the_post = await CreatePost.findById(post_id);
    const undislikedPost = await CreatePost.findByIdAndUpdate(post_id, {dislikes : the_post.dislikes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { dislikes: post_id } }, {new: true});
    return undislikedPost;
 }

 export const deletePosts = async (request, response) => {
    const id = request.body.post_id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findByIdAndRemove(id);
    if (the_post.created.created_by === request.body.user_id){
        await CreatePost.findByIdAndRemove(id);
        response.json({message: "Post deleted successfully."});
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }



