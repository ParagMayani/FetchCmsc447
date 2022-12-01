import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        console.log("tryblock for getPosts");
        const {data } = await api.fecthPosts();
        console.log(data);
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error){
        console.log(error.message);
        
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = (user) => async(dispatch) => {
    try{
        const {data} = await api.createUser(user);
        dispatch({type: 'CREATE_USER', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}