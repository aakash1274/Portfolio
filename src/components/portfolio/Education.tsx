
import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Vasireddy Venkatadri Institute of Technology",
    location: "Guntur",
    duration: "Oct 2022 - Present",
    gpa: "8.0 CGPA"
  },
  {
    degree: "Higher Secondary Education",
    institution: "KBN Shine",
    location: "Vijayawada",
    duration: "Jul 2020 - Aug 2022",
    gpa: "9.1 GPA"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-secondary/50 rounded"></div>
            
            {/* Education items */}
            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } mb-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-16 md:pr-8' : 'md:pr-16 md:pl-8'
                } pl-10`}
                >
                  <div className="bg-secondary/40 p-6 rounded-lg hover:bg-secondary/60 transition-all">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-5 w-5 text-accent mr-2" />
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.institution}, {edu.location}</p>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-background/50 text-accent text-sm rounded-full">
                      {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
