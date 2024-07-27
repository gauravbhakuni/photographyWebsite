import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 px-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        {/* Contact Information */}
        <div className='mb-4 md:mb-0'>
          <h2 className='text-lg font-semibold mb-2'>Contact Us</h2>
          <p className='text-sm'>
            Email: <a href='mailto:info@photographywebsite.com' className='underline'>info@photographywebsite.com</a>
          </p>
          <p className='text-sm'>
            Phone: <a href='tel:+1234567890' className='underline'>+1 (234) 567-890</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-4 mb-4 md:mb-0'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='text-white/40 hover:text-primary'>
            <FaFacebookF size={20} />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='text-white/40 hover:text-primary'>
            <FaInstagram size={20} />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-white/40 hover:text-primary'>
            <FaTwitter size={20} />
          </a>
          <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='text-white/40 hover:text-primary'>
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Copyright */}
        <div className='text-sm'>
          <p>&copy; {new Date().getFullYear()} Your Photography Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
