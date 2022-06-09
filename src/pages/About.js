import React, { Component } from 'react';
import "./About.css";
import name from "../assets/profile_pic_name.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {name}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Tiffany Chen</div>
              <div className="brief_description">
                I like to run, bike, and hike. 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}