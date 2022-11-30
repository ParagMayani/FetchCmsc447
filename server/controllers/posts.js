import { CreatePost } from "../models/post.js";

 export const getPosts = async (request, response) => {
    const filters = request.payload;
    console.log("getPosts")
    try {
        const all_posts = await CreatePost.find();
        response.json(all_posts);
    }
    catch (error){
        response.status(409).json({message: error.message});
    }
}

 export const createPosts = async (request, response) => {
     const the_post = request.payload;
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
    const {id:_id} = request.params.postID;
    const updatedBody = request.payload;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No post with that ID"));
    }
    the_post = CreatePost.findById(_id);
    if(the_post.created.created_by === request.params.postID)
    if (the_post.created.created_by === request.params.userID){
        const updatedPost = await CreatePost.findByIdAndUpdate(_id, updatedBody, {new: true});
        response.json(updatedPost);
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }

 export const likePosts = async (request, response) => {
    const id = request.params.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findById(id);
    const likedPost = await CreatePost.findByIdAndUpdate(id, {likes : the_post.likes + 1}, {new: true});
    response.json(likedPost);
 }

 export const unlikePosts = async (request, response) => {
    const id = request.params.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findById(id);
    const unlikedPost = await CreatePost.findByIdAndUpdate(id, {likes : the_post.likes - 1}, {new: true});
    response.json(unlikedPost);
 }

 export const dislikePosts = async (request, response) => {
    const id = request.params.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findById(id);
    const dislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : the_post.dislikes + 1}, {new: true});
    response.json(dislikedPost);
 }

 export const undislikePosts = async (request, response) => {
    const id = request.params.postID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findById(id);
    const undislikedPost = await CreatePost.findByIdAndUpdate(id, {dislikes : the_post.dislikes - 1}, {new: true});
    response.json(undislikedPost);
 }

 export const deletePosts = async (request, response) => {
    const {id:_id} = request.params.postID;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No post with that ID"));
    }
    const the_post = CreatePost.findByIdAndRemove(_id);
    if (the_post.created.created_by === request.params.userID){
        await CreatePost.findByIdAndRemove(_id);
        response.json({message: "Post deleted successfully."});
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }



