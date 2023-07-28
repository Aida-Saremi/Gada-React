import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to use for navigation

const Portfolio = () => {
    // Create an array of project objects with image source and website URL
    const projects = [
        {
            imageSrc: "../images/vervet.PNG",
            websiteUrl: "https://www.vervet.no",
          },
      {
        imageSrc: "../images/menu.png",
        websiteUrl: "/",
      },

      {
        imageSrc: "../images/restuartant.png",
        websiteUrl: "/",
      },
      {
        imageSrc: "../images/web-learning.png",
        websiteUrl: "/",
      },
      {
        imageSrc: "../images/GADA.co.png",
        websiteUrl: "/",
      },
      {
        imageSrc: "../images/restaurant Aida.png",
        websiteUrl: "/",
      },
      {
        imageSrc: "../images/7.jpg",
        websiteUrl: "/",
      },
    

      // Add more project objects as needed
    ];
  
    return (
      <>
        <div className="about-page">
          <Link to="/">
            <div className="about-close hover-target"></div>
          </Link>
          <div className="container">
            <div className="row">
              <div className="col-12">
              <h5>* This website is currently under development and is not yet complete. * </h5>
                <h3>Portfolio</h3>
                <p>
                  This section is about the Gada company and the Gada team's
                  descriptions and expertise.
                </p>
              </div>
  
              {/* Map through the projects array and generate clickable images */}
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="image-container">
                    <Link to={project.websiteUrl} target="_blank">
                      {/* Use the project image source as the src attribute */}
                      <img src={project.imageSrc} alt="" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Portfolio;
  