
import React, { useState,  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import UserForm from './components/Form/UserForm';
import Threads from './components/Threads/Threads';


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
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Form currentId = {currentId} setCurrentID={setCurrentId}/>}>
                </Route>
                <Route path ="/sign_in" element={<UserForm currentId = {currentId} setCurrentID={setCurrentId}/>}/>
                <Route path ="/posts" element={<Posts setCurrentID={setCurrentId}/>}/>
                <Route path ="/threads/:post_id" element={<Threads setCurrentID={setCurrentId}/>}/>
            </Routes>
        </BrowserRouter>
        
        {/* <UserForm/>
        <Form currentId = {currentId} setCurrentID={setCurrentId}/>
        <Posts setCurrentID={setCurrentId}/> */}
        
        {/* <UserForm/> */}
        
        </>
        
        
    );
}

export  default App;

