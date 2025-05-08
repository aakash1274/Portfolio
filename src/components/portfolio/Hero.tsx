
import React from 'react';
import { ArrowDown, Github, Linkedin, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#121c34] to-[#0f172a]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Animated gradient circles */}
        <div className="absolute top-1/4 right-1/4 h-96 w-96 bg-blue-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 bg-purple-500 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Binary code floating effect - absolute positioned and animated with CSS */}
        <div className="binary-rain absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <style jsx>{`
            @keyframes binary-fall {
              from {
                transform: translateY(-100%);
              }
              to {
                transform: translateY(100vh);
              }
            }
            .binary-text {
              position: absolute;
              color: rgba(64, 156, 255, 0.7);
              font-family: monospace;
              animation: binary-fall linear infinite;
            }
          `}</style>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="binary-text"
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 12 + 10}px`,
                opacity: Math.random() * 0.4 + 0.3,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Array.from({ length: 30 }).map(() => Math.round(Math.random())).join('')}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
            variants={itemVariants}
          >
            <span className="text-gradient-primary text-sm font-medium">Information Technology Student & Developer</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Aakash Eti</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-8"
            variants={itemVariants}
          >
            Turning Ideas Into <span className="relative">
              <span className="absolute -inset-1 bg-blue-500/20 blur-sm rounded"></span>
              <span className="relative text-blue-300">Digital Reality</span>
            </span>
          </motion.p>
          
          <motion.p 
            className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-10"
            variants={itemVariants}
          >
            Motivated and detail-oriented undergraduate with hands-on experience in software development, 
            cloud technologies, and UI/UX design.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg border border-white/20 text-white font-medium bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center mt-12 space-x-4"
            variants={itemVariants}
          >
            <a
              href="https://github.com/aakash1274"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aakasheti/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://leetcode.com/u/aakasheti4555/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition-colors duration-300"
              aria-label="LeetCode"
            >
              <Code className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.a 
            href="#about" 
            className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
