import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import Nav from './Nav';
import MobileNav from './MobileNav';

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
    <header className={`fixed top-0 left-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-primary-light shadow-md h-[120px] py-10' : 'bg-primary-light h-[80px] py-2'}`}>
      <nav className="container mx-auto px-10 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-4xl font-semibold group">
            bhakuni<span className="text-black group-hover:text-blue-500">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to="/contact">
            <button className='border border-black px-10 py-4 hover:bg-black hover:text-white cursor-pointer'>
              Contact Me
            </button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

export default Header;
