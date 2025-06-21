import React, { useState, useEffect } from 'react';
import { 
 
  User,
  
} from 'lucide-react';
// Hero Section Component
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-gray-600 text-lg flex items-center gap-2">
              Hey, I'm Devika 
              <span className="animate-bounce">👋</span>
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Frontend
              </span>
              <br />
              <span className="text-gray-900">Developer</span>
            </h1>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            I'm a frontend developer based in India, I'll help you build beautiful websites your users will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
           <a href="#contact">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Get In Touch
            </button>
          </a>

           
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* <div className="w-32 h-32 rounded-full overflow-hidden"> */}
                  <img
                    src="/profile1.jpg"
                    alt="Devika Rajeevan"
                    className="w-full h-full object-cover"
                  />
                {/* </div> */}

              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection


