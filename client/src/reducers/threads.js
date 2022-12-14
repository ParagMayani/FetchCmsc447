import { READ_THREAD, CREATE_THREAD, EDIT_THREAD, DELETE_THREAD, LIKE_THREAD, DISLIKE_THREAD} from './ActionTypes';


export default (threads = [], action) => {
    switch(action.type) {
        case READ_THREAD:
            return action.payload;
        case CREATE_THREAD:
            return [...threads, action.payload];
        case LIKE_THREAD:
        case DISLIKE_THREAD:
        case EDIT_THREAD:
            return threads.map(( thread ) => thread._id === action.payload._id ? action.payload : threads);
        case DELETE_THREAD:
            return [...threads, action.payload];
        default:
            return threads;
    }
}