import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../App.css";


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    console.log(currentUser);
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;
   
    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>

        <p>
          <strong>Name:</strong>{" "}
          {currentUser.name}
        </p>

        <p>
          <strong>Age:</strong>{" "}
          {currentUser.age}
        </p>
      
        <p>
          <strong>Height:</strong>{" "}
          {currentUser.height}
        inches</p>

        <p>
          <strong>Weight:</strong>{" "}
          {currentUser.weight}
         lbs</p>

        <p>
          <strong>Your Goal:</strong>{" "}
          {currentUser.goal}
        </p>


      </div>: null}
      </div>
    );
  }
}
