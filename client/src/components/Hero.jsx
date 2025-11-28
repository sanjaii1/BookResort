import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
  
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
    
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

    
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="mb-4 text-5xl font-bold md:text-7xl drop-shadow-lg">
          OasisStay Resort
        </h1>
        <p className="mb-8 text-xl md:text-2xl font-light tracking-wider drop-shadow-md">
          Escape • Relax • Enjoy
        </p>
        <button
          onClick={scrollToBooking}
          className="rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
