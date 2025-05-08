
import React from 'react';
import { Award, Medal } from 'lucide-react';

const achievements = [
  {
    title: "Winner, Idea-Thon & Paper Presentation",
    organization: "HCET",
    description: "Competed among 450+ teams at the national level"
  },
  {
    title: "Winner, Hackathon, Ideation (Software Track)",
    organization: "Vignan University",
    description: "Competed among 100+ teams"
  },
  {
    title: "Runner, Debate Competition",
    organization: "National Anti-Corruption Day",
    description: "Demonstrated strong communication and persuasive skills"
  },
  {
    title: "3rd Place, Proto Verse",
    organization: "GITAM Hyderabad",
    description: "Software Prototype competition with 250+ teams at the national level"
  },
  {
    title: "Recipient, National Means-cum-Merit Scholarship",
    organization: "Government of India",
    description: "Recognized for academic excellence and financial need"
  }
];

const certifications = [
  {
    title: "Google Certified Android Developer",
    organization: "Google",
    year: "2024"
  },
  {
    title: "Machine Learning Certification",
    organization: "NPTEL",
    year: "2024"
  },
  {
    title: "Programming in Java Certification",
    organization: "NPTEL",
    year: "2024"
  },
  {
    title: "Certified Java Programmer",
    organization: "Infosys Springboard",
    year: "2023"
  },
  {
    title: "Entrepreneurship",
    organization: "EdX",
    year: "2022"
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">Achievements & Certifications</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <Award className="mr-3 text-accent" />
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="bg-secondary/20 p-6 rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-accent mb-2">{achievement.organization}</p>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
              <Medal className="mr-3 text-accent" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-secondary/20 p-6 rounded-lg hover:bg-secondary/30 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-accent mb-1">{cert.organization}</p>
                  <p className="text-gray-400">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
