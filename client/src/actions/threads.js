import { copyFileSync } from 'fs';
import * as api from '../api';

export const getThreads = (post) => async(dispatch) => {
    try {
        console.log("tryblock for getThreads");
        const {data } = await api.getThread(post);
        console.log(data);
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error){
        console.log(error.message);
        
    }
}

export const createThread = (post) => async(dispatch) => {
    try {
        const {data } = await api.createPost(post);
        dispatch({ type: 'CREATE_THREAD', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateThread = (id, post) => async(dispatch) => {
    try{
        const {data } = await api.updatePost(id, post);

        dispatch({type: 'EDIT_THREAD', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteThread = (id) => async(dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE_THREAD', payload: id});
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.likePost(post);
        
        dispatch({type: 'LIKE_THREAD', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const dislikePost = (post) => async(dispatch) => {
    try{
        console.log(post);
        const {data } = await api.dislikePost(post);
        
        dispatch({type: 'DISLIKE_THREAD', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const createUser = (user) => async(dispatch) => {
    try{
        const {data} = await api.createUser(user);
        dispatch({type: 'CREATE_THREAD', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}