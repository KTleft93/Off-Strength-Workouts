import React, { Component } from "react";
import "../App.css";



export default class Footer extends Component {

  render(){

    return(

      <div className="fixed-footer">


<footer style={{backgroundColor: "black"}} class="">
        <div class="">
          <div class="">
            <div class="">
              <div class=""><a class="" href="index.html"></a>
                <p>Off Strength is committed to providing quality exercise routines for individuals. Go to the main website for personalized workout plans, health and fitness blogs, and more.</p>
                
              </div>
            </div>
            <div class="">
              <h5>Main Website</h5>
              <dl class="contact-list">
                <dt>Website:</dt>
                <dd><a href="https://off-strength.com">https://off-strength.com</a></dd>
              </dl>
            
            </div>
            <div class="">
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
