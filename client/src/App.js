
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style.css';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import UserForm from './components/Form/UserForm';
import Threads from './components/Threads/Threads';
import LoginForm from './components/Form/LoginForm';
import EmailForm from './components/Form/EmailForm';


const App = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    function main(user){
        if(user == null){
            return <LoginForm/>;
        } else {
            return <><Form/><Posts/></>;
        }
    }
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={
                    <>
                        <p></p>
                        {main(user)}
                    </>
                
                }/>
                <Route path ="/sign_up" element={<UserForm/>}/>
                <Route path ="/log_in" element={<LoginForm/>}/>
                <Route path ="/verify_email" element={<EmailForm/>}/>
                <Route path ="/posts" element={
                    <>
                        <p></p>
                        <Form/>
                        <Posts/>
                    </>
                }/>
                <Route path ="/threads/:post_id" element={
                <>
                    <Threads/>
                </>}/>
                <Route path ="/posts/:category" element={
                    <>
                        <p></p>
                        <Form/>
                        <Posts/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
        
        </>
        
        
    );
}

export  default App;

