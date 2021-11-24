import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import AuthService from "./services/auth.service";
import Footer from "./components/footer.component";
import ForgotPassword from "./components/forgotpassword.component";
import ResetPassword from "./components/resetpassword.component";
import Chart from "./components/chart.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import ChestExVids from "./components/chest-ex-vids.component";
import BackExVids from "./components/back-ex-vids.component";
import ShoulderExVids from "./components/shoulder-ex-vids.component";
import BicepExVids from "./components/bicep-ex-vids.component";
import TricepExVids from "./components/tricep-ex-vids.component";
import LegExVids from "./components/leg-ex-vids.component";
import CoreExVids from "./components/core-ex-vids.component";
import StretchExVids from "./components/stretch-ex-vids.component";
import WarmUpExVids from "./components/warmup-ex-vids.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
       
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         
          <Link to={"/"} className="navbar-brand">
            <img src="/images/navLogo.png" alt="" className="d-inline-block align-text-top"/>
            Off Strength Workouts
          </Link>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
         
       
          <ul className="navbar-nav ml-auto">
          


                {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Videos
                </Link>
              </li>



            )}
            
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Log Out
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
             

            </div>
          )}
           
          </ul>
          </div>
         
        </nav>
        
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/reset/:id" component={ResetPassword} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/chestvids" component={ChestExVids} />
            <Route path="/backvids" component={BackExVids} />
            <Route path="/shouldervids" component={ShoulderExVids} />
            <Route path="/bicepvids" component={BicepExVids} />
            <Route path="/tricepvids" component={TricepExVids} />
            <Route path="/legvids" component={LegExVids} />
            <Route path="/corevids" component={CoreExVids} />
            <Route path="/stretchvids" component={StretchExVids} />
            <Route path="/warmupvids" component={WarmUpExVids} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>

        <div className="fixed-footer">
        <Footer/> 
        </div>

      </div>
    );
  }
}

export default App;
