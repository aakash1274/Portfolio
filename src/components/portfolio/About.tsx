
import React from 'react';
import { MapPin, Phone, Mail, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-transparent via-[#111827]/30 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-white">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm a passionate Information Technology undergraduate with a focus on software development, cloud technologies, and UI/UX design.
              I have proven ability to lead teams, manage projects, and build scalable applications using modern tech stacks.
            </p>
            <p className="text-gray-300 mb-8">
              My approach combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code 
              that provides real value to users and businesses alike.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-400">Vijayawada, Andhra Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">aakasheti4555@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+91 9985623623</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-all duration-300">
                  <Code className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white">LeetCode</h4>
                  <a 
                    href="https://leetcode.com/u/aakasheti4555/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    leetcode.com/u/aakasheti4555
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-on-scroll">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-30 -z-10 transform rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-xl shadow-purple-500/10">
                <img 
                  src="/lovable-uploads/1df301da-c82b-4e9d-b986-25aa2345b535.png"
                  alt="Aakash Eti" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-black/30 backdrop-blur-md rounded-lg p-3 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Aakash Eti</h4>
                      <p className="text-sm text-gray-300">Software Developer</p>
                    </div>
                    <div className="h-3 w-3 bg-green-400 rounded-full relative">
                      <span className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
