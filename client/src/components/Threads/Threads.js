

import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getThreads } from "../../actions/threads";
import { filterPostsById } from "../../actions/posts";
import ThreadForm from "../Form/ThreadForm";
import Post from "../Posts/Post/Post";


import Thread from './Thread/Thread';
import { Button } from "@material-ui/core";

const Origin = () => {
    const dispatch = useDispatch();

    const postID = useParams().post_id;

    const posts = useSelector((state) => state.posts);

    var filter = {
        _id: postID,
        category: ''
    }

    useEffect(() => {
        console.log("UseEffect in  origin of Threads.js");
        dispatch(filterPostsById(filter));
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
    //const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const postID = useParams().post_id;

    const threads = useSelector((state) => state.threads);
    var filter = {
        _id: postID,
        category: ''
    }
    
    useEffect(() => {
        console.log("UseEffect in Threads.js");
        dispatch(getThreads(filter));
    }, []);
    
    return (
        <>  
            <p></p>
            <Button href="/posts" class="btn btn-outline-secondary">Go back</Button>
            <Origin/>
            <ThreadForm post = {postID}/>
            <h1>COMMENT</h1>
            {threads.map((thread, i) =>
                <Thread thread = {thread} key={i}/>
            )}
        </>
        
    );
}

export default Threads;