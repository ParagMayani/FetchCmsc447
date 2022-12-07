
import React from "react";
import { useDispatch } from "react-redux";
import { dislikeThread, likeThread } from "../../../actions/threads";
import Dropdown from 'react-bootstrap/Dropdown';

const Thread = ({thread, setCurrentId}) => {
    const dispatch = useDispatch();
    var today = new Date();
    var created = new Date(thread.created_on);
    var seconds = (today - created )/ 1000;
    var minutes = (seconds)/ 60;
    var hours = (minutes)/ 60;
    var days = (hours)/ 24;
    seconds = Math.round(seconds);
    var Timeline = seconds + " seconds ago";

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
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Edit</Dropdown.Item>
                                <Dropdown.Item href="/">Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="feed-image p-2 px-3"><span>{thread.description}</span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><button onClick={() => dispatch(likeThread(thread))}><i className="fa fa-arrow-up">{thread.likes}</i></button><button onClick ={() => dispatch(dislikeThread(thread))}><i className="fa fa-arrow-down">{thread.dislikes}</i></button></div>
                </div>
            </div>
        </>
    );
}

export default Thread;