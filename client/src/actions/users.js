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