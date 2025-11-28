import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">BookResort</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Escape to paradise. Experience luxury, adventure, and relaxation in the heart of nature. Your perfect getaway awaits.
            </p>
          </div>

          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Services</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary transition-colors">Gallery</button>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary transition-colors">Admin Login</Link>
              </li>
            </ul>
          </div>

          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>123 Paradise Road, Tropical Island, TI 54321</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary shrink-0" />
                <span>info@bookresort.com</span>
              </li>
            </ul>
          </div>

          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors group">
                <Facebook className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors group">
                <Instagram className="w-5 h-5 text-white group-hover:text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors group">
                <Twitter className="w-5 h-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BookResort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
