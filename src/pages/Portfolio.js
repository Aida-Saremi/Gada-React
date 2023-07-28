import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link to use for navigation

// import Sidebar from '../components/SideBarSimple';
// import HamburgerMenu from '../components/HamburgerMenu';

// const Portfolio = () => {
//   return (
//     <>
//       <div className="about-page">
//         <Link to="/">
//           <div className="about-close hover-target"></div>
//         </Link>
//         <div className="container">
         
//         <div className="row ">
//             <div className="col-12">
//               <h3>Portfolio</h3>
//               <p>This section is about the Gada company and the Gada team's descriptions and expertise.</p>
//             </div>

//             <div className="col-md-6 col-lg-4">
//             <div className="image-container">
             
//               <img src="../images/vervet.png" alt=""/>
//               </div>
//             </div>
//             <div className="col-md-6 col-lg-4">
//             <div className="image-container">
//               <img src="../images/menu.png" alt=""/>
//             </div>
//             </div>
//             <div className="col-md-6 col-lg-4">
//               <div className="image-container">
//               <img src="../images/restuartant.png" alt=""/>
//             </div>
// </div>
//             <div className="col-md-6 col-lg-4">
//              <div className="image-container">
//               <img src="../images/web-learning.png" alt=""/>
//             </div>
// </div>
//             <div className="col-md-6 col-lg-4">
//                <div className="image-container">
//                <img src="../images/GADA.co.png" alt=""/>
              
//             </div>
// </div>
//             <div className="col-md-6 col-lg-4">
//              <div className="image-container">
//               <img src="../images/restaurant Aida.png" alt=""/>
//             </div>
// </div>
//             <div className="col-md-6 col-lg-4">
//               <div className="image-container">
//               <img src="../images/7.jpg" alt=""/>
//             </div>
//             </div>

           
//           </div>


//          </div>
//          </div>
//     </>
//   );
// };

// export default Portfolio;



const Portfolio = () => {
    // Create an array of project objects with image source and website URL
    const projects = [
      {
        imageSrc: "../images/vervet.png",
        websiteUrl: "https://www.vervet.no",
      },
      {
        imageSrc: "../images/menu.png",
        websiteUrl: "https://www.example2.com",
      },

      {
        imageSrc: "../images/restuartant.png",
        websiteUrl: "https://www.example2.com",
      },
      {
        imageSrc: "../images/web-learning.png",
        websiteUrl: "https://www.example2.com",
      },
      {
        imageSrc: "../images/GADA.co.png",
        websiteUrl: "https://www.example2.com",
      },
      {
        imageSrc: "../images/restaurant Aida.png",
        websiteUrl: "https://www.example2.com",
      },
      {
        imageSrc: "../images/7.jpg",
        websiteUrl: "https://www.example2.com",
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
  