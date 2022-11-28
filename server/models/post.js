import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    description: String,
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
    created_by: Schema.Types.ObjectId,
    created_on: {type: Date, default: Date.now}
});

export const CreatePost = mongoose.model("CreatePost", postSchema);