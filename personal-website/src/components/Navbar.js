import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gray-800 shadow-lg">
      <h1 className="text-2xl font-bold text-blue-400">Joseph Abonasara</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-blue-300">Home</a></li>
        <li><a href="#education" className="hover:text-blue-300">Educations</a></li>
        <li><a href="#career" className="hover:text-blue-300">Career</a></li>
        <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
