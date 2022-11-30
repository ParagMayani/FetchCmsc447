
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
//import {}} from './components/thread';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';

const App = () => {
    const dispatch = useDispatch();
    //const [data, setData] = React.useState(null);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    return(
        <>
        <h1>APP</h1>
        <Form/>
        <Posts/>
        
        </>
        
        
    );
}

export  default App;

