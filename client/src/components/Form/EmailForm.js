
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../actions/users";

import { TextField, Button, Paper } from '@material-ui/core';


const EmailForm = () => {
    const [verifyData, setVerifyData] = useState({
        email: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        setVerifyData(dispatch(verifyEmail(verifyData)));
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
                    value={verifyData.email}
                    onChange={(e) => setVerifyData({ ...verifyData, email: e.target.value })}
                />

                {/* <Button variant="container" color="primary" size="large" type="submit" fullWidth>Login</Button> */}
                <Button href="/sign_up" variant="contained" color="secondary" size="small" fullWidth type="submit">Verify</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default EmailForm;