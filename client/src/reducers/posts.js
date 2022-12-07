import { READ_POST, FILTER_POST, CREATE_POST, EDIT_POST, DELETE_POST, LIKE_POST} from './ActionTypes';


export default (posts = [], action) => {
    switch(action.type) {
        case READ_POST:
            return action.payload;
        case FILTER_POST:
            return action.payload;
        case CREATE_POST:
            return [...posts, action.payload];
        case DELETE_POST:
            return posts.filter((post => post._id === action.playload));
        case EDIT_POST:
        case LIKE_POST:
            return posts.map(( post ) => post._id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}