
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const projectsData: ProjectProps[] = [
  {
    title: "Kisan Connect",
    description: "Leading development of an agricultural app using Flutter, Firebase, and Node.js. Implemented multilingual support, weather API integration, and voice assistance to connect farmers with buyers.",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Flutter", "Firebase", "Node.js", "Agriculture", "Machine Learning"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Chat Feature",
    description: "Developed an NLP-based chat feature using Python, Flask, and NLTK; deployed the app using Firebase. Enabled basic conversational functionality and real-time interactions.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Python", "Flask", "NLTK", "Firebase", "NLP"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Front End Development",
    description: "Boosted website performance by 50% and lead quality by 100% through frontend revamp and targeted outreach for Eklavya Solutions.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["HTML5", "CSS3", "JavaScript", "UI/UX", "Performance Optimization"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Android UI/UX Optimization",
    description: "Optimized Android UI/UX for better performance and user experience during my internship at Google.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Android", "UI/UX Design", "Java", "Performance Optimization"],
    demoLink: "#",
    codeLink: "#"
  },
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, demoLink, codeLink }) => {
  return (
    <div className="animated-border rounded-xl overflow-hidden bg-secondary h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6 text-sm">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs px-2 py-1 bg-background/80 text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={demoLink} 
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
          </a>
          <a 
            href={codeLink} 
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <Github className="h-4 w-4 mr-1" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          <span className="text-gradient-primary">My Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of my key projects that showcase my skills and experience in software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/aakash1274" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-accent hover:bg-accent/80 text-white font-medium transition-all duration-300"
          >
            <Github className="h-5 w-5 mr-2" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
