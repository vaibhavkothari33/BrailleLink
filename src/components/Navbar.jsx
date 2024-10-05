import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center  bg-white shadow-md">
  
      <div className="text-4xl font-extrabold pt-9 pl-10 pb-8 text-blue-700">Vercel</div>

     
      <ul className="hidden md:flex space-x-16 pr-32 text-xl font-bold">
        <li className="hover:text-blue-600"><a href="#home">Home</a></li>
        <li className="hover:text-blue-600"><a href="#about">About Us</a></li>
        <li className="hover:text-blue-600"><a href="#use-cases">Use Cases</a></li>
      </ul>

      <div className="md:hidden">
        <FaBars className="text-2xl text-blue-700 cursor-pointer" onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="hover:text-blue-600 font-bold text-lg"><a href="#home">Home</a></li>
            <li className="hover:text-blue-600 font-bold text-lg"><a href="#about">About Us</a></li>
            <li className="hover:text-blue-600 font-bold text-lg"><a href="#use-cases">Use Cases</a></li>
        
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


