import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          OasisStay
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className={`font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('booking-form')}
            className="px-5 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors shadow-md"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4">
          <button 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsOpen(false);
            }}
            className="text-gray-800 font-medium hover:text-primary text-left"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-gray-800 font-medium hover:text-primary text-left"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('gallery')}
            className="text-gray-800 font-medium hover:text-primary text-left"
          >
            Gallery
          </button>
          <button 
            onClick={() => scrollToSection('booking-form')}
            className="px-5 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors text-center"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
