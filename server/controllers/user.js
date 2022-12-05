import mongoose from "mongoose";
import { CreateUser } from "../models/user.js";

export const createUsers = async (request, response) => {
     const the_post = request.body;
     console.log(the_post);
     const new_user = new CreateUser(the_post);
     try {
         await new_user.save();
         response.status(201).json(new_user);
     }
     catch (error){
         response.status(409).json({message: error.message});
     }
}

export const updateUsers = async (request, response) => {
    const {id:_id} = request.body;
    const updatedBody = request.body;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No user with that ID"));
    }
    const updatedUser = await CreateUser.findByIdAndUpdate(_id, updatedBody, {new: true});
    response.json(updatedUser);
}

export const removeUsers = async (request, response) => {
    const {id:_id} = request.body;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No user with that ID"));
    }
    await CreateUser.findByIdAndRemove(_id);
    response.json({message: "User deleted successfully."});
}