
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-background/80">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 bg-accent/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="opacity-0 animate-fadeUp text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-gradient">Aakash Eti</span>
          </h1>
          
          <p className="opacity-0 animate-fadeUp delay-100 text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8">
            Information Technology Student & Developer
          </p>
          
          <p className="opacity-0 animate-fadeUp delay-200 max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-400 mb-10">
            Motivated and detail-oriented undergraduate with hands-on experience in software development, cloud technologies, and UI/UX design.
          </p>
          
          <div className="opacity-0 animate-fadeUp delay-300 flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-primary hover:bg-primary/80 text-white font-medium transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-white font-medium transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a 
            href="#about" 
            className="opacity-0 animate-fadeUp delay-400 flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
