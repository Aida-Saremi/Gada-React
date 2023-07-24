// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css'; // Make sure to import the CSS file

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        

        {/* Rest of your sidebar content */}
        <ul className='Sidebar-Box'>
  <li className='Sidebar-item'>
    <Link to='/' className='Sidebar-item' >Home</Link>
  </li>
  
  <li className='Sidebar-item'>
    <Link to='/about' className='Sidebar-item'>About</Link>
  </li>
  
 
</ul>

      </div>

      {/* Hamburger menu */}
      <div className={`hamburger-menu ${sidebarOpen ? 'open' : ''}`} onClick={handleHamburgerClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Sidebar;
