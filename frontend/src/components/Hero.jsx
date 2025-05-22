import React from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaSearch, FaUserPlus } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-teal-700 to-blue-700 text-white py-20 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Hire Certified <span className="text-yellow-300">Gym Trainers</span> <br />
            Quickly & Transparently
          </h1>
          <p className="text-lg md:text-xl">
            PowerFlex is the ultimate platform for hiring skilled gym trainers.
            Post job openings, verify trainer profiles, and manage applications in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            
            
          </div>
        </div>

        {/* Right Side - Image/Illustration */}
        <div className="md:w-1/2">
          <img
            src="https://cdn.dribbble.com/users/2400293/screenshots/10533678/media/fec104c9026e96319b3e70965974a1a3.jpg?resize=1200x900&vertical=top"
            alt="Gym Trainer Illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
