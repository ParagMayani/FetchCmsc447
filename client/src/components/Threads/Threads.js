

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPostsById } from "../../actions/posts";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
const Threads = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    var [data, setData] = useState([]);
    var [thData, setThData] = useState([])
    const postID = useParams().post_id;

    const posts = useSelector((state) => state.posts);

    const threads = useSelector((state) => state.threads);
    var filter = {
        _id: postID,
        category: ''
    }
    
    useEffect(() => {
        console.log("UseEffect in Threads.js");
        setData(dispatch(filterPostsById(filter)));
        setThData(dispatch(getThreads(filter)));
    }, []);

    //console.log(threads);
    //threads.map((thread) => console.log(thread));
    return (
        <>
            {posts.map((post) => 
                <Post post={post[0]} key={post[0]._id}/>
            )}
            
            {/* <ThreadForm post = {postID}/> */}
            <h1>THREADS</h1>
            {threads.map((thread) =>
                console.log(thread)
                // <Thread thread = {thread} key={thread._id}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;