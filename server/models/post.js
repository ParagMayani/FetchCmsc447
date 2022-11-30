import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    description: {
        type: String,
        default: ''
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    academia: {
        type: Boolean,
        default: false
    },
    industry: {
        type: Boolean,
        default: false
    },
    hobbies: {
        type: Boolean,
        default: false
    },
    music: {
        type: Boolean,
        default: false
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreateUser'
    },
    created_on: {type: Date, default: Date.now}
});

export const CreatePost = mongoose.model("CreatePost", postSchema);