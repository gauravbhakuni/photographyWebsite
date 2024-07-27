import React from 'react';

const Contact = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <header className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>
          Get in Touch
        </h1>
        <p className='mt-4 text-lg text-gray-600'>
          We would love to hear from you! Whether you have questions, inquiries, or just want to say hello, feel free to reach out.
        </p>
      </header>

      {/* Contact Info Section */}
      <section className='mb-12'>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Address */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Our Studio</h2>
            <p className='text-gray-600 mb-2'>
              <span className='font-semibold'>Address:</span> 1234 Photography Lane, Suite 100, Cityville, ST 12345
            </p>
            <p className='text-gray-600'>
              <span className='font-semibold'>Phone:</span> (123) 456-7890
            </p>
            <p className='text-gray-600'>
              <span className='font-semibold'>Email:</span> contact@photographywebsite.com
            </p>
          </div>
          
          {/* Social Media Links */}
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-4'>Follow Us</h2>
            <ul className='space-y-2'>
              <li>
                <a href='https://facebook.com' className='text-blue-600 hover:underline'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://instagram.com' className='text-pink-600 hover:underline'>
                  Instagram
                </a>
              </li>
              <li>
                <a href='https://twitter.com' className='text-blue-400 hover:underline'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='https://linkedin.com' className='text-blue-700 hover:underline'>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Send Us a Message</h2>
        <form action='#' method='POST' className='space-y-4'>
          {/* Name */}
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500'
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500'
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='6'
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500'
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full bg-primary-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500'
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
