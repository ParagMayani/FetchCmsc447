

import React from "react";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";


import Post from './Post/Post';
const Posts = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    
    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        setData(dispatch(getPosts()));
    }, []);

    return (
        <>
            <h1>POSTS</h1>
            {posts.map((post) =>
                <Post post = {post} setCurrentId={setCurrentId} key={post._id}/> 
            )}
            
            
        </>
        
    );
}

export default Posts;