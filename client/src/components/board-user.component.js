  import React, { Component } from "react";
import VideoPlayer from "react-video-js-player";
import UserService from "../services/user.service";
import '../board-user.component.css';

export default class BoardUser extends Component {


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

 

  render() {
    return (

      <div>
      <h5 style={{padding: "20px"}}>Exercise Library</h5>

      <div className="grid-container">

      <div className="grid-item grid-item 1">
      <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Incline-Push-Up_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Chest Exercises</h5>
     <div className="col text-center">
    <a href="/chestvids" className="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>
        <div className="grid-item grid-item 2">
         <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Bent-over-row_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Back Exercises</h5>
    <div className="col text-center">
    <a href="/backvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 3">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/1A-Shoulder-Press_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Shoulder Exercises</h5>
     <div className="col text-center">
    <a href="/shouldervids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 4">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Full-curls_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Bicep Exercises</h5>
     <div className="col text-center">
    <a href="/bicepvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 5">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Tricep-kickbacks_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Tricep Exercises</h5>
     <div className="col text-center">
    <a href="/tricepvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

  <div className="grid-item grid-item 6">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Barbell-Squats_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Leg Exercises</h5>
     <div className="col text-center">
    <a href="/legvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 7">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Plank-rockers_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Core Exercises</h5>
     <div className="col text-center">
    <a href="/corevids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 8">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/clip1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Stretches</h5>
     <div className="col text-center">
    <a href="/stretchvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

    <div className="grid-item grid-item 9">
    <div class="card text-white bg-dark mb-3" style={{width: "18rem"}}>
  <img class="card-img-top" src="http://d1npt7ns5uaxtu.cloudfront.net/Foam-roll-legs_thumb1.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Warm Ups</h5>
     <div className="col text-center">
    <a href="/warmupvids" class="btn btn-primary">Go</a>
  </div>
  </div>
</div>
</div>

      
</div>
</div>
    );
  }
}
