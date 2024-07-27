import React from 'react';

const AnotherSection = () => {
  return (
    <div className='h-[114vw] md:h-[76vw]'>
      <div className='h-full relative flex justify-center'>
        <div className='absolute z-10 pt-[60px] text-[0.8rem] md:text-xl text-secondary'>
          <h1 className='text-center'>INTIMATE WEDDINGS</h1>
          <h1 className='text-center'>AND ELOPEMENTS</h1>
          <h1 className='text-center'>IN UTAH AND WORLDWIDE</h1>
        </div>

        {/* div centered */}
        <div className='absolute pt-[100px] flex justify-center items-center'>
          <div className='h-[95vw] md:h-[57vw] w-[67vw]'>
            <img src="https://www.ashleysmithphotos.com/wp-content/uploads/2020/03/DSC_5641-1-1025x1536.jpg" alt="hello" className='h-full w-full object-cover' />
          </div>
        </div>


        {/* div at top left */}
        <div className='absolute left-0 mt-36 xl:mt-48 ml-[5vw] h-[44vw] w-[30vw] md:h-[33vw] md:w-[19vw]'>
          <img src="https://www.ashleysmithphotos.com/wp-content/uploads/2020/02/DSC_3442-731x1024.jpg" alt="hello" className='h-full w-full object-cover' />
        </div>


        {/*div at bottom right */}
        <div className='absolute right-0 mr-[5vw] xl:mr-0 mt-[80vw] md:mt-[38vw] h-[19vw] w-[38vw]'>
          <img src="https://www.ashleysmithphotos.com/wp-content/uploads/2020/01/DSC_6540-768x387.jpg" alt="hello" className='h-full w-full object-cover' />
        </div>

        <div className='absolute z-10 hidden md:block pt-[107vw] md:pt-[63vw] xl:pt-[59vw] text-xl text-black'>
          <h1 className='text-gradient text-center text-2xl md:text-5xl xl:text-9xl font-semibold pl-[13vw]'>REIMAGINE</h1>
          <div className='flex pl-[39vw]'>
            <h1 className='text-center text-[0.8rem] md:text-[1rem] xl:text-[2rem] xl:py-4 pr-2 xl:pr-3'>YOUR</h1>
            <h1 className='text-primary text-center text-2xl md:text-5xl xl:text-9xl font-semibold font-outline-2'>ELOPEMENTS</h1>
          </div>
        </div>

        <div className='absolute z-10 flex items-center md:hidden pt-[115vw] md:pt-[63vw] xl:pt-[59vw] text-xl text-black'>
          <h1 className='text-gradient text-center text-xl md:text-5xl xl:text-9xl font-semibold text'>REIMAGINE</h1>
          <h1 className='text-center text-[0.8rem] md:text-[1rem] xl:text-[2rem] xl:py-4 px-2 xl:pr-3'>YOUR</h1>
          <h1 className='text-primary text-center text-xl md:text-5xl xl:text-9xl font-semibold font-outline-1'>ELOPEMENTS</h1>
        </div>

        <div className='absolute flex flex-col items-center md:flex-row z-10 pt-[124vw] md:pt-[83vw] xl:pt-[79vw] text-[0.8rem] xl:text-xl text-black gap-[3vh] md:gap-[10vh]'>
          <div>
            <h1 className='text-center'>You deserve the wildly unforgettable, meaningful, love-filled</h1>
            <h1 className='text-center'>wedding of your dreams.</h1>
            <h1 className='text-center'>I’m here to help make that happen.</h1>
          </div>
          <div>
            <button className='bg-secondary hover:bg-secondary-light text-white hover:text-secondary px-4 py-2 xl:px-6 xl:py-4'>EXPERIENCE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnotherSection;
