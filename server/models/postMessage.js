import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    ID: String,
    Firsname: String,
    Lastname: String,
    Age: {type: Number, min: 17, max: 23},
    Academics: {
        College: String,
        Major: String,
        Courses: [String],
        GPA: {type: Number, min: 2.0, max: 4.0},
    },
    Desired_Job: {
        Industry: String,
        Field: String,
        Position: String
    },
    Hobbies: {
        Video_Games: [String],
        Sports: [String],
        Music: {
            "Pop": Boolean,
            "Hip-hop": Boolean,
            "Country": Boolean, 
            "Rock": Boolean, 
            "R&B": Boolean, 
            "Classical": Boolean, 
            "K-pop": Boolean
        } 
    },
});

const postSchema = mongoose.Schema({
    ID: String,
    Title: String,
    Description: String,
    Likes: {
        type: Number,
        default: 0
    },
    Dislikes: {
        type: Number,
        default: 0
    },
    Category: {
        Academics: {
            Major: String,
            Courses: [String],
            GPA: {type: Number, min: 2.0, max: 4.0},
        },
        Desired_Job: {
            Industry: String,
            Field: String,
            Position: String
        },
        Hobbies: {
            Video_Games: [String],
            Sports: [String],

        },
        Music: {
            "Pop": Boolean,
            "Hip-hop": Boolean,
            "Country": Boolean, 
            "Rock": Boolean, 
            "R&B": Boolean, 
            "Classical": Boolean, 
            "K-pop": Boolean
        }
    },
    Created : {
        User_Id: Schema.Types.ObjectId,
        Created_On: {type: Date, default: Date.now} 
    }
});

const threadSchema = mongoose.Schema({
    ID: String,
    Post_ID: Schema.Types.ObjectId,
    User_ID: Schema.Types.ObjectId,
    Comment: String,
    Thread_Replies: [Schema.Types.ObjectId],
    Likes: {
        type: Number,
        default: 0
    },
    Dislikes: {
        type: Number,
        default: 0
    }
});