
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";
import md5 from 'md5-hash'

import { TextField, Button, Typography, Paper } from '@material-ui/core';


const UserForm = () => {
    const [postData, setPostData] = useState({
        firstname: '', lastname: '', age: '', major: '', study_year: '', username: '', password: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        var hashed=md5(postData.password);
        setPostData({ ...postData, password: '1'});
        console.log(postData.password);
        console.log(md5(postData.password));
        
        dispatch(createUser(postData));
        console.log(postData);
    }

    const clear = () => {
        setPostData({firstname: '', lastname: '', age: '', major: '', study_year: '', username: '', password: ''});
    }
    return (
        <>
        <Paper>
            <form autoComplete = "off" onSubmit={handleSubmit}>
                <TextField
                    name="firstname"
                    variant="outlined"
                    label="First Name"
                    fullWidth
                    value={postData.firstname}
                    onChange={(e) => setPostData({ ...postData, firstname: e.target.value })}
                />

                <TextField
                    name="lastname"
                    variant="outlined"
                    label="Last Name"
                    fullWidth 
                    value={postData.lastname}
                    onChange={(e) => setPostData({ ...postData, lastname: e.target.value })}
                />

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

                <Button variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default UserForm;