import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
    {
        name: 'home',
        path: '/'
    },
    {
        name: 'about',
        path: '/about'
    },
    {
        name: 'gallery',
        path: '/gallery'
    },
    {
        name: 'services',
        path: '/services'
    },
];

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link
                        to={link.path}
                        key={index}
                        className={`${link.path === location.pathname ? "text-black border-b-2 border-black/60" : "hover:text-black/60"} capitalize font-medium transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
