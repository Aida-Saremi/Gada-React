import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Blog = () => {
  return (
    <div className="about-page">
       <Link to="/">
            <div className="about-close hover-target"></div>
          </Link>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
          <h5>* This website is currently under development and is not yet complete. * </h5>
            <h3>Blog</h3>
          </div>
        </div>

        <div className="row blogs">
          <div className="blog-content col-md-6 col-lg-4">
             <img src="../images/design.webp" alt="" />
              <div className="blog-description">
               <div className="blog-info">
                 <span>
                  <i className="fas fa-user-shield"></i> GADA
                 </span>
                 <span>
                  <i className="fas fa-calendar-alt"></i> 10 00 March
                 </span>
                </div>
                <h2> How to become a web designer</h2>
             
                <p>Lorem Epsom is a mock text with an graphic designers</p>
                <Link to="/blog/1">See more</Link>
               </div>
          </div>
          <div className="blog-content col-md-6 col-lg-4">
            <img src="../images/webbg.jpg" alt="" />
            <div className="blog-description">
             <div className="blog-info">
                <span>
                  <i className="fas fa-user-shield"></i> GADA
                </span>
                <span>
                  <i className="fas fa-calendar-alt"></i> 10 00 March
                </span>
              </div>
              <h2> How to become a web designer</h2>
              
              <p>Lorem Epsom is a mock text with an graphic designers</p>
              <Link to="/blog/2">See more</Link>
            </div>
          </div>
          <div className="blog-content col-md-6 col-lg-4">
            <img src="../images/aboutsis.jpg" alt="" />
            <div className="blog-description">
             <div className="blog-info">
                <span>
                  <i className="fas fa-user-shield"></i> GADA
                </span>
                <span>
                  <i className="fas fa-calendar-alt"></i> 10 00 March
                </span>
              </div>
              <h2> How to become a web designer</h2>
              
              <p>Lorem Epsom is a mock text with an graphic designers</p>
              <Link to="/blog/3">See more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
