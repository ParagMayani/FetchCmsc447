import axios from "axios";

const url = 'http://localhost:5000/posts';
const createURL = 'https://localhost:5000/create'

export const fecthPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);