
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <Link to="/" className="text-2xl font-bold text-gradient mb-4 inline-block">John Doe</Link>
            <p className="text-gray-400 mb-6">
              Creating elegant solutions to complex problems with a focus on clean code and beautiful design.
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
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map(platform => (
                <a 
                  key={platform} 
                  href="#" 
                  className="text-gray-400 hover:text-accent transition-colors"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
                  </svg>
                </a>
              ))}
            </div>
            <p className="text-gray-400">
              <a href="mailto:hello@johndoe.com" className="hover:text-accent transition-colors">
                hello@johndoe.com
              </a>
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
