
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Code, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] pt-16 pb-8 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block">Aakash Eti</Link>
            <p className="text-gray-400 mb-6">
              Creating elegant solutions to complex problems with a focus on software development, cloud technologies, and UI/UX design.
            </p>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-accent transition-colors flex items-center"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500 mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact Info</h5>
            <div className="space-y-3">
              <a 
                href="mailto:aakasheti4555@gmail.com" 
                className="flex items-center text-gray-400 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                aakasheti4555@gmail.com
              </a>
              <a 
                href="tel:+919985623623" 
                className="flex items-center text-gray-400 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                +91 9985623623
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="h-5 w-5 mr-2 text-pink-400 mt-0.5" />
                <span>Vijayawada, Andhra Pradesh</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/aakash1274" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-full text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aakasheti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-full text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://leetcode.com/u/aakasheti4555/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 transition-colors p-2 rounded-full text-gray-400 hover:text-white"
                aria-label="LeetCode"
              >
                <Code className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aakash Eti. All rights reserved.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
