import axios from "axios";

const postURL = 'http://localhost:5000/posts/';
const userURL = 'http://localhost:5000/users/';
const threadURL = 'http://localhost:5000/threads/';


export const getPosts = () => axios.get( postURL + 'get');
export const filterPostById = (filters) => axios.get(postURL + `get/filters/id=${filters._id}`);
export const filterPostsByCategory = (filters) => axios.get(postURL + `get/filters/category=${filters.category}`);

export const createPost = (newPost) => axios.post((postURL + 'create'), newPost).then((response) => {console.log(response)});
export const updatePost = (post) => axios.patch((postURL + 'update/'), post);
export const likePost = (post) => axios.patch((postURL + 'update/like/'), post);
export const dislikePost = (post) => axios.patch((postURL + 'update/dislike/'), post);
export const deletePost = (post) => axios.delete((postURL + 'delete'), {data : {postID: post.post._id, userID: post.userID}});

export const verifyEmail = (email) => axios.post((userURL + 'verify'), email); 
export const createUser = (newUser) => axios.post((userURL + 'create'), newUser).then((response) => {if(response.status == 200) alert(response.data.message); else alert("Sucessfully created\n Go to login page and log in")});
export const updateUser = (user) => axios.patch((userURL + 'update'), user);
export const deleteUser = (user) => axios.delete((userURL + 'delete'), user);

export const getThread = (post) => axios.get(threadURL + `get/${post._id}`, post);
export const createThread = (newThread) => axios.post((threadURL + 'create'), newThread);
export const updateThread = (thread) => axios.patch((threadURL + 'update/'), thread);
export const likeThread = (thread) => axios.patch((threadURL + 'update/like/'), thread);
export const dislikeThread = (thread) => axios.patch((threadURL + 'update/dislike/'), thread);
export const deleteThread = (thread) => axios.delete((threadURL + 'delete'), thread);

export const login = (loginData) => axios.post((userURL + 'login'), loginData);
