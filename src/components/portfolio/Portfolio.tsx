
import React, { useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Organizations from './Organizations';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const scroll = window.scrollY;
        
        if (scroll >= sectionTop && scroll < sectionBottom) {
          const id = section.getAttribute('id');
          if (id) {
            const navLinks = document.querySelectorAll(`nav a[href="#${id}"]`);
            navLinks.forEach(link => {
              link.classList.add('text-white');
              link.classList.remove('text-gray-300');
            });
          }
        } else {
          const id = section.getAttribute('id');
          if (id) {
            const navLinks = document.querySelectorAll(`nav a[href="#${id}"]`);
            navLinks.forEach(link => {
              link.classList.remove('text-white');
              link.classList.add('text-gray-300');
            });
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Organizations />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
