
import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  icon?: string;
}

const skillsData: SkillProps[] = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 88 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'MongoDB', level: 78 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'AWS', level: 70 },
  { name: 'Docker', level: 72 },
];

const SkillBar: React.FC<SkillProps> = ({ name, level }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="text-xs font-medium text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
          style={{ width: `${level}%`, transition: 'width 1.5s ease-in-out' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient-primary">My Skills</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div className="mt-16">
            <h3 className="text-xl font-semibold mb-6 text-center text-white">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'GraphQL', 'Redux', 'Figma', 'Jest', 'Express', 'Webpack', 'Firebase', 'Vercel', 'Netlify', 'SASS', 'Material UI'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-secondary rounded-full text-sm text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
