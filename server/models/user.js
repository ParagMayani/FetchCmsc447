import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: {type: Number, min: 17, max: 23},
    major: String,
    study_year: String
});

export const CreateUser = mongoose.model("CreateUser", userSchema);
