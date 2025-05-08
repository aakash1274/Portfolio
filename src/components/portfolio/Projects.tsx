
import React from 'react';
import { ExternalLink, Link, Github } from 'lucide-react';

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
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, user authentication, cart functionality, and payment integration using Stripe.",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity application for teams to manage projects, assign tasks, track progress, and collaborate efficiently.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Healthcare Dashboard",
    description: "An analytics dashboard for healthcare providers to monitor patient data, appointments, and medical records securely.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Weather Application",
    description: "A beautiful weather app that provides real-time forecasts, interactive maps, and customizable alerts based on location.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "Weather API"],
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
          Here are some of my recent projects that showcase my skills and experience in web development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com" 
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
