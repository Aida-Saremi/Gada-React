import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to use for navigation

// import Sidebar from '../components/SideBarSimple';
// import HamburgerMenu from '../components/HamburgerMenu';


const Contact = () => {
  return (
    <div className="about-page">
      
      <Link to="/">
            <div className="about-close hover-target"></div>
          </Link>
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="title">
              <h1 >Contact us</h1>
            </div>
          </div>

          <div className="row">
            <form className="contact-form">
              <div className="input-group">
                <input type="text" placeholder="Name & last Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Object" />
              </div>
              <textarea placeholder="write something..."></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Contact;
