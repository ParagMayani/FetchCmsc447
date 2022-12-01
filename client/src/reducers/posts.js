import { CREATE_POST, EDIT_POST, DELETE_POST} from './ActionTypes';


export default (posts = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        case EDIT_POST:
            return [...posts, action.payload];
        case DELETE_POST:
            return [...posts, action.payload];
        default:
            return posts;
    }
}