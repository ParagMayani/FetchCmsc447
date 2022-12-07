import * as api from '../api';

export const getThreads = (post) => async(dispatch) => {
    try {
        console.log("tryblock for getThreads");
        console.log(post);
        const { data } = await api.getThread(post);
        dispatch({type: 'READ_THREAD', payload: data});
    } catch (error){
        console.log(error.message);
        
    }
}

export const createThread = (post) => async(dispatch) => {
    try {
        const {data } = await api.createThread(post);
        dispatch({ type: 'CREATE_THREAD', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateThread = (id, post) => async(dispatch) => {
    try{
        const {data } = await api.updateThread(id, post);

        dispatch({type: 'EDIT_THREAD', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteThread = (id) => async(dispatch) => {
    try {
        await api.deleteThread(id);
        dispatch({ type: 'DELETE_THREAD', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.likeThread(post);
        
        dispatch({type: 'LIKE_THREAD', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const dislikePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.dislikeThread(post);
        
        dispatch({type: 'DISLIKE_THREAD', payload: data});
    } catch (error){
        console.log(error.message);
    }
}