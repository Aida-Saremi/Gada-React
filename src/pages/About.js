// import React from 'react';

// const About = () => {
//   return (
//     <div className="about-section">
//       <div className="about-close hover-target"></div>
//       <div className="section-center">
//         <div className="container">
//           <div className="row">
//             <div className="section-title">
//               <h1>Welcome to our world of websites and design!</h1>
//               {/* ... */}
//               {/* Your paragraph content goes here */}
//               {/* ... */}
//             </div>
//             <div className="about-team">
//               <div className="card">
//                 <div className="inner">
//                   <p className="title">Pegah Saremi</p>
//                   <div className="image">
//                     <img src="/images/photo_2022-12-13_19-44-42 (1).png" alt="" />
//                   </div>
//                   <div className="items">
//                     <div className="item">
//                       <svg viewBox="0 0 16 16" fill="currentColor" className="bi bi-github">
//                         {/* ... */}
//                       </svg>
//                     </div>
//                     <div className="item">
//                       <svg width="169.063px" height="169.063px" viewBox="0 0 169.063 169.063" style={{ enableBackground: 'new 0 0 169.063 169.063' }} xmlSpace="preserve">
//                         {/* ... */}
//                       </svg>
//                     </div>
//                     {/* ... */}
//                   </div>
//                 </div>
//               </div>
//               <div className="card">
//                 <div className="inner">
//                   <p className="title">Aida Saremi</p>
//                   <div className="image">
//                     <img src="/images/photo_2022-12-13_19-44-37 (3).png" alt="" />
//                   </div>
//                   <div className="items">
//                     <div className="item">
//                       <svg viewBox="0 0 16 16" fill="currentColor" className="bi bi-github">
//                         {/* ... */}
//                       </svg>
//                     </div>
//                     <div className="item">
//                       <svg width="169.063px" height="169.063px" viewBox="0 0 169.063 169.063" style={{ enableBackground: 'new 0 0 169.063 169.063' }} xmlSpace="preserve">
//                         {/* ... */}
//                       </svg>
//                     </div>
//                     {/* ... */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState } from 'react';

const About = () => {
  const [aboutOn, setAboutOn] = useState(false);

  const handleAboutTextClick = () => {
    setAboutOn(true);
  };

  const handleAboutCloseClick = () => {
    setAboutOn(false);
  };

  return (
    <div className={`about-section${aboutOn ? ' about-on' : ''}`}>
      <div className="about-close hover-target" onClick={handleAboutCloseClick}></div>
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Welcome to our world of websites and design!</h1>
              {/* ... */}
              {/* Your paragraph content goes here */}
              {/* ... */}
            </div>
            <div className="about-team">
              {/* ... */}
              {/* Your card components go here */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

