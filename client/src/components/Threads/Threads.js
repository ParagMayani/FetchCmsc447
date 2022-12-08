

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPostsById } from "../../actions/posts";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';

const Origin = () => {
    const dispatch = useDispatch();
    var [data, setData] = useState(null);

    const postID = useParams().post_id;

    const posts = useSelector((state) => state.posts);

    var filter = {
        _id: postID,
        category: ''
    }

    useEffect(() => {
        console.log("UseEffect in  origin of Threads.js");
        setData(dispatch(filterPostsById(filter)));
    }, []);

    return (
        <>
            {posts.map((post) => 
                <Post post={post[0]} key={post[0]._id}/>
            )}
        </>
    )
}

const Threads = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    var [data, setData] = useState([]);
    const postID = useParams().post_id;

    const threads = useSelector((state) => state.threads);
    var filter = {
        _id: postID,
        category: ''
    }
    
    useEffect(() => {
        console.log("UseEffect in Threads.js");
        setData(dispatch(getThreads(filter)));
    }, []);

    function refreshPage() {
        window.location.reload(false);
    }
    
    return (
        <>  
            <Origin/>
            <ThreadForm post = {postID}/>
            <h1>THREADS</h1>
            {threads.map((thread, i) =>
                <Thread thread = {thread} setCurrentId={setCurrentId} key={i}/>
            )}
        </>
        
    );
}

export default Threads;