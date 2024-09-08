import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'gallery', path: '/gallery' },
    { name: 'services', path: '/services' },
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-50">
            {/* Menu Icon */}
            <div onClick={toggleSidebar} className="cursor-pointer z-50">
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-40`}
            >
                <nav className="flex flex-col gap-8 p-6">
                    {links.map((link, index) => (
                        <Link
                            to={link.path}
                            key={index}
                            onClick={toggleSidebar} // Close the sidebar on link click
                            className={`${link.path === location.pathname ? 'text-black border-b-2 border-black/60' : 'hover:text-black/60'
                                } capitalize font-medium transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <button className='border border-black px-10 py-4 hover:bg-black hover:text-white cursor-pointer'>
                            Contact Me
                        </button>
                    </Link>
                </nav>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/50 z-30"
                ></div>
            )}
        </div>
    );
};

export default MobileNav;
