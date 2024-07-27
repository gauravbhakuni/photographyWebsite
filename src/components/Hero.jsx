import { useEffect } from 'react';
import BoxReveal from './BoxReveal';
import AnotherSection from './AnotherSection';
import Photo from './Photo';
import Demo from './Demo';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className='mb-[70px] px-6 md:px-16 flex flex-col md:flex-row'>
        <div className="md:h-[90vh] md:w-2/3 flex flex-col justify-center pt-8 order-2 md:order-none">
          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <p className="text-4xl md:text-8xl font-extrabold md:font-semibold">
              Capture Moments<span className="text-white">.</span>
            </p>
          </BoxReveal>
          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <h2 className="mt-[.5rem] text-xl md:text-3xl">
              Explore the world through the lens of a{" "}
              <span className="text-white">Photographer</span>
            </h2>
          </BoxReveal>
          <BoxReveal boxColor="#5046e6" duration={0.5}>
            <button className="mt-4 py-4 px-8 bg-primary-light hover:bg-primary-dark">Explore</button>
          </BoxReveal>
        </div>
        <div className='md:h-[90vh] md:w-1/3 flex items-center justify-center order-1 md:order-none'>
          <dotlottie-player
            src="https://lottie.host/76fbd9a4-0c15-42e4-8417-d24be2c77716/espunZV8kS.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '100%' }}
            loop
            autoplay>
          </dotlottie-player>
        </div>
      </div>

      <AnotherSection />
      <Photo />
      <Demo />
    </div>
  );
};

export default Hero;
