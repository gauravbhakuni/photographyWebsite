import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-primary-light shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto p-10 flex justify-between items-center">
        <div className="text-xl font-bold">
          Logo
        </div>
        <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-500">Gallery</Link></li>
          <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
