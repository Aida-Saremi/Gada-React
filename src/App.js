// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import components
// import './App.css';
// import HeroSection from './components/HeroSection';
// // import pages
// import About from './pages/About';

// function App() {
//   return (

//     <Router>

//       <Routes>
//         <Route path='/' element={<HeroSection />} />
//         <Route path='/about' element={<About />} />

//         {/* path='*': This specifies that the route will match any URL path that hasn't matched any previous routes. */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./pages/About";
import Services from "./pages/Services";
import "./index.css";

const App = () => {
  return (
    // <About/>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
