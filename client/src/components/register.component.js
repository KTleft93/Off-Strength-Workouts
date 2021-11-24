import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The full name must be between 3 and 20 characters.
      </div>
    );
  }
};

const vage = value => {
  if (value.length > 2) {
    return (
      <div className="alert alert-danger" role="alert">
        The age must be between 1 and 2 digits.
      </div>
    );
  }
};

const vheight = value => {
  if (value.length > 2 || value.length < 2 && Number.isInteger(value) ) {
    return (
      <div className="alert alert-danger" role="alert">
        The height must be 2 digits in inches.
      </div>
    );
  }
};

const vweight = value => {
  if (value.length > 3 ) {
    return (
      <div className="alert alert-danger" role="alert">
        The weight must be less than 4 numbers.
      </div>
    );
  }
};

const vgoal = value => {
  if (value.length < 5 || value.length > 50) {
    return (
      <div className="alert alert-danger" role="alert">
        The Goal must be between 5 and 50 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeGoal = this.onChangeGoal.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
       name: "",
       age: "",
       height: "",
      weight: "",
      goal: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

    onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

    onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }

    onChangeHeight(e) {
    this.setState({
      height: e.target.value
    });
  }

    onChangeGoal(e) {
    this.setState({
      goal: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.name,
        this.state.age,
        this.state.weight,
        this.state.height,
        this.state.goal,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {

    return (

    <div className="container">
      <div className="col-md-12">
        <div className="card card-container">
         

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Full Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    validations={[required, vname]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Age</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChangeAge}
                    validations={[required, vage]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Enter your Weight in pounds</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.onChangeWeight}
                    validations={[required, vweight]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Enter your Height in inches</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="height"
                    value={this.state.height}
                    onChange={this.onChangeHeight}
                    validations={[required, vheight]}
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">What is your Fitness Goal?</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="Goal"
                    value={this.state.goal}
                    onChange={this.onChangeGoal}
                    validations={[required, vgoal]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
      </div>
    );
  }
}
