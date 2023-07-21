import React, { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Page cursors
    document.body.addEventListener('mousemove', handleMouseMove);
    const cursor = document.getElementById('cursor');
    const cursor2 = document.getElementById('cursor2');
    const cursor3 = document.getElementById('cursor3');
    
    function handleMouseMove(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor2.style.left = e.clientX + 'px';
      cursor2.style.top = e.clientY + 'px';
      cursor3.style.left = e.clientX + 'px';
      cursor3.style.top = e.clientY + 'px';
    }

    function addHoverClass() {
      cursor2.classList.add('hover');
      cursor3.classList.add('hover');
    }

    function removeHoverClass() {
      cursor2.classList.remove('hover');
      cursor3.classList.remove('hover');
    }
    // function is called explicitly once at the beginning to 
    // ensure a clean starting state for the custom cursors.
    removeHoverClass();  


    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach((target) => {
      target.addEventListener('mouseover', addHoverClass);
      target.addEventListener('mouseout', removeHoverClass);
    });

    return () => {
      // Cleanup the event listeners on component unmount
      document.body.removeEventListener('mousemove', handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener('mouseover', addHoverClass);
        target.removeEventListener('mouseout', removeHoverClass);
      });
    };
    // When you use the useEffect hook with an empty dependency array ([]),
    //  it means that the effect will only run once, specifically after the initial rendering of the component.
    //  It won't run again on subsequent re-renders or page refreshes.
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div>
    </>
  );
};

export default CustomCursor;
