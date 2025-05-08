
import React from 'react';
import { Award, Certificate } from 'lucide-react';

const achievements = [
  "Winner, Idea-Thon & Paper Presentation – HCET (450+ teams, national level)",
  "Winner, Hackathon, Ideation (Software Track) – Vignan University (100+ teams)",
  "Runner, Debate Competition – National Anti-Corruption Day",
  "3rd Place, Proto Verse – GITAM Hyderabad (250+ teams, national level, Software Prototype)",
  "Recipient, National Means-cum-Merit Scholarship – Government of India"
];

const certifications = [
  "Google Certified Android Developer – Google (2024)",
  "Machine Learning Certification – NPTEL (2024)",
  "Programming in Java Certification – NPTEL (2024)",
  "Certified Java Programmer – Infosys Springboard (2023)",
  "Entrepreneurship – EdX (2022)"
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">Achievements & Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-accent h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-white">Achievements</h3>
            </div>
            
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="bg-secondary/30 p-4 rounded-lg hover:bg-secondary/40 transition-colors flex items-start">
                  <span className="inline-flex items-center justify-center text-accent bg-accent/10 w-6 h-6 rounded-full text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Certificate className="text-accent h-7 w-7 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            
            <ul className="space-y-4">
              {certifications.map((certification, index) => (
                <li key={index} className="bg-secondary/30 p-4 rounded-lg hover:bg-secondary/40 transition-colors flex items-start">
                  <span className="inline-flex items-center justify-center text-accent bg-accent/10 w-6 h-6 rounded-full text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{certification}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
