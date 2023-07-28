import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to use for navigation

// import Sidebar from '../components/SideBarSimple';
// import HamburgerMenu from '../components/HamburgerMenu';

const Services = () => {
  return (
    <>
      <div className="about-page">
        <Link to="/">
          <div className="about-close hover-target"></div>
        </Link>
        <div className="container">
          <div className="row">
            <div className="title">
            <h5>* This website is currently under development and is not yet complete. * </h5>
              <h2>Services</h2>
              <p>This section is about Gada team description and expertise.</p>
            </div>
          </div>
          <div className="row services">
            <div className="service-item">
              <div className="icon">
                {/* <i className="fas fa-laptop"></i> */}
                <svg
                  class="svg-inline--fa fa-laptop fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="laptop"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                  ></path>
                </svg>
              </div>
              <h4>Unique Design</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows as necessary and for practical tools.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <svg
                  class="svg-inline--fa fa-mobile-alt fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="mobile-alt"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                  ></path>
                </svg>
              </div>
              <h4>Responsive</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows as necessary and for practical tools.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                {/* <i className="fas fa-laptop-code"></i> */}
                <svg
                  class="svg-inline--fa fa-laptop-code fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="laptop-code"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
                  ></path>
                </svg>
              </div>
              <h4>Simple Coding</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows as necessary and for practical tools.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                <svg
                  class="svg-inline--fa fa-layer-group fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="layer-group"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"
                  ></path>
                </svg>
              </div>
              <h4>Different Design</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows as necessary and for practical tools.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                {/* <i className="fas fa-cog"></i> */}
                <svg
                  class="svg-inline--fa fa-cog fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cog"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
                  ></path>
                </svg>
              </div>
              <h4>Advanced Settings</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows columns and rows as necessary and for practical tools.
              </p>
            </div>
            <div className="service-item">
              <div className="icon">
                {/* <i className="fas fa-search"></i> */}
                <svg
                  class="svg-inline--fa fa-search fa-w-16"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  ></path>
                </svg>
              </div>
              <h4>Fully Tested</h4>
              <p>
                Lorem Epsom is a mock text with an incomprehensible simplicity
                produced by the printing industry and used by graphic designers.
                Printers and texts, but newspapers and magazines in columns and
                rows as necessary and for practical tools.
              </p>
            </div>
          </div>
        </div>
      </div>
{/* 
      <div className="div-logo">
      <a href="/" className="logo hover-target">
        <img src="../images/gada logo.png" alt="" />
      </a>
      </div> */}

      {/* <HamburgerMenu isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
    </>
  );
};

export default Services;
