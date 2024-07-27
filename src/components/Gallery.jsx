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
  const sizes = ['w-40', 'w-48', 'w-56', 'w-64', 'w-72', 'w-80', 'w-96'];
  const heights = ['h-40', 'h-48', 'h-56', 'h-64', 'h-72', 'h-80', 'h-96'];
  return `${sizes[Math.floor(Math.random() * sizes.length)]} ${heights[Math.floor(Math.random() * heights.length)]}`;
};


const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="bg-white/60 min-h-screen py-10 px-20">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold mb-12">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 md:px-0">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg ${getRandomSize()}`}
              data-aos="fade-up"
            >
              <img
                src={src}
                alt={`${index + 1}`}
                className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
