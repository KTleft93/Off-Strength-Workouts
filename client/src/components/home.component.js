import React, { Component } from "react";
import Chart from './chart.component';

import UserService from "../services/user.service";

import "../App.css";

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {


    return (

<div className="container">
 <div class="bgimage">
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        
    <div class="banner-text">
    <h3>Welcome!</h3>
        <h5>Sign up today to become a member and get FREE access</h5>
        <p><a href="/register" class="btn btn-primary btn-large">Sign Up</a></p>
     </div>
      </div>
    </div>
  </div>
</div>

<div id="child">
<div class="card text-white bg-secondary mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img style={{width: "400px", height: "215px"}} src='images/cardpic1.gif'/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Get All Your Exercises Here</h5>
        <p class="card-text">At Off Strength Workouts I've assembled unique and effective exercises for my members to take part in. The site features exercises for any fitness level for your entire body. Access to Off Strength Workouts is free, just sign up for access. With that in mind, lets get fit!</p>
        <p class="card-text"><small class="text-muted">Kean Tyler CPT</small></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className="child-2">
<h5>Hundreds Of Unique and Effective Exercises For You</h5>

<div className="child-3">


<div className="grid-container-1">

<div className="grid-item grid-item 1">

<p style={{color: "white"}}>Chest<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>


<div className="grid-item grid-item 2">

<p style={{color: "white"}}>Back<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>

</div>

<div className="grid-item grid-item 3">

<p style={{color: "white"}}>Shoulders<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>

<div className="grid-item grid-item 4">

<p style={{color: "white"}}>Core<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>

<div className="grid-item grid-item 5">

<p style={{color: "white"}}>Legs<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>

<div className="grid-item grid-item 6">

<p style={{color: "white"}}>Stretches<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>

<div className="grid-item grid-item 6">

<p style={{color: "white"}}>Warm Ups<svg className="check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></p>
</div>

</div>
</div>
</div>
     

<Chart/>

</div>
    );
  }
}
