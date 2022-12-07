
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";

import { TextField, Button, Typography, Paper } from '@material-ui/core';


const LoginForm = () => {
    const [postData, setPostData] = useState({
        firstname: '', lastname: '', age: '', major: '', study_year: '', username: '', password: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(postData));
        console.log(postData);
    }

    const clear = () => {
        setPostData({firstname: '', lastname: '', age: '', major: '', study_year: '', username: '', password: ''});
    }
    return (
        <>
        <h1>Log in</h1>
        <Paper>
            <form autoComplete = "off" onSubmit={handleSubmit}>
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
                    onChange={(e) => setPostData({ ...postData, password: e.target.value })}
                />

                <Button variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default LoginForm;