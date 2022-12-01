
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions/posts";


const UserForm = () => {
    const [postData, setPostData] = useState({
        firstName: '', lastName: '', age: '', major: '', studyYear: ''
    })


    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(postData);
        dispatch(createU(postData));
    }
    return (
        <>
        <Paper className = {classes.paper}>
            <form autoComplete = "off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
               
                <TextField
                    name="firstName"
                    variant="outlined"
                    label="FirstName"
                    fullWidth
                    value={postData.firstName}
                    onChange={(e) => setPostData({ ... postData, firstName: e.target.value })}
                />

                <TextField
                    name="lastName"
                    variant="outlined"
                    label="LastName"
                    fullWidth 
                    value={postData.lastName}
                    onChange={(e) => setPostData({ ... postData, lastName: e.target.value })}
                />

                <TextField
                    name="age"
                    variant="outlined"
                    label="Age"
                    fullWidth 
                    value={postData.age}
                    onChange={(e) => setPostData({ ... postData, age: e.target.value })}
                />

                <TextField
                    name="major"
                    variant="outlined"
                    label="Major"
                    fullWidth 
                    value={postData.major}
                    onChange={(e) => setPostData({ ... postData, major: e.target.value })}
                />

                <TextField
                    name="studyYear"
                    variant="outlined"
                    label="Study Year"
                    fullWidth 
                    value={postData.firstName}
                    onChange={(e) => setPostData({ ... postData, studyYear: e.target.value })}
                />

                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                
            </form>
        </Paper>
        </>
    )

}







export default UserForm;