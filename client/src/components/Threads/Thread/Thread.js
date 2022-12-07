
import React from "react";
import { useDispatch } from "react-redux";
import { dislikeThread, likeThread } from "../../../api";

const Thread = ({thread, setCurrentId}) => {
    console.log("THREAD called");
    const dispatch = useDispatch();
    var today = new Date();
    //const date = today.now() - post.created_on;
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
                        <div className="dropdown show">
                        <a className="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                        </div>
                    </div>
                    <div className="feed-image p-2 px-3"><span>{thread.description}</span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><button onClick={() => dispatch(likeThread(thread))}><i className="fa fa-arrow-up">{thread.likes}</i></button><button onClick ={() => dispatch(dislikeThread(thread))}><i className="fa fa-arrow-down">{thread.dislikes}</i></button></div>
                </div>
            </div>
        </>
    );
}

export default Thread;