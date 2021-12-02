import React, { Component } from "react";
import { Redirect } from 'react-router';
import axios from 'axios';


	const required = value => {
		  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
	}
};

const password = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const password_confirm = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};


export default class ResetPassword extends Component {

	state = {};

	handleSubmit = e => {
		e.preventDefault();

		const data = { 

			resetLink: this.props.match.params.id,
			newPass: this.password,
			
		}

		axios.put('http://localhost:8080/api/auth/reset',data)

		.then(res => {
				console.log(res); 
				this.setState({
					reset: true
				});
			}

			)
		.catch(err => {
				console.log();
				console.log();
				console.log(data);
			} 

		)
	};



	render(){

		if(this.state.reset){

			return <Redirect to={'/login'}/>
		}
		

		return(

	<form onSubmit={this.handleSubmit}>
    	<h3>Reset Password Form</h3>

    	<div className="form-group">
        <label>Password</label>
           <input type="password" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value}/>
        </div>


    	<div className="form-group">
        <label>Confirm Password</label>
           <input type="password" className="form-control" placeholder="Password" onChange={e => this.password_confirm = e.target.value}/>
        </div>

            <button className="btn btn-primary btn-block">Submit</button>
        </form>
    

			
			)
		
	    }

	    
	    }

	
