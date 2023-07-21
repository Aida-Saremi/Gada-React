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


// App.js (or your root component)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HeroSection} />
        <Route path="/about" component={About} />
        {/* Add more routes for other pages */}
      </Switch>
    </Router>
  );
};

export default App;

