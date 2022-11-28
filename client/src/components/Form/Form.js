

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../api";
const Form = () => {
    const [postData, setPostData] = useState({
        userID: '', title: '', description: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const clear = () => {

    }

    return (
        <>
            <h1>FORM</h1>
            <form action="/create" method="post">
                <textarea name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>
                <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input>

                <input type="submit"></input>
            </form>
        </>
        
        
    );
}

export default Form;