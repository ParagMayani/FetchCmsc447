import { combineReducers } from "redux";
import posts from './posts'
import users from './users'
import threads from './users'
export default combineReducers({
    posts, users, threads
});