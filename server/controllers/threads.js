import { CreateThread } from "../models/thread.js";

 export const getThreads = async (request, response) => {
    const post = request.body;
    try {
        const all_threads = await CreateThread.find({post_id: post.postID}).sort({created_on:-1});
        response.json(all_threads);
    }
    catch (error){
        response.status(409).json({message: error.message});
    }
 }

 export const createThreads = async (request, response) => {
     const the_thread = request.body;
     const new_thread = new CreateThread(the_thread);
     try {
         await new_thread.save();
         response.status(201).json(new_thread);
     }
     catch (error){
         response.status(409).json({message: error.message});
     }
 }

 export const updateThreads = async (request, response) => {
    const id = request.body.threadID;
    const updatedBody = request.payload;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(_id);
    if (the_thread.created_by === request.body.userID){
        const updatedThread = await CreateThread.findByIdAndUpdate(id, updatedBody, {new: true});
        response.json(updatedThread);
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }

 export const likeThreads = async (request, response) => {
    const id = request.body.threadID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(id);
    const likedThread = await CreateThread.findByIdAndUpdate(id, {likes : the_thread.likes + 1}, {new: true});
    response.json(likedThread);
 }

 export const unlikeThreads = async (request, response) => {
    const id = request.body.threadID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(id);
    const unlikedThread = await CreatePost.findByIdAndUpdate(id, {likes : the_thread.likes - 1}, {new: true});
    response.json(unlikedThread);
 }

 export const dislikeThreads = async (request, response) => {
    const id = request.body.threadID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(id);
    const dislikedThread = await CreateThread.findByIdAndUpdate(id, {dislikes : the_thread.dislikes + 1}, {new: true});
    response.json(dislikedThread);
 }

 export const undislikeThreads = async (request, response) => {
    const id = request.body.threadID;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(id);
    const undislikedThread = await CreateThread.findByIdAndUpdate(id, {dislikes : the_thread.dislikes - 1}, {new: true});
    response.json(undislikedThread);
 }

 export const deleteThreads = async (request, response) => {
    const threadId = request.body.threadID;
    if (!mongoose.Types.ObjectId.isValid(threadId)){
        return (res.status(404).send("No thread with that ID"));
    }
    const the_thread = await CreateThread.findById(threadId);
    if (the_thread.created_by === request.body.userID){
        await CreatePost.findByIdAndRemove(threadId);
        response.json({message: "Thread deleted successfully."});
    }
    else{
        return (res.status(404).send("Invalid User"));
    }
 }