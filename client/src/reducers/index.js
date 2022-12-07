import { combineReducers } from "redux";
import posts from './posts'
import users from './users'
import threads from './threads'
export default combineReducers({
    threads, posts, users
});