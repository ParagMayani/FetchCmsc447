

import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterPostsByCategory, getPosts } from "../../actions/posts";


import Post from './Post/Post';
const Posts = () => {
    var user = null;
    const navigate = useNavigate();
    if(localStorage.getItem("user") !== null){
        user = JSON.stringify(localStorage.getItem("user"));
    } else {
        navigate('/log_in');
    }
    
    //const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    //const [data, setData] = useState([]);

    const filter = {
        category: useParams().category
    }
    
    const posts = useSelector((state) => state.posts);
    
    useEffect(() => {
        if(filter.category !== undefined){
            dispatch(filterPostsByCategory(filter));
        } else {
            dispatch(getPosts());
        }
    }, []);

    if(filter.category !== undefined){
        return (
            <>
            <h1>POSTS</h1>
            {posts.map((post, i) =>
                <Post post = {post} user={user} key={post._id}/> 
                )}
            </>
        );
    } else {
        return (
            <>
                <h1>POSTS</h1>
                {posts.map((post) =>
                    <Post post = {post} user={user} key={post._id}/> 
                )}
                
                
                
            </>
        );
    }
}

export default Posts;