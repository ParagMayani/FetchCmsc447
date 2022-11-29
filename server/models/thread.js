import mongoose from 'mongoose';

const threadSchema = mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreatePost'
    },
    comment: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CreateUser'
    },
    created_on: {type: Date, default: Date.now}
});

export const CreateThread = mongoose.model("CreateThread", threadSchema);