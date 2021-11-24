import React, { Component } from "react";
import axios from 'axios';


export default class ForgotPassword extends Component {

	constructor(){
		super();

		this.state = {
			email: ''
		};
	}

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	sendEmail = e => {
		e.preventDefault();
		 
			axios.put('http://localhost:8080/api/auth/forgot', {
				email: this.state.email,
 		headers: {
            'Content-Type': 'application/json'
        }
			})
			.then(response => {
				console.log(response);

			})
			.catch(error => {
				console.log(error.response.data);
			})
		
	};




	render(){

		const {email} = this.state;

		return(

			<>
			
    <title>Forget Password</title>



    <div>
    	<h3>Reset Password Form</h3>
        <form onSubmit={this.sendEmail}>
            <label for="email"></label>
            <input type="email" onChange={this.handleChange('email')} name="email" id="email" required/>
            <input type="submit" name="submit" id="forgotPasswordClickEvt" value="Send"/>
        </form>
    </div>

			</>
			)
		
	    }

	    
	    }

	
