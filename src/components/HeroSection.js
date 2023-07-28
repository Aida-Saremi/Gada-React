import React, { useEffect } from "react";
import CustomCursor from "./CustomCursor";
import About from "../pages/About";
import { Link } from "react-router-dom"; // Import Link to use for navigation

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <Link to="/about" className="about-text hover-target">
          about
        </Link>
        
        <Link to="/contact" className="contact-text hover-target">
          contact
        </Link>
        
        
        <div className="section-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 text-center mb-4">
                <h1>Designer & programmer</h1>
              </div>
              <div className="col-12 text-center">
                <p>
                  <Link
                    to="/services"
                    className="services-color travel hover-target "
                  >
                    Services
                  </Link>

                  <Link
                    to="/Portfolio"
                    className="wildlife hover-target "
                  >
                    Portfolio
                  </Link>
                  
                  <Link
                    to="/Blog"
                    className="nature hover-target "
                  >
                    Blog
                  </Link>
                
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='cursor' id="cursor"></div>
      <div className='cursor2' id="cursor2"></div>
      <div className='cursor3' id="cursor3"></div> */}

      {/* Link to page */}
      <a href="" className="logo hover-target">
        <img src="/images/gada logo.png" alt="" />
      </a>

      <CustomCursor />
    </>
  );
};

export default HeroSection;
