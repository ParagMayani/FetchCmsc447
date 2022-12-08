import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        console.log("tryblock for getPosts");
        const {data } = await api.getPosts();
        dispatch({type: 'READ_POST', payload: data});
    } catch (error){
        console.log(error.message);
        
    }
}

export const filterPostsById = (filters) => async(dispatch) => {
    try {
        console.log("tryblock for getFilterPosts");
        const { data } = await api.filterPostById(filters);
        dispatch({type: 'FILTER_POST', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const {data } = await api.createPost(post);
        dispatch({ type: 'CREATE_POST', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try{
        const {data } = await api.updatePost(id, post);

        dispatch({type: 'EDIT_POST', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE_POST', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.likePost(post);
        
        dispatch({type: 'LIKE_POST', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const dislikePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.dislikePost(post);
        dispatch({type: 'DISLIKE_POST', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

