import { CreatePost } from "../models/post.js";
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
    console.log("filteredPostById");
    var filteredPosts = [];
    var filters = request.params;
    if(filters != null){
        console.log("filters is not null");
        console.log(filters);
    }
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
    var filteredPosts = [];
    var filters = request.params;
    if(filters != null){
        console.log(filters);
    }
    for (let i = 0; i < Object.keys(filters).length; i++) {
        var type = Object.keys(filters)[i];
        var filter = filters[type];
        try {
            const filtered_post = await CreatePost.find({[type]: [filter]}).sort({created_on:-1});
            filteredPosts.push(filtered_post);
        }
        catch (error){
            response.status(409).json({message: error.message});
        }
    }
    response.json(filteredPosts);
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
    const id = request.body._id;
    console.log(id);
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
    const id  = request.body._id;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (response.status(404).send("No post with that ID"));
    }
    const the_post = await CreatePost.findById(id);
    const likedPost = await CreatePost.findByIdAndUpdate(id, {likes : (the_post.likes + 1)}, {new: true});
    response.json(likedPost);
 }

 export const unlikePosts = async (request, response) => {
    const id = request.body.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = await CreatePost.findById(id);
    const unlikedPost = await CreatePost.findByIdAndUpdate(id, {likes : the_post.likes - 1}, {new: true});
    response.json(unlikedPost);
 }

 export const dislikePosts = async (request, response) => {
    const id = request.body._id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = await CreatePost.findById(id);
    const dislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : the_post.dislikes + 1}, {new: true});
    response.json(dislikedPost);
 }

 export const undislikePosts = async (request, response) => {
    const id = request.body.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = await CreatePost.findById(id);
    const undislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : the_post.dislikes - 1}, {new: true});
    response.json(undislikedPost);
 }

 export const deletePosts = async (request, response) => {
    const id = request.body.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findByIdAndRemove(id);
    if (the_post.created.created_by === request.body.userID){
        await CreatePost.findByIdAndRemove(_id);
        response.json({message: "Post deleted successfully."});
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }



