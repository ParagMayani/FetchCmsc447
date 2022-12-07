import * as api from '../api';

export const createUser = (user) => async(dispatch) => {
    try{
        console.log(user);
        const {data} = await api.createUser(user);
        dispatch({type: 'CREATE_USER', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = (username, password) => async(dispatch) => {
    try{
        const {data} = await api.login(username, password);
        dispatch({type: 'LOGIN_USER', payload: data});
    } catch (error){
        console.log(error.message);
    }
}

export const updateUser = (id, post) => async(dispatch) => {
    try{
        const {data } = await api.updateUser(id, post);

        dispatch({type: 'EDIT_USER', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}