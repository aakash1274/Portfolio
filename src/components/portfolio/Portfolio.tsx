
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
import SEO from '../SEO';

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
              link.classList.add('text-accent');
              link.classList.remove('text-gray-300');
            });
          }
        } else {
          const id = section.getAttribute('id');
          if (id) {
            const navLinks = document.querySelectorAll(`nav a[href="#${id}"]`);
            navLinks.forEach(link => {
              link.classList.remove('text-accent');
              link.classList.add('text-gray-300');
            });
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize particles background
    const initParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.classList.add('particles-container');
      particleContainer.style.position = 'fixed';
      particleContainer.style.top = '0';
      particleContainer.style.left = '0';
      particleContainer.style.width = '100%';
      particleContainer.style.height = '100%';
      particleContainer.style.zIndex = '-1';
      particleContainer.style.pointerEvents = 'none';
      
      document.body.prepend(particleContainer);
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        
        particle.classList.add('particle');
        particle.style.position = 'absolute';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = i % 2 === 0 ? 'rgba(64, 124, 255, 0.15)' : 'rgba(90, 64, 255, 0.15)';
        particle.style.borderRadius = '50%';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.filter = 'blur(1px)';
        particle.style.boxShadow = i % 2 === 0 ? '0 0 10px rgba(64, 124, 255, 0.4)' : '0 0 10px rgba(90, 64, 255, 0.4)';
        
        const duration = Math.random() * 60 + 30;
        const keyframes = `particleFloat ${duration}s infinite linear`;
        
        particle.style.animation = keyframes;
        
        particleContainer.appendChild(particle);
      }
      
      const style = document.createElement('style');
      style.textContent = `
        @keyframes particleFloat {
          0% { transform: translate(0, 0); }
          25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
          100% { transform: translate(0, 0); }
        }
      `;
      document.head.appendChild(style);
    };
    
    initParticles();
    
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <SEO 
        title="Aakash Eti | Information Technology Student & Developer"
        description="Portfolio of Aakash Eti, a motivated and detail-oriented IT undergraduate with experience in software development, cloud technologies, and UI/UX design."
        type="profile"
        name="Aakash Eti"
      />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-[100px]"></div>
      </div>
      <Header />
      <main className="relative z-10">
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
