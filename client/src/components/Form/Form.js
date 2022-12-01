

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
const Form = () => {
    const [postData, setPostData] = useState({
        description: ''
    });

    const options = [
        { value: 'academia', label: 'academia' },
        { value: 'hobby', label: 'hobby' },
        { value: 'industry', label: 'industry' },
        { value: 'music', label: 'music'},
      ]

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
        dispatch(createPost(postData));
    }
    
    return (
        <>
            <h1>FORM</h1>
            <form autoComplete="on" onSubmit={handleSubmit} method="POST">
                <textarea name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>
                {/* <CreatableSelect isClearable options={options} name="category" onChange={(e) => setPostData({ ...postData, category: e.target.value})} /> */}
                {/* <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input> */}
                
                <input type="submit" value="Submit"></input>
            </form>
        </>
        
        
    );
}

export default Form;