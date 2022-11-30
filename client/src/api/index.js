import axios from "axios";

const url = 'http://localhost:5000/posts/get';
const createURL = 'http://localhost:5000/create'

export const fecthPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(createURL, newPost);