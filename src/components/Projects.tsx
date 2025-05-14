
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const projectsData: Project[] = [
  {
    title: "Chess Application",
    description: "Interactive Kawazam chess game as GUI-based Java Application with multiple difficulty levels and multiplayer functionality.",
    technologies: ["Java"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/adrianameor/chess-application.git" 
  },
  {
    title: "Robot Battle Game",
    description: "A strategy-based game in command-line where robots battle against each other in a virtual arena.",
    technologies: ["C++"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/adrianameor/robot.git" 
  },
  {
    title: "Car Wash Simulator",
    description: "Simulation tool that models and predicts car arrival patterns at different wash bay.",
    technologies: ["Freemat"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/adrianameor/car-wash-simulator.git"
  },
  {
    title: "Tourism in Denmark Website",
    description: "Interactive website showcasing tourist attractions, accommodations, and cultural experiences in Denmark.",
    technologies: ["HTML", "CSS"],
    image: "/tourism.jpg",
    link: "https://github.com/adrianameor/tourism-website.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-20 bg-portfolio-navy">
      <h2 className="section-header">Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <Card key={project.title} className="bg-portfolio-lightNavy border-portfolio-lightestNavy overflow-hidden project-card opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-portfolio-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-portfolio-slate mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-portfolio-navy/50 text-portfolio-teal border-portfolio-teal">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-teal text-sm hover:underline flex items-center group"
              >
                Learn more 
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            )}

            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
