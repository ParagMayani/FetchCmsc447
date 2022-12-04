
import React, { useState,  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import UserForm from './components/Form/UserForm';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
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
        <Form currentId = {currentId} setCurrentID={setCurrentId}/>
        <Posts setCurrentID={setCurrentId}/>
        
        </>
        
        
    );
}

export  default App;

