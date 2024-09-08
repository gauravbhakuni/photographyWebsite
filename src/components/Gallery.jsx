import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
  'https://www.ashleysmithphotos.com/wp-content/uploads/2020/03/DSC_5641-1-1025x1536.jpg',
  'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24549334/pexels-photo-24549334/free-photo-of-black-and-white-studio-shot-of-a-mother-and-her-little-daughter.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24238570/pexels-photo-24238570/free-photo-of-photo-of-parents-holding-their-newborn-baby.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
  'https://www.ashleysmithphotos.com/wp-content/uploads/2020/03/DSC_5641-1-1025x1536.jpg',
  'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24549334/pexels-photo-24549334/free-photo-of-black-and-white-studio-shot-of-a-mother-and-her-little-daughter.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24238570/pexels-photo-24238570/free-photo-of-photo-of-parents-holding-their-newborn-baby.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
  'https://www.ashleysmithphotos.com/wp-content/uploads/2020/03/DSC_5641-1-1025x1536.jpg',
  'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24549334/pexels-photo-24549334/free-photo-of-black-and-white-studio-shot-of-a-mother-and-her-little-daughter.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/24238570/pexels-photo-24238570/free-photo-of-photo-of-parents-holding-their-newborn-baby.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww',
  'https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww',
];

const getRandomSize = () => {
  const sizes = ['w-48', 'w-56', 'w-60', 'w-64', 'w-72'];
  const heights = ['h-48', 'h-56', 'h-60', 'h-64', 'h-72'];
  return `${sizes[Math.floor(Math.random() * sizes.length)]} ${heights[Math.floor(Math.random() * heights.length)]}`;
};

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="bg-white/60 min-h-screen py-10">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 pr-28">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg ${getRandomSize()}`}
              data-aos="fade-up"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className='h-full w-[150px] fixed flex justify-center items-center right-0 top-0 bg-black'>
          <h1 className="text-center pl-16 text-white rotate-90 tracking-widest z-10 text-3xl md:text-5xl xl:text-7xl font-semibold mb-12 font-josefinSlab">Gallery</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
