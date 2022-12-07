
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import UserForm from './components/Form/UserForm';
import Threads from './components/Threads/Threads';
import ThreadForm from './components/Form/ThreadForm';
import LoginForm from './components/Form/LoginForm';
import Post from './components/Posts/Post/Post';


const App = () => {
    // const [IsLogin, IsLiked] = [];
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<LoginForm/>}/>
                <Route path ="/sign_up" element={<UserForm/>}/>
                <Route path ="/log_in" element={<LoginForm/>}/>
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
        
        </>
        
        
    );
}

export  default App;

