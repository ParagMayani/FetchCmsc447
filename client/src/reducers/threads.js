import { READ_THREAD, CREATE_THREAD, EDIT_THREAD, DELETE_THREAD} from './ActionTypes';


export default (posts = [], action) => {
    switch(action.type) {
        case READ_THREAD:
            return action.payload;
        case CREATE_THREAD:
            return [...posts, action.payload];
        case EDIT_THREAD:
            return [...posts, action.payload];
        case DELETE_THREAD:
            return [...posts, action.payload];
        default:
            return posts;
    }
}