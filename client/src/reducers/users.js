import { CREATE_PROFILE, EDIT_PROFILE, DELETE_PROFILE, LOGIN_USER } from './ActionTypes'

export default (users = [], action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload;
        case CREATE_PROFILE:
            return [...users, action.payload];
        case EDIT_PROFILE:
            return [...users, action.payload];
        case DELETE_PROFILE:
            return [...users, action.payload];
        default:
            return users;
    }
}