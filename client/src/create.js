import React, { useState } from 'react';
import './fetch.css';
import {useNavigate } from 'react-router';


//ID|TITLE|DESCRIPTION
//LIKES
//CATEGORY|ACADEMIC, DESIRED_JOB,HOBBIES, MUSIC

class threadForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
    this.handleChange = this.handleChange(this);
    this.handleSubmit = this.handleSubmit(this);
    }
    handleChange(event){
        this.setState({value: event.target.value});
    }
    handleSubmit(event){
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }
}


function Create(props){
    const [form, setForm] = useState({
        title: "",
        article: "",
    });

    const navigate = useNavigate();

    function updateForm(value){
        return setForm((prev) => {
            return { ...prev, ...value };
          });
    }

    async function onSubmit(e){
        e.preventDefault();
        const newPost = {...form};
    
        await fetch("https://localhost:3000/thread/add", {method: "POST", headers: {"Content-Type": "application/json",}, body: JSON.stringify(newPost),}).catch(error => {
            window.alert(error);
            return;
        })
        setForm({title: "", article: ""});
        navigate("/");
    }

    return (
        <section class='create_thread'>
            <p>Post Thread</p>
            <form action='./'>
                <p><input class='create_thread_title' type="text" name="title" placeholder="Title"/></p>
                <p><textarea class='create_thread_description' name="description" placeholder="Description"></textarea></p>
                <p class='create_thread_submit'><input  type="submit" value="Post"></input></p>
            </form>
        </section>
    );
}



export default Create;