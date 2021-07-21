import React, { Component } from "react";
import UserService from "../services/user.service";
import './chest-ex-vids.css';

export default class ChestExVids extends Component {


  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }



  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

render(){
 
return(

<div className="grid-container">

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Alternating incline press.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Alternating Incline Chest Press</h5>
    <p class="card-text">Pull shoulders and chest back, 
    puff your chest out and raise the dumbells. Full extension and full retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/1A DB Chest Press.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">1 Arm Chest Press</h5>
    <p class="card-text">Pull shoulders and chest back, 
    puff your chest out and raise the dumbells. Full extension and full retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Decline Push Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Decline Push Up</h5>
    <p class="card-text">Feet elevated, keep a tight core and pull your shoulders back. 
    Full extension and full retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Explosive Bosu Push Ups.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Explosive Bosu Ball Push Up</h5>
    <p class="card-text">Keep a tight core. On extension of the push up retract the bosu ball 
    as quickly as you can and land with your arms bent.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Incline Push Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Incline Push Up</h5>
    <p class="card-text">Elevate your hands and keep a tight core. Full extension and retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Modified 3D push up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">3D Push Up On Knees</h5>
    <p class="card-text">Perform push ups on knees in a clockwise and counter clockwise manner</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Push Up Stability Ball.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Stability Push Up</h5>
    <p class="card-text">Elevate your feet your feet with a medicine ball and keep a tight core. Use a solid
    medicine ball and alternate push ups with the ball in one hand</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Push up tap & raise.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Push Up Shoulder Tap & Raise</h5>
    <p class="card-text">Keep a tight core and perform a push up with full extension and retraction. On 
    full extenstion lift one arm tap the opposite shoulder then raise that arm to shoulder height.</p>
  </div>
</div>

</div>

	);

}

}