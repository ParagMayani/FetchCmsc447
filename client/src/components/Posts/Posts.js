

import React from "react";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { filterPostsByCategory, getPosts } from "../../actions/posts";


import Post from './Post/Post';
const Posts = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const filter = {
        category: useParams().category
    }
    
    const posts = useSelector((state) => state.posts);
    
    useEffect(() => {
        if(filter.category != undefined){
            setData(dispatch(filterPostsByCategory(filter)));
        } else {
            setData(dispatch(getPosts()));
        }
    }, []);

    if(filter.category != undefined){
        return (
            <>
            <h1>POSTS</h1>
            {posts.map((post, i) =>
                <Post post = {post} setCurrentId={setCurrentId} key={post._id}/> 
                )}
            </>
        );
    } else {
        return (
            <>
                <h1>POSTS</h1>
                {posts.map((post) =>
                    <Post post = {post} setCurrentId={setCurrentId} key={post._id}/> 
                )}
                
                
                
            </>
        );
    }
}

export default Posts;