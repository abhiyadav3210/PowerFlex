import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">PowerFlex</h2>
          <p className="text-sm">
            PowerFlex simplifies the hiring of certified gym trainers through a centralized platform. 
            Companies can post requirements, and trainers can apply with verified profiles and certifications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/jobs" className="hover:text-white">Find Trainers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2">
            <li>Certified Trainer Profiles</li>
            <li>Application Status Tracking</li>
            <li>Real-Time Communication</li>
            <li>Secure Login & Role Access</li>
            <li>Easy Onboarding Process</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-gray-900">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} PowerFlex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
