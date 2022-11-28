import mongoose from 'mongoose';

const threadSchema = mongoose.Schema({
    post_id: Schema.Types.ObjectId,
    comment: String,
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    created_by : Schema.Types.ObjectId,
    created_on: {type: Date, default: Date.now}
});

export const CreateThread = mongoose.model("CreateThread", threadSchema);