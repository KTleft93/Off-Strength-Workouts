import React, { Component } from "react";
import "../App.css";



export default class Footer extends Component {

  render(){

    return(

      <div>


<footer style={{backgroundColor: "black"}} class="">
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4"><a class="brand" href="index.html"></a>
                <p>Off Strength is committed to providing quality exercise routines for individuals. Go to the main website for personalized workout plans, health and fitness blogs, and more.</p>
                
              </div>
            </div>
            <div class="col-md-4">
              <h5>Main Website</h5>
              <dl class="contact-list">
                <dt>Website:</dt>
                <dd><a href="https://off-strength.com">https://off-strength.com</a></dd>
              </dl>
            
            </div>
            <div class="col-md-4 col-xl-3">
              <h5>Contact Me</h5>
              <dl class="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">kt.offstrength@gmail.com</a></dd>
              </dl>
              
            </div>
          </div>
        </div>
       
      </footer>

      </div>

       ); }
  }
