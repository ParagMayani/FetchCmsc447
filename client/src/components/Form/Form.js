

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import './formStyle.css';
const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        description: '', category: 'General', created_by: JSON.parse(localStorage.getItem("user"))._id
    });

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
        <span></span>        
            <div >
                <form id="postForm" autoComplete="on" onSubmit={handleSubmit} method="POST">
                
                    <textarea className="postForm-textarea" name="description" onChange={(e) => setPostData({ ...postData, description: e.target.value})}></textarea>

                    {/* <CreatableSelect isClearable options={options} name="category" onChange={(e) => setPostData({ ...postData, category: e.target.value})} /> */}
                    {/* <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input> */}
                    <Button variant="secondary" className="postForm-button" type="Submit">
                        Submit
                    </Button>
                    <DropdownButton className="postForm-button"
                        variant="outline-secondary"
                        title={postData.category}
                        id="input-group-dropdown-4"
                        align="end"
                        >
                        <Dropdown.Item onClick={(e) => setPostData({...postData, category: 'Academia'})}>Academia</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => setPostData({...postData, category: 'Music'})}>Music</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => setPostData({...postData, category: 'Hobby'})}>Hobby</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => setPostData({...postData, category: 'Industry'})}>Industry</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={(e) => setPostData({...postData, category: 'General'})}>General</Dropdown.Item>
                    </DropdownButton>
                    
                </form>
            </div>
            
        </>
        
        
    );
}

export default Form;