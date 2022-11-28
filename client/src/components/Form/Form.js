

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    const [postData, setPostData] = useState({
        userID: '', description: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }

    const handleChange = (e) => {
        e.preventDefault();
    }

    const clear = () => {

    }

    return (
        <>
            <h1>FORM</h1>
            <form onSubmit={handleSubmit} method="post">
                <textarea name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>
                <select value="category">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input>

                <input type="submit" value="Submit"></input>
            </form>
        </>
        
        
    );
}

export default Form;