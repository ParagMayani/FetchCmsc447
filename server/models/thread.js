import mongoose from 'mongoose';

const threadSchema = mongoose.Schema({
    post_id: mongoose.Schema.Types.ObjectId,
    description: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    created_by : mongoose.Schema.Types.ObjectId,
    created_on: {type: Date, default: Date.now}
});

export const CreateThread = mongoose.model("CreateThread", threadSchema);