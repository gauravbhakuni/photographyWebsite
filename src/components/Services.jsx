import React from 'react';

const Services = () => {
  return (
    <div className='bg-gray-100 py-12'>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>Our Photography Services</h1>
        <p className='text-lg md:text-xl text-gray-600'>
          Discover the range of photography services we offer, each tailored to capture your unique moments and memories.
        </p>
      </div>

      {/* Services Section */}
      <div className='container mx-auto px-4'>
        {/* Portrait Photography */}
        <div className='bg-white rounded-lg shadow-lg mb-8 p-6 md:p-8'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Portrait Photography</h2>
          <p className='text-lg text-gray-600 mb-4'>
            Capture the essence of your personality with our professional portrait photography. Whether for personal use, business profiles, or social media, we ensure your true self shines through.
          </p>
          <img 
            src='https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Portrait Photography'
            className='w-full h-auto rounded-lg'
          />
        </div>

        {/* Event Photography */}
        <div className='bg-white rounded-lg shadow-lg mb-8 p-6 md:p-8'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Event Photography</h2>
          <p className='text-lg text-gray-600 mb-4'>
            From weddings to corporate events, we document your special occasions with attention to detail and a creative touch. Our goal is to preserve the memories of your event in stunning imagery.
          </p>
          <img 
            src='https://images.pexels.com/photos/1776151/pexels-photo-1776151.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Event Photography'
            className='w-full h-auto rounded-lg'
          />
        </div>

        {/* Product Photography */}
        <div className='bg-white rounded-lg shadow-lg mb-8 p-6 md:p-8'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Product Photography</h2>
          <p className='text-lg text-gray-600 mb-4'>
            Showcase your products in their best light with our high-quality product photography. Perfect for e-commerce, advertisements, and promotional materials.
          </p>
          <img 
            src='https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Product Photography'
            className='w-full h-auto rounded-lg'
          />
        </div>

        {/* Lifestyle Photography */}
        <div className='bg-white rounded-lg shadow-lg mb-8 p-6 md:p-8'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Lifestyle Photography</h2>
          <p className='text-lg text-gray-600 mb-4'>
            Capture candid and authentic moments that reflect your lifestyle. Whether it’s for a personal project or a brand campaign, we focus on creating images that tell your story.
          </p>
          <img 
            src='https://images.pexels.com/photos/3043215/pexels-photo-3043215.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Lifestyle Photography'
            className='w-full h-auto rounded-lg'
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className='bg-gray-200 py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-semibold text-gray-800 mb-4'>Ready to Capture Your Moments?</h2>
          <p className='text-lg text-gray-600 mb-8'>
            If you’re interested in any of our services or want to discuss a custom project, get in touch with us. We’d love to work with you!
          </p>
          <a 
            href='/contact' 
            className='bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold'
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
