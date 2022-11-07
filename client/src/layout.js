import './fetch.css'
import logo from './images/UMBC-retriever-social-media.png'
import React, { useState } from 'react'

//Thread Example
//Thread#|Title|Date|Content|Token|

function App(){
    const topics = [
        {id: 1, title: 'General', content:''},
        {id: 2, title: 'Career', content:''},
        {id: 3, title: 'Academic', content:''},
        {id: 4, title: 'Hobby', content:''}
    ]
    return <div onChangeMode>
        {/* <img class="main_image" src= {logo} alt="No Image"/> */}
        <a href="/create" onClick={event=>{
            event.preventDefault();
        }}>Create</a>
    </div>
}



export default App;