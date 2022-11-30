

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    const [postData, setPostData] = useState({
        userID: '', description: '', category: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    
    return (
        <>
            <h1>FORM</h1>
            <form onSubmit={handleSubmit} method="post">
                <textarea name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>
                <select value="category" onChange={(e) => setPostData({ ...postData, description: e.target.value})} >
                    <option value="academia">Academia</option>
                    <option value="industry">Industry</option>
                    <option value="hobbies">Hobby</option>
                    <option value="music">music</option>
                </select>
                <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input>

                <input type="submit" value="Submit"></input>
            </form>
        </>
        
        
    );
}

export default Form;