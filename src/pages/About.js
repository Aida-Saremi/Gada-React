import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to use for navigation

// import Sidebar from '../components/SideBarSimple';
// import HamburgerMenu from '../components/HamburgerMenu';

const About = () => {
  return (
    <>
      <div className="about-page">
        <Link to="/">
          <div className="about-close hover-target"></div>
        </Link>
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>Welcome to our world of websites and design!</h2>
                <p>
                  We are two dedicated sisters passionate about creating
                  stunning websites that truly represent your vision. Our team
                  excels in design and coding, crafting visually appealing and
                  user-friendly experiences. From concept to launch, we work
                  closely with you to exceed expectations. Partner with us for a
                  premium experience and elevate your online presence to new
                  heights. Join us on this exciting journey to create a website
                  you'll be proud of.
                </p>
              </div>
              <div className="about-team">
                <div className="card">
                  <div className="inner">
                    <p className="title">Pegah Saremi</p>

                    <div className="image">
                      <img
                        src="../images/photo_2022-12-13_19-44-42 (1).png"
                        alt=""
                      />
                    </div>
                    <div className="items">
                      <div className="item">
                       <Link className="item" to="https://github.com/saremipegah">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-github"
                        >
                          
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                          />
                        </svg>
                        </Link>
                      </div>
                      <div className="item">
                        <svg
                          viewBox="0 0 169.063 169.063"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                          <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                          <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78C135.661,29.421,132.821,28.251,129.921,28.251z" />
                        </svg>
                      </div>
                      {/* Add other SVGs and items */}
                      <div className="item">
                        
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div className="item">
                      <Link className="item" to="https://www.linkedin.com/in/pegahsaremi/">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="97.75px"
                          height="97.75px"
                          viewBox="0 0 97.75 97.75"
                          style={{ enableBackground: "new 0 0 97.75 97.75" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z" />
                          </g>
                        </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="inner">
                    <p className="title">Aida Saremi</p>

                    <div className="image">
                      <img
                        src="../images/photo_2022-12-13_19-44-37 (3).png"
                        alt=""
                      />
                    </div>
                    <div className="items">
                      <div className="item">
                      <Link className="item" to="https://github.com/Aida-Saremi">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="bi bi-github"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                          />
                        </svg>
                        </Link>
                      </div>
                      <div className="item">
                        <svg
                          viewBox="0 0 169.063 169.063"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                          <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                          <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78C135.661,29.421,132.821,28.251,129.921,28.251z" />
                        </svg>
                      </div>
                      {/* Add other SVGs and items */}
                      <div className="item">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div className="item">
                      <Link className="item" to="https://www.linkedin.com/in/aida-saremi/">
                        <svg
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          width="97.75px"
                          height="97.75px"
                          viewBox="0 0 97.75 97.75"
                          style={{ enableBackground: "new 0 0 97.75 97.75" }}
                          xmlSpace="preserve"
                        >
                          <g>
                            <path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z" />
                          </g>
                        </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <a href="/" className="logo hover-target">
        <img src="../images/gada logo.png" alt="" />
      </a>

      {/* <HamburgerMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
    </>
  );
};

export default About;
