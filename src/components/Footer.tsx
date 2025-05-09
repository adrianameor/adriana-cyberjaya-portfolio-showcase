
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy py-8 border-t border-portfolio-lightestNavy">
      <div className="container mx-auto px-4 text-center">
        <a 
          href="#" 
          className="text-portfolio-teal font-mono text-xl font-semibold mb-4 inline-block"
        >
          A<span className="text-portfolio-white">.</span>
        </a>
        
        <nav className="my-6">
          <ul className="flex flex-wrap justify-center space-x-6 font-mono text-sm">
            <li><a href="#about" className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors">About</a></li>
            <li><a href="#skills" className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors">Skills</a></li>
            <li><a href="#projects" className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors">Projects</a></li>
            <li><a href="#certifications" className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors">Certifications</a></li>
            <li><a href="#contact" className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors">Contact</a></li>
          </ul>
        </nav>
        
        <p className="text-portfolio-slate text-sm">
          © {currentYear} Adriana. All Rights Reserved.
        </p>
        
        <p className="text-portfolio-slate text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
