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
    category: {
        type: String,
        default: "General"
    },
    created_by: mongoose.Schema.Types.ObjectId,
    created_on: {type: Date, default: Date.now}
});

export const CreatePost = mongoose.model("CreatePost", postSchema);