
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-portfolio-navy/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a 
          href="#" 
          className="text-portfolio-teal font-mono text-xl font-semibold"
        >
          A<span className="text-portfolio-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-portfolio-lightSlate hover:text-portfolio-teal transition-colors font-mono text-sm relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-portfolio-teal after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:after:origin-bottom-left"
            >
              <span className="text-portfolio-teal mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-lightSlate p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span className={`block h-0.5 bg-portfolio-teal transition-all duration-300 ${mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-0.5 bg-portfolio-teal transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`block h-0.5 bg-portfolio-teal transition-all duration-300 ${mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[62px] right-0 bottom-0 w-[70%] bg-portfolio-lightNavy z-40 shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-portfolio-lightSlate hover:text-portfolio-teal px-6 py-2 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-portfolio-teal mr-1 block text-xs">0{index + 1}.</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
