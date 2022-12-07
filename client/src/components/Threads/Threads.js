

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPosts } from "../../actions/posts";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
const Threads = ({setCurrentId}) => {
    const threads = useSelector((state) => state.threads);
    const postID = useParams().post_id;
    const [postData, setPostData] = useState({
        _id: postID
    });
    const [data, setData] = useState([]);
    
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("UseEffect in Threads.js");
        console.log(postData);
        setPostData(dispatch(filterPosts(postData)));
    }, []);

    
    console.log(postData);
    

    // const post = dispatch(filterPosts(post_id));
    return (
        <>
            console.log(postData);
            <Post post={postData} key={postData._id} setCurrentId={setCurrentId}/>
            <ThreadForm post = {postID}/>
            <h1>THREADS</h1>
            {threads.map((thread) =>
                <Thread thread = {thread} key={thread._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;