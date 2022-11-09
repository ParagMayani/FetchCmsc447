import {React, Component} from 'react';

class userForm extends React.Component{
    constructor(props){
        super(props);
        this.state= {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleChange(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

}