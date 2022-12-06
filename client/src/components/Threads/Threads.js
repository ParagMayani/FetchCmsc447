

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPosts, getPosts } from "../../api";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
const Threads = ({setCurrentId}) => {
    const [data, setData] = React.useState([]);
    const post_id = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("UseEffect in Thread.js");
        console.log(post_id);
        setData(dispatch(getThreads(post_id)));
        
    }, [dispatch]);

    const threads = useSelector((state) => state.threads);
    console.log(data);
    

    // const post = dispatch(filterPosts(post_id));
    return (
        <>
            <Post key={post_id} setCurrentId={setCurrentId}/>
                <ThreadForm/>
            <h1>THREADS</h1>
            {threads.map((thread) =>
                <Thread thread = {thread} key={thread._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;