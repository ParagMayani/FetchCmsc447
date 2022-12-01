
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import UserForm from './components/Form/UserForm';

const App = () => {
    const dispatch = useDispatch();
    const [data, setData] = React.useState([]);

    useEffect(() => {
        console.log("UseEffect in APP.js");
        setData(dispatch(getPosts()));
    }, [dispatch]);

    
    return(
        <>
        <h1>APP</h1>
        {/* <UserForm/> */}
        <Form/>
        <Posts/>
        
        </>
        
        
    );
}

export  default App;

