import './fetch.css'
import React, { useState } from 'react'

//Thread Example
//Thread#|Title|Date|Content|Token|
//PostID|USERID
//COMMENT STRING, THREAD_REPLIRES
//LIKES: number

function App(){
    return 
    (
    <div onChangeMode>
        {/* <img class="main_image" src= {logo} alt="No Image"/> */}
        <a href="/create" onClick={event=>{
            event.preventDefault();
        }}>Create</a>
    </div>
    );
}



export default App;