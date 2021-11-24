import React, { Component } from "react";
import UserService from "../services/user.service";


export default class BicepExVids extends Component {


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
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Alternating curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Alternating Curls</h5>
    <p class="card-text">Alternate full curls. Full extension and contraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Arm twisters.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Forearm Twisters</h5>
    <p class="card-text">Perform while keeping the dumbbells at ribcage level. Rotate your wrists with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Concentration curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Concentration Curls</h5>
    <p class="card-text">Perform seated with your arm inside of your leg. Lower your chest and curl the dumbbell up to your chest.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Cross body curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Cross Body Curls</h5>
    <p class="card-text">Curl the weight across your body to the opposite side and alternate.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Full curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Full Curls</h5>
    <p class="card-text">Curl the weights with arms down by your side. Full extension and contraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Half curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Half Curls</h5>
    <p class="card-text">Perform curls contracting your bicep fully but extending down only halfway down.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Hammer curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Hammer Curls</h5>
    <p class="card-text">Perform curls with palms facing each other. Full extension and contraction.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Negative curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Negative Curls</h5>
    <p class="card-text">Curl the weight up quickly but lower it back down slowly.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Reverse curls.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Reverse Curls</h5>
    <p class="card-text">Perform with your palms facing the floor. Full extension and contraction.</p>
  </div>
</div>
</div>

	);

}

}