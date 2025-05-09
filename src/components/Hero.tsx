
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Software Engineering Intern.";
  
  useEffect(() => {
    if (isTyping && displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayText === fullText) {
      setIsTyping(false);
    }
  }, [displayText, isTyping, fullText]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-portfolio-teal font-mono mb-4">Hi, my name is</p>
        </div>
        <div className="opacity-0 animate-fade-in-up delay-100">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-white mb-4">
            Adriana.
          </h1>
        </div>
        <div className="opacity-0 animate-fade-in-up delay-200">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6">
            {displayText}
            <span className="text-portfolio-teal typing-cursor">|</span>
          </h2>
        </div>
        <div className="opacity-0 animate-fade-in-up delay-300 max-w-xl">
          <p className="text-portfolio-slate text-lg mb-10">
            I'm a Computer Science student at MMU Cyberjaya with a passion for building software solutions.
            Currently focused on expanding my skills through practical experience and academic excellence.
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-up delay-400">
          <Button 
            variant="outline" 
            className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10 font-mono"
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-portfolio-teal">
          <span className="text-xs mb-2 font-mono">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
