
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";
import md5 from 'md5-hash';

import { TextField, Button, Paper } from '@material-ui/core';
import { Navigate } from "react-router-dom";


const UserForm = () => {
    const [postData, setPostData] = useState({
        age: '', major: '', study_year: '', username: '', password: '', likes: [], dislikes: []
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createUser(postData));
        
    }

    const clear = () => {
        setPostData({age: '', major: '', study_year: '', username: '', password: ''});
    }
    return (
        <>
        <Paper>
            <form autoComplete = "off" onSubmit={handleSubmit}>
                <TextField
                    name="age"
                    variant="outlined"
                    label="Age"
                    fullWidth 
                    value={postData.age}
                    onChange={(e) => setPostData({ ...postData, age: e.target.value })}
                />

                <TextField
                    name="major"
                    variant="outlined"
                    label="Major"
                    fullWidth 
                    value={postData.major}
                    onChange={(e) => setPostData({ ...postData, major: e.target.value })}
                />

                <TextField
                    name="study_year"
                    variant="outlined"
                    label="Study Year"
                    fullWidth 
                    value={postData.study_year}
                    onChange={(e) => setPostData({ ...postData, study_year: e.target.value })}
                />

                <TextField
                    name="username"
                    variant="outlined"
                    label="User Name"
                    fullWidth 
                    value={postData.user_name}
                    onChange={(e) => setPostData({ ...postData, username: e.target.value })}
                />

                <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    fullWidth 
                    value={postData.password}
                    type="password"
                    onChange={(e) => setPostData({ ...postData, password: e.target.value })}
                />

                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default UserForm;