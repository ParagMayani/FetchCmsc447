
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/users";

import { TextField, Button, Paper } from '@material-ui/core';
import pkg from 'blueimp-md5';
import { useNavigate } from "react-router-dom";
const md5 = pkg;

function refreshPage() {
    window.location.reload(false);
}

const LoginForm = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState()
    const [loginData, seLogintData] = useState({
       username: '', password: ''
    })
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(loginData));
        if(localStorage.getItem("user") !== null){
            const data = JSON.parse(localStorage.getItem("user"));
            if(data.username === loginData.username){
                if(data.password === md5(loginData.password)){
                    navigate('/posts');
                } else {
                    alert("Your Login is failed check username or password");
                }
            } else {
                alert("Your Login is failed check username or password");
            }
        }
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

                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
                <Button href="/sign_up" variant="contained" color="secondary" size="small" fullWidth>Sign Up</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default LoginForm;