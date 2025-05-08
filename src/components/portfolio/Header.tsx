
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Organizations", href: "#organizations" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-background/90 backdrop-blur-lg shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">
            Aakash<span className="text-accent">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact"
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 text-white font-medium transition-all duration-300 text-sm"
            >
              Get In Touch
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-secondary/95 backdrop-blur-lg mt-4 py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors text-lg font-medium px-4 py-2"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mx-4 px-4 py-2 rounded-lg bg-accent hover:bg-accent/80 text-white font-medium transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
