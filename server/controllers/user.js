import mongoose from "mongoose";
import { CreateUser } from "../models/user";

export const createUsers = async (request, response) => {
     const the_post = request.payload;
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
    const {id:_id} = request.params;
    const updatedBody = request.payload;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No user with that ID"));
    }
    const updatedUser = await CreateUser.findByIdAndUpdate(_id, updatedBody, {new: true});
    response.json(updatedUser);
}

export const removeUsers = async (request, response) => {
    const {id:_id} = request.params;
    if (!mongoose.Types.ObjectId.isValid(_id)){
        return (res.status(404).send("No user with that ID"));
    }
    await CreateUser.findByIdAndRemove(_id);
    response.json({message: "User deleted successfully."});
}