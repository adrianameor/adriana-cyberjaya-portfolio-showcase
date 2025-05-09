
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SkillProps {
  name: string;
  level: number;
  index: number;
}

const skillsData = [
  { name: "Python", level: 80 },
  { name: "Java", level: 85 },
  { name: "C++", level: 75 },
  { name: "Freemat", level: 70 },
  { name: "MySQL", level: 75 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "PHP", level: 65 },
];

const Skill = ({ name, level, index }: SkillProps) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setWidth(level);
          }, index * 100);
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level, index]);
  
  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-portfolio-lightestSlate font-mono text-sm">{name}</span>
        <span className="text-portfolio-teal font-mono text-sm">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-20 bg-portfolio-navy">
      <h2 className="section-header">My Skills</h2>
      
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
        {skillsData.map((skill, index) => (
          <Skill 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className={cn(
          "bg-portfolio-lightNavy rounded-lg p-6 border-l-4 border-portfolio-teal",
          "opacity-0 animate-fade-in-up"
        )}>
          <h3 className="text-xl font-semibold mb-3">Frontend</h3>
          <p className="text-portfolio-slate">Experience with responsive design, CSS frameworks, and modern UI development.</p>
        </div>
        
        <div className={cn(
          "bg-portfolio-lightNavy rounded-lg p-6 border-l-4 border-portfolio-teal",
          "opacity-0 animate-fade-in-up delay-100"
        )}>
          <h3 className="text-xl font-semibold mb-3">Backend</h3>
          <p className="text-portfolio-slate">Knowledge of server-side programming, database management, and API development.</p>
        </div>
        
        <div className={cn(
          "bg-portfolio-lightNavy rounded-lg p-6 border-l-4 border-portfolio-teal",
          "opacity-0 animate-fade-in-up delay-200"
        )}>
          <h3 className="text-xl font-semibold mb-3">Problem Solving</h3>
          <p className="text-portfolio-slate">Strong analytical skills with experience in algorithm design and optimization.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
