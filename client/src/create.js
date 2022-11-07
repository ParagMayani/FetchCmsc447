import { useState } from 'react';
import './fetch.css';
import {useNavigate } from 'react-router';

//ID|TITLE|DESCRIPTION
//LIKES
//CATEGORY|ACADEMIC, DESIRED_JOB,HOBBIES, MUSIC
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
            <form>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="article" placeholder="Article"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </section>
    );
}



export default Create;