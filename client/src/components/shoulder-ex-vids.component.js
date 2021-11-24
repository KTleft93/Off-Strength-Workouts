import React, { Component } from "react";
import UserService from "../services/user.service";


export default class ShoulderExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/1A Shoulder Press.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">1 Arm Shoulder Press</h5>
    <p class="card-text">Perform seated while keeping a tight core. Press the dumbbell up and lower with control. Full extension and retraction.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Band up row.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Band Up Row</h5>
    <p class="card-text">Anchor a resistance band at least at stomach level. While keeping your arms straight pull the band back by your ears and lower with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Banded shoulder shuffle.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Banded Shoulder Shuffle</h5>
    <p class="card-text">Peform with a resistance band around your wrist. Get in plank position and shuffle from side to side using your hands and feet. Keep your hands at least shoulder width at all times. </p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Barbell military press.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Barbell Military Press</h5>
    <p class="card-text">Perform with a barbell. While standing and with a tight core press the barbell up. Get your arms by your ears and lower the barbell back to the top of your chest with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Front raises- standing.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Front Raise</h5>
    <p class="card-text">Raise two dumbbells to shoulder height and lower with control. </p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Front side raise.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Front Side Raise</h5>
    <p class="card-text">Raise one dumbbell to shoulder height with your arm fully extended to your front. Raise the other dumbbell to your side. Raise and lower with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/KettleBell Circles.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Around the world</h5>
    <p class="card-text">Perform with a kettlebell or weight that your could hold in your hands. Rotate the kettlebell clockwise and counter clockwise.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/KettleBell Snatch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Kettlebell Snatch</h5>
    <p class="card-text">Perform with a kettlebell or weight that your could hold in your hand. Start with knees bent in position to take the weight up from the ground. Hold the weight in a reverse grip where your thumb is pointing behind you and then quickly pull the weight up using momentum from your legs and hips while twisting your thumb back to its natural position.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video style={{width: "20rem"}} controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Kneeling Shoulder Press_Push Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Shoulder Press & Push Up Complex</h5>
    <p class="card-text">Start in a kneeling position to perform the shoulder press. Directly performing the 1 arm kneeling shoulder press, do 1 push up.</p>
  </div>
</div>

</div>

	);

}

}