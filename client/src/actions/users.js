import * as api from '../api';

export const verifyEmail = (email) => async(dispatch) => {
    try{
        console.log(email);
        const {data} = await api.verifyEmail(email);
        dispatch({type: 'VERIFY_EMAIL', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const createUser = (user) => async(dispatch) => {
    try{
        console.log(user);
        const {data} = await api.createUser(user);
        dispatch({type: 'CREATE_USER', payload: data});
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = (loginData) => async(dispatch) => {
    try{
        const {data} = await api.login(loginData);
        dispatch({type: 'LOGIN_USER', payload: data});
        localStorage.setItem("user", JSON.stringify(data[0]));
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