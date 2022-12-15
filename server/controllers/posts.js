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
    const userID = request.body.userID;
    const id  = request.body.post._id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (response.status(404).send("No post with that ID"));
    }
    const alreadyDisliked = await CreateUser.find({dislike: id});
    if (alreadyDisliked[0] !== undefined){
        return (response.status(404).send("Cannot both like and dislike a post"));
    } else {
        const the_user = await CreateUser.findById(userID);
        if(the_user.likes.length === 0){
            const the_post = await CreatePost.findById(id);
            const likedPost = await CreatePost.findByIdAndUpdate(id, {likes : (the_post.likes + 1)}, {new: true});
            await CreateUser.findByIdAndUpdate(userID, { $push: { likes: id }});
            response.json(likedPost);
        }
        if(the_user.likes.length > 0){
            const the_userliked = await CreateUser.find({_id: userID, likes: {$in: [id]}});
            if(the_userliked[0] != null){
                response.json(await unlikePosts(id, userID));
            } else {
                const the_post = await CreatePost.findById(id);
                const likedPost = await CreatePost.findByIdAndUpdate(id, {likes : (the_post.likes + 1)}, {new: true});
                await CreateUser.findByIdAndUpdate(userID, { $push: { likes: id }});
                response.json(likedPost);
            }  
        }
    }
 }

 async function unlikePosts (post_id, user_id){
    const the_post = await CreatePost.findById(post_id);
    const unlikedPost = await CreatePost.findByIdAndUpdate(post_id, {likes : the_post.likes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { likes: post_id } });
    return unlikedPost;
 }

 export const dislikePosts = async (request, response) => {
    const userID = request.body.userID;
    const id = request.body.post._id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const alreadyliked = await CreateUser.find({likes: id});
    if (alreadyliked[0] !== undefined){
        return (response.status(404).send("Cannot both like and dislike a post"));
    } else {
        const the_user = await CreateUser.findById(userID);
        if(the_user.dislike.length === 0){
            const the_post = await CreatePost.findById(id);
            const dislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : (the_post.dislikes + 1)}, {new: true});
            await CreateUser.findByIdAndUpdate(userID, { $push: { dislike: id }});
            response.json(dislikedPost);
        }
        if(the_user.dislike.length > 0){
            const the_userdisliked = await CreateUser.find({_id: userID, dislike: {$in: [id]}});
            if(the_userdisliked[0] != null){
                response.json(await undislikePosts(id, userID));
            } else {
                const the_post = await CreatePost.findById(id);
                const dislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : (the_post.dislikes + 1)}, {new: true});
                await CreateUser.findByIdAndUpdate(userID, { $push: { dislike: id }});
                response.json(dislikedPost);
            }  
        }
    }
 }

 async function undislikePosts(post_id, user_id){
    const the_post = await CreatePost.findById(post_id);
    const undislikedPost = await CreatePost.findByIdAndUpdate(post_id, {dislikes : the_post.dislikes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { dislike: post_id } });
    return undislikedPost;
 }

 export const deletePosts = async (request, response) => {
    const userID = request.body.userID;
    const postID = request.body.postID;
    if (!mongoose.Types.ObjectId.isValid(postID)){
        return (response.status(404).send("No post with that ID"));
    }
    const the_post = await CreatePost.findById(postID);
    const the_user = await CreateUser.findById(userID);
    if (the_post.created_by.toString() == the_user._id.toString()){
        await CreatePost.findByIdAndRemove(the_post._id);
        response.json({message: "Post deleted successfully."});
    }
    else{
        return (response.status(404).send("Invalid User"));
    }
 }



