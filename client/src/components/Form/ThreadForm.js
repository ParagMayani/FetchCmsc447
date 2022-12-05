

import React, {useState} from "react";
import { useDispatch } from "react-redux";
import './formStyle.css';
import { createThread, updateThread } from "../../api";
const ThreadForm = ({post_id, currentId, setCurrentId}) => {
    const [threadData, setThreadData] = useState({
        description: '',
        post_id: post_id
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
        console.log(threadData);

        if(currentId){
            dispatch(updateThread(currentId, threadData));
        } else {
            dispatch(createThread(threadData));
        }
        
        
    }
    
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <>
            <h1>THREAD FORM</h1>
            <div >
                <form id="threadForm" autoComplete="on" onSubmit={handleSubmit} method="POST">
                    <textarea className="threadForm-textarea" name="description" onChange={(e) => setThreadData({ ...threadData, description: e.target.value})}></textarea>

                    {/* <CreatableSelect isClearable options={options} name="category" onChange={(e) => setPostData({ ...postData, category: e.target.value})} /> */}
                    {/* <input type="hidden" name="userID" onChange={(e) => setPostData({ ...postData, userID: e.target.value})}></input> */}
                    <input className="threadForm-button" onClick={refreshPage} type="submit" value="Submit"></input>
                    
                </form>
            </div>
            
        </>
        
        
    );
}

export default ThreadForm;