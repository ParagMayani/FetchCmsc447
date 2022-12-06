import { CreateUser } from "../models/user.js";
import pkg from 'blueimp-md5';
const { md5 } = pkg;

export const createUsers = async (request, response) => {
     const the_user = request.body;
     the_user.password = md5(the_user.password);
     const new_user = new CreateUser(the_post);
     try {
         await new_user.save();
         response.status(201).json(new_user);
     }
     catch (error){
         response.status(409).json({message: error.message});
     }
}

export const loginUsers = async (request, response) => {
    const login_info = request.body;
    login_info.password = md5(login_info.password);
    try {
        const user = await CreateUser.find({username: login_info.username});
        if (user.password === login_info.password){
            response.status(201).json(user);
        }
        else{
            response.status(409).json({message: "Incorrect password."});
        }
    }
    catch (error){
        response.status(409).json({message: "Unable to find the user account."});
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