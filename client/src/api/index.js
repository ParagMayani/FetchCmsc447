import axios from "axios";

const postURL = 'http://localhost:5000/posts/';
const userURL = 'http://localhost:5000/users/';
const threadURL = 'http://localhost:5000/threads/';


export const getPosts = () => axios.get( postURL + 'get');
export const filterPostById = (filters) => axios.get(postURL + `get/filters/${filters._id}`);

export const createPost = (newPost) => axios.post((postURL + 'create'), newPost);
export const updatePost = (post) => axios.patch((postURL + 'update/'), post);
export const likePost = (post) => axios.patch((postURL + 'update/like/'), post);
export const unlikePost = (id) => axios.patch((postURL + 'update/unlike'), id);
export const dislikePost = (post) => axios.patch((postURL + 'update/dislike/'), post);
export const undislikePost = (post) => axios.patch((postURL + 'update/unldisike/'), post);
export const deletePost = (post) => axios.delete((postURL + 'delete/'), post);

export const verifyEmail = (email) => axios.post((userURL + 'verify'), email);
export const createUser = (newUser) => axios.post((userURL + 'create'), newUser);
export const updateUser = (user) => axios.patch((userURL + 'update'), user);
export const deleteUser = (user) => axios.delete((userURL + 'delete'), user);

export const getThread = (post) => axios.get(threadURL + `get/${post._id}`, post);
export const createThread = (newThread) => axios.post((threadURL + 'create'), newThread);
export const updateThread = (thread) => axios.patch((threadURL + 'update/'), thread);
export const likeThread = (thread) => axios.patch((threadURL + 'update/like/'), thread);
export const unlikeThread = (thread) => axios.patch((threadURL + 'update/unlike'), thread);
export const dislikeThread = (thread) => axios.patch((threadURL + 'update/dislike/'), thread);
export const undislikeThread = (thread) => axios.patch((threadURL + 'update/undislike'), thread);
export const deleteThread = (thread) => axios.delete((threadURL + 'delete'), thread);

export const login = (username, password) => axios.patch((userURL + 'signin'), username, password);
