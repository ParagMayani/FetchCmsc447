

import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterPosts, getPosts } from "../../api";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
const Threads = ({setCurrentId}) => {
    const threads = useSelector((state) => state.threads);
    const dispatch = useDispatch();
    const post_id = useParams();
    console.log(post_id);

    // const post = dispatch(filterPosts(post_id));
    return (
        <>
            {/* <Post post={post_id}/> */}
            <ThreadForm post_id = {post_id}/>
            <h1>THREADS</h1>
            {threads.map((thread) =>
                <Thread thread = {thread} key={thread._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;