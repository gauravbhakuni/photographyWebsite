import React from 'react';

const About = () => {
  return (
    <div className="text-gray-800">
      {/* Header Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-6xl font-bold">A Journey Through the Lens</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">The Story of Our Photography</h2>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-16">
          From the very first click of the camera to the present day, our photography journey has been one of passion, creativity, and dedication. We started with a simple desire to capture the beauty of the world around us, and this hobby soon blossomed into a professional endeavor. Each photograph we take is not just a picture but a piece of art that tells a story and evokes emotions. Our work is driven by the inspiration behind every shot, whether it's the serene beauty of nature, the vibrant energy of urban life, or the intimate moments of a special occasion. We believe in capturing moments and creating memories that last a lifetime, and we strive to reflect this in every project we undertake. Join us as we continue to explore and share the world through our lens, one photograph at a time.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Capturing Moments, Creating Memories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/5935235/pexels-photo-5935235.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/69096/pexels-photo-69096.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/713959/pexels-photo-713959.jpeg?auto=compress&cs=tinysrgb&w=6003" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/2837651/pexels-photo-2837651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
            <div className="relative overflow-hidden">
              <img src="https://images.pexels.com/photos/1759823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=600" alt="gallery" className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110" />
            </div>
          </div>
        </div>
      </div>

      {/* Inspiration Section */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-8">Inspiration Behind Every Shot</h2>
        <p className="text-lg md:text-xl leading-relaxed text-center mb-16">
          Our inspiration comes from the world around us. Whether it's the serene beauty of nature, the vibrant energy of urban life, or the intimate moments of a special occasion, we find beauty in every moment. We believe that every photograph has a story to tell, and we strive to capture these stories through our lens. Our goal is to create art that not only captures moments but also evokes emotions and creates lasting memories.
        </p>
      </div>
    </div>
  );
};

export default About;
