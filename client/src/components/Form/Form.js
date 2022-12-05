

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './formStyle.css';
const Form = ({currentId, setCurrentId}) => {
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

        if(currentId){
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }
        
        
    }
    
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <>
            <h1>FORM</h1>
            <div >
                <form id="postForm" autoComplete="on" onSubmit={handleSubmit} method="POST">
                
                    <textarea className="postForm-textarea" name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>

                    {/* <CreatableSelect isClearable options={options} name="category" onChange={(e) => setPostData({ ...postData, category: e.target.value})} /> */}
                    {/* <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input> */}
                    <input className="postForm-button" onClick={refreshPage} type="submit" value="Submit"></input>
                    
                </form>
            </div>
            
        </>
        
        
    );
}

export default Form;