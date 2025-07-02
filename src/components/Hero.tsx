import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-float">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">HJ</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="gradient-text">Harissh J</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-6 font-light">
              Software Developer & Technology Enthusiast
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building scalable applications 
              with modern technologies. Focused on delivering exceptional user experiences.
            </p>

            {/* Location */}
            <div className="flex items-center justify-center text-gray-300 mb-8">
              <MapPin size={20} className="mr-2" />
              <span>Chennai, Tamil Nadu, India</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200 p-3 glass-effect rounded-full hover:scale-110 transform transition-transform">
                <Github size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200 p-3 glass-effect rounded-full hover:scale-110 transform transition-transform">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors duration-200 p-3 glass-effect rounded-full hover:scale-110 transform transition-transform">
                <Mail size={24} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 transform font-semibold shadow-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="glass-effect text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 transform font-semibold"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;