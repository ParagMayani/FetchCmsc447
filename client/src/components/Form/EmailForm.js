
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/users";

import { TextField, Button, Paper } from '@material-ui/core';


const EmailForm = () => {
    const [postData, setPostData] = useState({
        email: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch(verifyEmail(postData));
        //console.log(postData);
    }

    const clear = () => {
    }
    return (
        <>
        <h1>Email Verification</h1>
        <Paper>
            <form autoComplete = "off" onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    variant="outlined"
                    label="example@umbc.edu"
                    fullWidth 
                    value={postData.email}
                    onChange={(e) => setPostData({ ...postData, email: e.target.value })}
                />

                {/* <Button variant="container" color="primary" size="large" type="submit" fullWidth>Login</Button> */}
                <Button href="/sign_up" variant="contained" color="secondary" size="small" fullWidth type="submit">Verify</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default EmailForm;