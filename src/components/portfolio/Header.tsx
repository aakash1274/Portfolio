
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-effect' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">John Doe</Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="animated-underline text-sm font-medium tracking-wider uppercase text-gray-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-3 space-y-3">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block py-2 px-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
