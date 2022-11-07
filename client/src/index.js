import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './layout.js'
import Forum from './forum'
import Thread from './thread'
import Board from './board'
import Footer from './footer'
import Create from './create'

const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <Board/>
    <Thread/>
    <Forum/>
    <Create/>
    <Footer/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
