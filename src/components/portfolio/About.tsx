
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-white">Who I Am</h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. 
              With over 5 years of experience in web development, I've worked on projects ranging from small business websites to 
              complex enterprise applications.
            </p>
            <p className="text-gray-300 mb-6">
              My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code 
              that scales well and provides real value to users and businesses alike.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-white mb-2">Location</h4>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Experience</h4>
                <p className="text-gray-400">5+ Years</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Education</h4>
                <p className="text-gray-400">B.S. Computer Science</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Languages</h4>
                <p className="text-gray-400">English, Spanish</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/40 via-secondary to-accent/40 p-1">
              <div className="absolute inset-0 bg-gray-900 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-full filter blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
