import React, { Component } from "react";
import UserService from "../services/user.service";


export default class WarmUpExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Foam roll legs.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Foam Roll Legs</h5>
    <p class="card-text">Follow along and perform this foam roll routine for you legs.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Inchworm.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Inchworm</h5>
    <p class="card-text">Starting in plank position on hands, while keeping your legs straight walk your hands to your feet.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Lunge and twist warm up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Lunge & Twist</h5>
    <p class="card-text">Perform a lunge and alternate rotating your chest and abs to each side on each lunge.</p>
  </div>
</div>

<div class="card" style={{width: "20rem"}}>
  <video controls>
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Shoulder Mobility Warm Up.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">PVC Shoulder Mobility Routine</h5>
    <p class="card-text">Perform these shoulder opening exercises with a PVC pipe.</p>
  </div>
</div>


</div>
	);

}

}