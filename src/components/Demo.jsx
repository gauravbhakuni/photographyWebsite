import React, { useState, useEffect } from 'react';

const Demo = () => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Adjust scroll range for opacity transition
    const startScroll = docHeight - windowHeight - 790; // Start transition 200px above bottom
    const endScroll = docHeight - windowHeight - 300;

    // Calculate the opacity value
    const newOpacity = Math.min(1, Math.max(0.25, (scrollY - startScroll) / (endScroll - startScroll)));
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-[114vw] md:h-[80vw]'>
      <div className='relative h-full flex flex-col justify-center items-center'>
        <div className='absolute bg-primary h-[40vw] top-0 w-full flex justify-center'>
          <div className='w-1/2 h-[40vw] flex flex-col'>
            <p className='text-left pt-10 px-10 text-6xl font-bold'>About me</p>
            <div className='w-[430px] mt-10'>
              <p className='text-left pr-10 text-2xl font-josefinSlab'>Hello, I'm Peter Parker.</p>
              <p className='text-left text-[1rem] pr-10 font-josefinSlab'>From the very first click of the camera to the present day, our photography journey has been one of passion, creativity, and dedication. We started with a simple desire to capture the beauty of the world around us, and this hobby soon blossomed into a professional endeavor. Each photograph we take is not just a picture but a piece of art that tells a story and evokes emotions. Our work is driven by the inspiration behind every shot, whether it's the serene beauty of nature, the vibrant energy of urban life, or the intimate moments of a special occasion. We believe in capturing moments and creating memories that last a lifetime, and we strive to reflect this in every project we undertake. Join us as we continue to explore and share the world through our lens, one photograph at a time.</p>
            </div>
          </div>
          <div className='absolute flex flex-col mt-32 justify-start gap-1'>
            <div className=' w-[480px] h-[40px] bg-white/80'>
              <p className='text-right pr-3 text-2xl font-josefinSlab'>A Journey from Curiosity to Mastery</p>
            </div>
            <div className='w-[460px] h-[40px] bg-white/80'>
              <p className='text-right pr-3 text-2xl font-josefinSlab'>Capturing Moments, Creating Memories
              </p>
            </div>
            <div className='w-[400px] h-[40px] bg-white/80'>
              <p className='text-right pr-3 text-2xl font-josefinSlab'>Inspiration Behind Every Shot</p>
            </div>
          </div>

          <div className='bg-black/70 w-1/3 h-[40vw]'>
            <img src="https://images.pexels.com/photos/906457/pexels-photo-906457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hello" className='h-full w-full object-cover' />
          </div>
        </div>

        <div className='absolute pt-40 bg-gray-100 h-[40vw] bottom-0 w-full flex items-center justify-center gap-10'>
          <div>
            <div className='w-[240px] h-[300px] bg-white group overflow-hidden'>
              <img src="https://images.unsplash.com/photo-1519306943444-3e1588e3fd23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvdXBsZXMlMjBsb3ZlfGVufDB8fDB8fHww" alt="hello" className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:cursor-pointer' />
            </div>
            <p className='text-black text-[1rem] italic font-josefinSlab pt-3'>Savannah, GA</p>
            <p className='text-black text-[1rem] font-josefinSlab pb-20'>BRE & BILLY</p>
          </div>

          <div>
            <div className='w-[240px] h-[300px] bg-white group overflow-hidden'>
              <img src="https://images.pexels.com/photos/2174662/pexels-photo-2174662.jpeg?auto=compress&cs=tinysrgb&w=600" alt="hello" className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:cursor-pointer' />
            </div>
            <p className='text-black text-[1rem] italic font-josefinSlab pt-3'>Savannah, GA</p>
            <p className='text-black text-[1rem] font-josefinSlab'>BRE & BILLY</p>
          </div>

          <div>
            <div className='w-[240px] h-[300px] bg-white group overflow-hidden'>
              <img src="https://plus.unsplash.com/premium_photo-1661964087689-ac4784c98004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY291cGxlfGVufDB8fDB8fHww" alt="hello" className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:cursor-pointer' />
            </div>
            <p className='text-black text-[1rem] italic font-josefinSlab pt-3'>Savannah, GA</p>
            <p className='text-black text-[1rem] font-josefinSlab pb-20'>BRE & BILLY</p>
          </div>

          <div>
            <div className='w-[240px] h-[300px] bg-white group overflow-hidden'>
              <img src="https://www.ashleysmithphotos.com/wp-content/uploads/2020/03/DSC_5641-1-1025x1536.jpg" alt="hello" className='h-full w-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:cursor-pointer' />
            </div>
            <p className='text-black text-[1rem] italic font-josefinSlab pt-3'>Savannah, GA</p>
            <p className='text-black text-[1rem] font-josefinSlab'>BRE & BILLY</p>
          </div>
        </div>

        <div
          className='h-[200px] w-[640px] bg-black absolute z-10'
          style={{ opacity }}
        >
          <p className='text-white text-center text-3xl font-josefinSlab pt-8 px-20'>No story has power, nor will it last, unless we feel in ourselves that it is true and true of us.</p>
          <p className='text-white text-center text-[0.8rem] pt-4'>JOHN STEINBECK</p>
        </div>
        <div
          className='h-[200px] w-[640px] bg-white absolute z-5'
        ></div>
      </div>
    </div>
  );
}

export default Demo;
