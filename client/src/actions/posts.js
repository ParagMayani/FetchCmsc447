import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try {
        const {data } = await api.fecthPosts();

        dispatch({tpye: 'FETCH_ALL', playload: data});
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