
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experienceData = [
  {
    position: "Android Developer Intern",
    company: "Google",
    location: "Remote",
    duration: "Mar 2024 - Present",
    responsibilities: [
      "Optimized Android UI/UX for better performance and user experience."
    ]
  },
  {
    position: "Front End Developer Intern & Marketing and Sales Intern",
    company: "Eklavya Solutions",
    location: "Bengaluru",
    duration: "Feb 2024 - May 2024",
    responsibilities: [
      "Boosted website performance by 50% through frontend revamp",
      "Improved lead quality by 100% through targeted outreach"
    ]
  },
  {
    position: "Founder",
    company: "Kisan Connect",
    location: "Vijayawada",
    duration: "Dec 2024 - Present",
    responsibilities: [
      "Leading development of an agricultural app using Flutter, Firebase, and Node.js",
      "Building a platform to empower farmers using digital technologies and Machine Learning"
    ]
  },
  {
    position: "Events & Discipline Council Leader",
    company: "Student Activity Council, VVIT",
    duration: "Mar 2024 - Feb 2025",
    responsibilities: [
      "Coordinated large-scale campus events including TEDx VVIT, VVIT Fest, Sports Day, and Theatre Day",
      "Demonstrated leadership and organizational skills"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">Work Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {experienceData.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-10 border-l-2 border-accent/50 hover:border-accent transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                
                {/* Content */}
                <div className="bg-secondary/30 p-6 rounded-lg hover:bg-secondary/50 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                      <p className="text-gray-300">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                    </div>
                    <div className="flex items-center text-accent mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
