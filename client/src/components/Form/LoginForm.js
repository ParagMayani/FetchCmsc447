
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/users";

import { TextField, Button, Paper } from '@material-ui/core';


const LoginForm = () => {
    const [loginData, seLogintData] = useState({
       username: '', password: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(loginData));
        console.log(loginData);
    }

    const clear = () => {
        seLogintData({username: '', password: ''});
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
                    value={loginData.user_name}
                    onChange={(e) => seLogintData({ ...loginData, username: e.target.value })}
                />

                <TextField
                    name="password"
                    variant="outlined"
                    label="Password"
                    fullWidth 
                    value={loginData.password}
                    type="password"
                    onChange={(e) => seLogintData({ ...loginData, password: e.target.value })}
                />

                <Button variant="container" color="primary" size="large" type="submit" fullWidth>Login</Button>
                <Button href="/sign_up" variant="contained" color="secondary" size="small" fullWidth>Sign Up</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default LoginForm;