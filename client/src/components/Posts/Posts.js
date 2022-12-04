

import React from "react";

import { useSelector } from "react-redux";


import Post from './Post/Post';
const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);

    //console.log(posts);
    return (
        <>
            <h1>POSTS</h1>
            {posts.map((post) =>
                <Post post = {post} key={post._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Posts;