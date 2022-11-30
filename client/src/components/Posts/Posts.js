

import React, {useEffect, useState} from "react";
import axios from 'axios';

import { useSelector } from "react-redux";


import Post from './Post/Post';
const Posts = () => {
    const posts = useSelector((state) => state.posts);

    //console.log(posts);
    return (
        <>
            <h1>POSTS</h1>
            {posts.map((post) =>
                <Post post = {post}/> 
            )}
            
            
        </>
        
    );
}

export default Posts;