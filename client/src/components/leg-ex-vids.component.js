import React, { Component } from "react";
import UserService from "../services/user.service";


export default class LegExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/1L WALL SIT.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">1 Leg Wall Sit</h5>
    <p class="card-text">Starting with your back against the wall lower yourself into a squat. Rest one foot in front of you on your heel.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Alternating KB Swings.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Alternating Kettlebell Swings</h5>
    <p class="card-text">Peform a swing starting with the weight between your legs. Using your hips swing the kettlebell up and alternate hands.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Band hip swings- standing.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Resistance Band Hip Swings</h5>
    <p class="card-text">Starting with a resistance band around your ankles and hands on a wall, swing your leg out until your encounter resistance then swing your leg back with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Band shuffle walk.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Resistance Band Shuffle</h5>
    <p class="card-text">Starting with a resistance band around your ankles, take small lateral steps. Keep your feet at least shoulder width at all times.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Banded Cone Drill.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Resistance Band Box Drill</h5>
    <p class="card-text">Starting with a resistance band around your ankles, walk forward, backward, and laterally step in a box formation.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Banded leg raises.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Lying Resistance Band Hip Raises</h5>
    <p class="card-text">Starting lying on your side and resistance band around your ankles. Raise your leg and engage your hip and glute. Lower back down with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Barbell deadlift.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Barbell Deadlift</h5>
    <p class="card-text">Perform with a barbell over your feet. Push away from the ground and lock your glutes at the top. Pull the bar up while the bar is close to your shins. Lower the barbell with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Cardio Stepping Routine.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Stepper Circuit</h5>
    <p class="card-text">Follow along and perform this challenging stepper routine.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Kettlebell DeadLift.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Kettlebell Deadlift</h5>
    <p class="card-text">Perform with a kettlebell or dumbbell between your feet. Squat down to pick it up with a neutral spine. Push away from the ground and lock your glutes at the top. Lower with control.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ladder drill 1.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ladder Drill 1</h5>
    <p class="card-text">Perform this agility drill to improve your coordination, foot speed, and cardio.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ladder drill 2.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ladder Drill 2</h5>
    <p class="card-text">Perform this agility drill to improve your coordination, foot speed, and cardio.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ladder drill 3.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ladder Drill 3</h5>
    <p class="card-text">Perform this agility drill to improve your coordination, foot speed, and cardio.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ladder drill 4.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ladder Drill 4</h5>
    <p class="card-text">Perform this agility drill to improve your coordination, foot speed, and cardio.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ladder drill 5.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ladder Drill 5</h5>
    <p class="card-text">Perform this agility drill to improve your coordination, foot speed, and cardio.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Lateral plyometric 1 leg hops.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Lateral Ski Hops</h5>
    <p class="card-text">Starting with leg not facing the obstacle, hop onto the opposite leg and do 1 leg hops over the other obstacles landing on 1 leg when done.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Lunge and Twist KettleBell.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Lunge and Twist</h5>
    <p class="card-text">Perform a forward lunge and twist the weight while maintaining the lunge position.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Offset Squat.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Offset Squat</h5>
    <p class="card-text">Perform a squat with a weight in one arm.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ski jumps.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ski Jumps</h5>
    <p class="card-text">Perform a lateral hop to each side landing on one leg.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Split Squat Jumps.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">With one foot elevated, jump from the lunge position on one leg.</p>
  </div>
</div>


</div>

	);

}

}