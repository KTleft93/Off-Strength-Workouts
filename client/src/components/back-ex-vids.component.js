import React, { Component } from "react";
import UserService from "../services/user.service";


export default class BackExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/1A cable row.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">1 Arm Cable Row</h5>
    <p class="card-text">Bend your knees, keep your shoulders back, and core tight.
    Full extension and retraction of the cable.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Back extensions.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Back Extension Hold & Reps</h5>
    <p class="card-text">Perform on a back extension machine and hold yourself up in a neutral spine position. After 10 seconds perform a repetition by keeping your shoulders
    back and spine neutral, bend down at the waist as far as you can then extend up from the waist into a neutral spine position.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Back Hold.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Back Extension Hold</h5>
    <p class="card-text">Perform on a back extension machine and hold yourself up in a neutral spine position.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Band pulldown.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Band Pulldown</h5>
    <p class="card-text">Anchor a band to at least stomach level. Stand up straight and straight arms and without moving your body at all pull the band down past your hips and slowly let it back up.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Barbell row grips.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Barbell Row Underhand & Overhand Grip</h5>
    <p class="card-text">Bend down at the waist keep a neutral spine by keeping your shoulder back to pull your chest up. </p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Pendlay Row.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Pendlay Row</h5>
    <p class="card-text">Bend down at the waist and keep a neutral spine by keeping your shoulder back to pull your chest up. Starting from the ground pull the barbell up to your chest and lower it back down with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Renegade Row.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Renegade Row</h5>
    <p class="card-text">Keeping a tight core, start in the plank position with 1 dumbell in each hand. Perform a 1 arm plank while pulling the opposite dumbell up to your ribcage then lower it back down with control and alternate.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/RR Press.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Renegade Row Press</h5>
    <p class="card-text">Keeping a tight core, start in the plank position with 1 dumbell in each hand. Perform a 1 arm plank while pulling the opposite dumbell up to your ribcage then shouder press it up with control and lower it with control. Alternate.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Seated Row.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Seated row</h5>
    <p class="card-text">Peform on a row machine. Keep a neutral spine. Full extension and retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Superman Hold-2.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Superman Hold</h5>
    <p class="card-text">Lying on your stomach, extend your arms and legs fully. Raise your chest and thighs off the ground while keeping your chin tucked. </p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Superman raises.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Superman Raises</h5>
    <p class="card-text">Lying on your stomach, extend your arms and legs fully. Raise your chest and thighs off the ground while keeping your chin tucked. Lock your glutes when you raise up.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Superman W.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Superman W</h5>
    <p class="card-text">Lying on your stomach, extend your arms and legs fully. Raise your chest and thighs off the ground while keeping your chin tucked. Retract your arms back in a W formation and hold.</p>
  </div>
</div>

</div>

	);

}

}