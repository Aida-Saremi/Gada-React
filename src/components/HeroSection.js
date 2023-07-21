import React,{ useEffect } from 'react';
import CustomCursor from './CustomCursor';
import About from '../pages/About';
import { useHistory } from 'react-router-dom';


const HeroSection = () => { 
  const history = useHistory();    
  const handleAboutTextClick = () => {
    
    // Your logic for handling the click event goes here
    // For example, you can navigate to the About page
    // using React Router or perform any other action
    console.log('About element clicked!');
    history.push('../pages/about');
  };
  return (
    <>
      <div className="hero-section">
        <div onClick={handleAboutTextClick} className="about-text hover-target">about</div>
        <div className="contact-text hover-target">contact</div>
        <div className="section-center">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12 text-center mb-4">
                <h1>Designer & programmer</h1>
              </div>
              <div className="col-12 text-center">
                <p>
                  <span className="travel hover-target">Services</span> 
                  <span className="wildlife hover-target">Portfolio</span> 
                  <span className="nature hover-target">Blog</span>
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

      <CustomCursor/>
      
    </>
  );
};

export default HeroSection;
