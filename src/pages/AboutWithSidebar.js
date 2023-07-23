import React from 'react'
import About from '../components/About'
import { FaBars } from 'react-icons/fa';
import { useGlobalContexts } from '../components/contexts';
export default function AboutWithSidebar() {
  const { openSidebar } = useGlobalContexts();
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <About />
    </main>
  )
}
