import React, { Component } from "react";
import UserService from "../services/user.service";


export default class StretchExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Hip and quad stretch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Hip & Quadricep Stretch</h5>
    <p class="card-text">Take a lunge stance and elevate your back leg. Lean back into the stretch.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Hamstring stretch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Hamstring Stretch</h5>
    <p class="card-text">Starting while lying on your back grab a towel or resistance and place it under one foot. Grab the sides and pull your leg straight up.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Deep hip & quad stretch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Hip & Quadricep Stretch 2</h5>
    <p class="card-text">Starting sitting on the ground take a 90/90 position by bending one leg in front and the other leg behind you. Lean back into the stretch and breathe.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/3 Warm Up Stretches.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">3 Warm Up Stretches</h5>
    <p class="card-text">Follow along and perform these warm up stretches.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Chest opener stretch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Chest Opener</h5>
    <p class="card-text">Perform while lying on a foam roll or a similar surface. Lean back while the object is placed under you mid back.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Low back stretch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Low Back Stretch</h5>
    <p class="card-text">Starting lying on your back, raise both of your knees up and drop them to the left and right side. Use your arm to hold your legs.</p>
  </div>
</div>

</div>

	);

}

}