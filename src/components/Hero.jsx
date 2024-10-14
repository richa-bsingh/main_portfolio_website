import React, { useRef } from "react";
import SpacemanCanvas from "./Spaceman";
import Position from "./Position";

const Hero = ({ scrollContainer }) => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      <div className='absolute inset-0 flex flex-col justify-between'>
        <div className="z-10 text-left p-40">
          {/* Apply the Ranade font to Richa Singh */}
          <h1 className='font-verdana font-bold text-white text-[40px] sm:text-[68px] md:text-[80px]'>
            Richa Singh
          </h1>
          <Position />
        </div>
        <div className="absolute inset-0">
          <SpacemanCanvas scrollContainer={scrollContainer} />
        </div>
      </div>

      {/* Apply Ranade font to the quote text */}
      <div className="font-verdana font-bold text-right p-60 text-[20px] sm:text-[30px] md:text-[36px] streaky-glow text-white absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center z-20">
        The world is <br/> one big data problem.
      </div>

      <img className="absolute inset-0 w-full h-full object-cover" src="./parallax/1Stars.svg" alt="" />
      <img className="absolute inset-0 w-full h-full object-cover" src="./parallax/3Mountain.svg" alt="" />
      <img className="absolute inset-0 w-full h-full object-cover" src="./parallax/4Mountain.svg" alt="" />
      <img className="absolute inset-0 w-full h-full object-cover" src="./parallax/5Crater.svg" alt="" />
    </section>
  );
};

export default Hero;
