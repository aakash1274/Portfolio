
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">Aakash Eti</Link>
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
                    className="hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Let's Connect</h5>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://github.com/aakash1274" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/aakasheti/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://leetcode.com/aakash4555/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="LeetCode"
              >
                <Code className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">
              <a href="mailto:aakasheti4555@gmail.com" className="hover:text-accent transition-colors">
                aakasheti4555@gmail.com
              </a>
            </p>
            <p className="text-gray-400 mt-2">
              <a href="tel:+919985623623" className="hover:text-accent transition-colors">
                +91 9985623623
              </a>
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aakash Eti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
