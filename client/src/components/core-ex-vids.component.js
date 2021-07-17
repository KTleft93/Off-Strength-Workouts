import React, { Component } from "react";
import UserService from "../services/user.service";


export default class CoreExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Ball Slams Overhead.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ball Slams</h5>
    <p class="card-text">Starting with the ball directly overhead, slam the ball to the ground bringing your chest down with the slam.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  //<source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Barbell ab rollouts.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Ab Rollouts</h5>
    <p class="card-text">Perform with a barbell or ab wheel. While kneeling or standing keep your arms fully extended and reach out with the barbell or ab wheel. Bring your hips down as your reach out.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
 // <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Bird Dog.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Bird Dog</h5>
    <p class="card-text">Starting on your hands and knees, elevate your knees off the ground by pressing off your toes. In this position extend 1 arm in front of your and extend the opposite leg out behind you.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Bosu Ball Ab Circuit.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Bosu Ball Ab Circuit</h5>
    <p class="card-text">Perform with a bosu ball.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Core Circuit.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Core Circuit</h5>
    <p class="card-text">Follow along and perform this challenging core exercises.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Crunches_Knees Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Crunches With Knees Up</h5>
    <p class="card-text">Perform a crunch with your knees up and feet off the ground. Get your upper back off the ground on each rep.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/FARMERS WALK.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Farmers March</h5>
    <p class="card-text">Starting with 1 weight in 1 weight or 2 weights in each, march up and down raising your knee on each step. Keep a tight core and stay as straight up as possible.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Hi Lo Band Rotations.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Resistance Band Rotations</h5>
    <p class="card-text">Anchor a resistance band and keep your arms extended in front of you. Rotate away for the anchor and rotate back with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Hollow Hold_Feet Down.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Hollow Hold With Feet Down</h5>
    <p class="card-text">Perform while seated on the ground and feet down. Lean back with your arms extended up by your ears.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Knees Up Side Crunches.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Side Crunches With Feet Up</h5>
    <p class="card-text">Perform while in crunch position with 1 leg folded on top of the other. Raise your legs and crunch to 1 side rotating your core and chest on each rep. </p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Med ball mountain climbers.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Mountain Climbers</h5>
    <p class="card-text">Perform on a medicine ball in plank position. Keep a tight core and tap your knee on the ball and extend your leg back with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Med ball plank rockers.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Plank Rocker</h5>
    <p class="card-text">Perform on a medicine ball in plank position. While keeping a tight core move the medicine ball forwards and back with your forearms.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Med ball side rockers.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Oblique Rocker</h5>
    <p class="card-text">Perform on a medicine ball in plank position. While keeping a tight core move the medicine ball side to side with your forearms.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine ball crunches.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Crunch</h5>
    <p class="card-text">Perform on a medicine ball in crunch position. Keeping your feet firmly on the ground and with your shoulders hanging off the ball perform a crunch.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Med ball sit ups.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Sit Up</h5>
    <p class="card-text">Perform on the ground with a medicine ball in your hands. Raise your chest and legs to the same height and pass the ball to your legs. Alternate between arms and legs. </p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine Ball Knee Tucks.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Knee Tuck</h5>
    <p class="card-text">Starting in plank position and elevate your feet with the medicine ball. While keeping your hips level and core tight draw your knees and extend th</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine Ball Pike.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Pike</h5>
    <p class="card-text">Starting in plank position and elevate your feet with the medicine ball. Raise your hips while keeping your legs straight as they slide up the medicine ball. Crunch your lower abs at the top of this movement then lower back down until your hips are level with your spine.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine Ball Plank Circuit.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Plank Circuit</h5>
    <p class="card-text">Follow along and perform these challenging medicine ball exercises.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine ball side crunches.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Side Crunches</h5>
    <p class="card-text">Perform on a medicine ball in crunch position. Keeping your feet firmly on the ground and with your shoulders hanging off the ball perform a crunch to the side rotating your chest and core..</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Medicine ball side plan.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Medicine Ball Side Plank</h5>
    <p class="card-text">Perform on a medicine ball in side plank position. Keeping your forearm the ball and the side of your feet on the ground hold a plank. Keep your hips in line with your spine.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Oblique Shimmy.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Oblique Shimmy</h5>
    <p class="card-text">Perform while lying on your back on the ground. Raise your shoulders and midback off the ground and lean side to side while keeping your core tight.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/One arm plank.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">1 Arm Plank</h5>
    <p class="card-text">Peform a plank on 1 arm. Keep your core tight and hips level.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Pallof Press1.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Pallof Press</h5>
    <p class="card-text">Anchor a resistance band and stand parrallel to it. Hold the band in front of your chest and extend your arms forward then retract back to your chest with control.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Plank Kicks.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Plank Kicks</h5>
    <p class="card-text">Starting in plank posisiton, perform a jumping jack in this position.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Plank leg raises.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Plank Leg Raises</h5>
    <p class="card-text">Starting in plank posisiton, raise one leg at a time.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Plank rockers.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Plank Rockers</h5>
    <p class="card-text">Starting in plank posisiton, shift your weight forward and back using your forearms and toes.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Plank.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Plank</h5>
    <p class="card-text">Starting on your stomach on the ground, elevate your body with your forearms and toes and hold.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Raising flutter kicks.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Flutter Kick Leg Raises</h5>
    <p class="card-text">Perform while lying on your back on the ground. While keeping your lower back in contact with the ground, raise and lower your legs while performing flutter kicks.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Russian Twists_Legs Down.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Russian Twist With Feet Down</h5>
    <p class="card-text">Perform while sitting on the ground and leaning back to engage your core and with your feet down. Rotate your core left and right turning your chest and core completely to each side.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Russians Twists_Feet Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Russian Twist With Feet Up</h5>
    <p class="card-text">Perform while sitting on the ground and leaning back to engage your core and with your feet up. Rotate your core left and right turning your chest and core completely to each side.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Side Crunch Variation.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Side Crunch</h5>
    <p class="card-text">Perform while in crunch position with 1 leg folded on top of the other. Crunch to 1 side rotating your core and chest on each rep.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Side Plank To Crunch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Side Ab Circuit</h5>
    <p class="card-text">Follow along and perform these challenging exercises for side abdominals.</p>
  </div>
</div>


<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Slider Reach.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Slider Reach</h5>
    <p class="card-text">Starting in a plank position on the ground, use a slider and fully extend your arm in front of you and retract back with control.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Star plank.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Star Plank</h5>
    <p class="card-text">Starting in a side plank position raise your leg and arm and hold.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Starfish Crunch.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Starfish Crunch</h5>
    <p class="card-text">Perform while lying on the ground on your back. While keeping your legs straight elevate your legs and perform a side crunch to touch the inside of your calve.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Twisters.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Twisters</h5>
    <p class="card-text">Starting in a plank position hop on your toes from to each side.</p>
  </div>
</div>

</div>
	);

}

}
