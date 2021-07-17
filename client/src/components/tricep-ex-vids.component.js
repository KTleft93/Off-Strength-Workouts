import React, { Component } from "react";
import UserService from "../services/user.service";


export default class TricepExVids extends Component {


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
  <source src="http://d1npt7ns5uaxtu.cloudfront.net/Youtube folder/Tricep kickbacks.mp4" type="video/mp4"/>
</video>
 
  <div class="card-body">
    <h5 class="card-title">Tricep Kickbacks</h5>
    <p class="card-text">Perform while keeping your arms against your ribcage. Extend your arms behind you and contract your triceps.</p>
  </div>
</div>


</div>

	);

}

}