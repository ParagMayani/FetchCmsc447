import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    age: {type: Number, min: 17, max: 23},
    major: String,
    study_year: String,
    username: String,
    password: String,
    likes: [mongoose.Schema.Types.ObjectId],
    dislike: [mongoose.Schema.Types.ObjectId]
});

export const CreateUser = mongoose.model("CreateUser", userSchema);
