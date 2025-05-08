
import React from 'react';
import { Users } from 'lucide-react';

const organizationsData = [
  {
    name: "Association for Computing Machinery (ACM)",
    role: "Member",
    description: "Attended conferences and workshops which enhanced my skills and network."
  },
  {
    name: "Student Activity Council, VVIT",
    role: "Events & Discipline Council Leader",
    description: "Coordinated large-scale campus events including TEDx VVIT, VVIT Fest, Sports Day, and Theatre Day, demonstrating leadership and organizational skills."
  }
];

const Organizations: React.FC = () => {
  return (
    <section id="organizations" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">Organizations</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationsData.map((org, index) => (
              <div key={index} className="bg-background/50 rounded-lg p-6 hover:bg-background/70 transition-colors">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-accent/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{org.name}</h3>
                    <p className="text-accent text-sm">{org.role}</p>
                  </div>
                </div>
                <p className="text-gray-400">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;
