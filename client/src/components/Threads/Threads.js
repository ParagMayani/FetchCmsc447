

import React from "react";

import { useSelector } from "react-redux";
import ThreadForm from "../Form/ThreadForm";


import Thread from './Thread/Thread';
const Threads = ({post_id, setCurrentId}) => {
    const threads = useSelector((state) => state.threads);

    return (
        <>
            <ThreadForm post_id = {post_id}/>
            <h1>THREADS</h1>
            {threads.map((thread) =>
                <Thread thread = {thread} key={thread._id} setCurrentId={setCurrentId}/> 
            )}
            
            
        </>
        
    );
}

export default Threads;