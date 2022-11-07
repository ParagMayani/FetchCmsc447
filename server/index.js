import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();
app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://test:test123@cluster0.3xtbpan.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL).then(()=> app.listen(PORT, () => console.log(`Server running on: ${PORT}`))).catch((error) => console.log(error.message));

//https://www.mongdb.com/cloud/atlas

//mcha4
//RLZSUfCxGqb5e6RM