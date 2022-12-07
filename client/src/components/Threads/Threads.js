

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPosts } from "../../actions/posts";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
const Threads = ({setCurrentId}) => {
   
    const [postData, setPostData] = useState();
    const [data, setData] = useState([]);
    const post_id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("UseEffect in Threads.js");
        console.log(post_id);
        setPostData(dispatch(filterPosts(post_id)));
    }, []);

    const threads = useSelector((state) => state.threads);
    console.log(postData);
    

    // const post = dispatch(filterPosts(post_id));
    return (
        <>
            {/* <Post key={post_id} setCurrentId={setCurrentId}/> */}
            {/* <ThreadForm/> */}
            <h1>THREADS</h1>
            {threads.map((thread) =>
                <Thread thread = {thread} key={thread._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;