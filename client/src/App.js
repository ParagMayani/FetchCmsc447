
import React, { useState,  useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import UserForm from './components/Form/UserForm';
import Threads from './components/Threads/Threads';
import ThreadForm from './components/Form/ThreadForm';
import Post from './components/Posts/Post/Post';


const App = () => {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path ="/"/>
                <Route path ="/sign_up" element={<UserForm/>}/>
                <Route path ="/log_in" element={<UserForm/>}/>
                <Route path ="/posts" element={
                    <>
                        <Form/>
                        <Posts/>
                    </>
                }/>
                <Route path ="/threads/:post_id" element={
                <>
                    <Threads/>
                </>}/>
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

