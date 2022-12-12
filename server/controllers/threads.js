import { CreateThread } from "../models/thread.js";
import mongoose from 'mongoose';
import { CreateUser } from '../models/user.js'

 export const getThreads = async (request, response) => {
    const post = request.params;
    try {
        const all_threads = await CreateThread.find({post_id: post.post_id}).sort({created_on:-1});
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
    const userID = request.body.userID;
    const id = request.body.thread._id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    
    const alreadyDisliked = await CreateUser.find({dislike: id});
    if(alreadyDisliked[0] !== undefined){
        return (response.status(404).send("Cannot both like and dislike a thread"));
    } else {
        const the_user = await CreateUser.findById(userID);
        if(the_user.likes.length === 0){
            const the_thread = await CreateThread.findById(id);
            const likedThread = await CreateThread.findByIdAndUpdate(id, {likes : (the_thread.likes + 1)}, {new: true});
            await CreateUser.findByIdAndUpdate(userID, { $push: { likes: id }});
            response.json(likedThread);
        }
        if(the_user.likes.length > 0){
            const the_userliked = await CreateUser.find({_id: userID, likes: {$in: [id]}});
            console.log(the_userliked);
            if(the_userliked[0] != null){
                response.json(await unlikeThreads(id, userID));
            } else {
                const the_thread = await CreateThread.findById(id);
                const likedthread = await CreateThread.findByIdAndUpdate(id, {likes : (the_thread.likes + 1)}, {new: true});
                await CreateUser.findByIdAndUpdate(userID, { $push: { likes: id }});
                response.json(likedthread);
            } 
        }
    }
 }

 async function unlikeThreads(thread_id, user_id) {
    const the_thread = await CreateThread.findById(thread_id);
    const unlikedThread = await CreateThread.findByIdAndUpdate(thread_id, {likes : the_thread.likes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { likes: thread_id } });
    return unlikedThread;
 }

 export const dislikeThreads = async (request, response) => {
    const userID = request.body.userID;
    const id = request.body.thread._id;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return (res.status(404).send("No thread with that ID"));
    }
    const alreadyliked = await CreateUser.find({likes: id});
    if(alreadyliked[0] !== undefined){
        return (response.status(404).send("Cannot both like and dislike a thread"));
    } else {
        const the_user = await CreateUser.findById(userID);
        if(the_user.dislike.length === 0){
            const the_thread = await CreateThread.findById(id);
            const dislikedThread = await CreateThread.findByIdAndUpdate(id, {dislikes : (the_thread.dislikes + 1)}, {new: true});
            await CreateUser.findByIdAndUpdate(userID, { $push: { dislike: id }});
            response.json(dislikedThread);
        }
        if(the_user.dislike.length > 0){
            const the_userdisliked = await CreateUser.find({_id: userID, dislike: {$in: [id]}});
            if(the_userdisliked[0] != null){
                response.json(await undislikeThreads(id, userID));
            } else {
                const the_thread = await CreateThread.findById(id);
                const dislikedthread = await CreateThread.findByIdAndUpdate(id, {dislikes : (the_thread.dislikes + 1)}, {new: true});
                await CreateUser.findByIdAndUpdate(userID, { $push: { dislike: id }});
                response.json(dislikedthread);
            } 
        }
    }
 }

 async function undislikeThreads(thread_id, user_id) {
    const the_thread = await CreateThread.findById(thread_id);
    const undislikedThread = await CreateThread.findByIdAndUpdate(thread_id, {dislikes : the_thread.dislikes - 1}, {new: true});
    await CreateUser.findByIdAndUpdate(user_id, { $pull: { dislike: thread_id } });
    return undislikedThread;
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