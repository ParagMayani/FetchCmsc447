
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deletePost, likePost, dislikePost, updatePost } from '../../../actions/posts';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles.css';
import Button from "react-bootstrap/esm/Button";




const Post = ({post, user}) => {
    const [postData, setPostData] = useState({
        postData: post
    });
    console.log(postData);
    const dispatch = useDispatch();
    const userID = JSON.parse(localStorage.getItem("user"))._id;
    const data = {post, userID};
    //var liked = false;
    //var disliked = false;
    var today = new Date();
    var created = new Date(post.created_on);
    var seconds = (today - created )/ 1000;
    var minutes = (seconds)/ 60;
    var hours = (minutes)/ 60;
    var days = (hours)/ 24;
    seconds = Math.round(seconds);
    var Timeline = seconds + " seconds ago";

    var thread_url = "/threads/" + post._id;
    var category_url = "/posts/" + post.category;

    function editPost(){
        document.getElementById('editForm').id = 'postForm';
        document.getElementById('postForm').id = 'edifForm';
    }

    if(seconds >= 60){
        Timeline = Math.round(minutes) + " minutes ago";
    }

    if(minutes >= 60){
        Timeline = Math.round(hours) + " hours ago";
    }

    if(hours >= 24){
        Timeline = Math.round(days) + " days ago";
    }
    return (
        <>
            <div className="bg-white border mt-2">
                <div>
                    <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                        <div className="d-flex flex-row align-items-center feed-text px-2">
                            <div className="d-flex flex-column flex-wrap ml-2"><span className="text-black-50 time">{Timeline}</span></div>
                            <div className="feed-image p-2 px-3"><a href={category_url} className="category_text">#{post.category}</a></div>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href={thread_url}>Comments</Dropdown.Item>
                                <Dropdown.Item onClick={()=> editPost()}>Edit</Dropdown.Item>
                                <Dropdown.Item href="/posts" onClick={() => dispatch(deletePost(data))}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="feed-image p-2 px-3"><span>{post.description}</span></div>
                    <form id="editForm">
                        <textarea className="postForm-textarea" name="description" value={post.description} onChange={(e) => setPostData({...postData, description: e.target.value})}>
                        
                        </textarea>
                        <Button variant="secondary" className="editForm-button" type="Submit" onClick={() => dispatch(updatePost(postData))}>
                            Submit
                        </Button>
                        
                        
                    </form>
                    <div className="d-flex justify-content-end socials p-2 py-3"><button onClick={()=> dispatch(likePost(data))}><i className="fa fa-arrow-up">{post.likes}</i></button><button onClick ={() => dispatch(dislikePost(data))}><i className="fa fa-arrow-down">{post.dislikes}</i></button></div>
                </div>
            </div>
        </>
    );
}

export default Post;