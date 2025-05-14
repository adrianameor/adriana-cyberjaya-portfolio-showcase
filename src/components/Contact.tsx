
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // This can be removed if not used elsewhere, but let's keep it for now
import { Mail, User, MessageSquare } from "lucide-react"; // Added MessageSquare for WhatsApp icon

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-portfolio-navy">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="section-header mx-auto">Get In Touch</h2>
        <p className="text-portfolio-slate mb-8">
          I'm currently looking for software engineering internship opportunities. 
          Feel free to reach out if you have any questions or just want to connect!
        </p>
        
        <div className="bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg p-8 flex flex-col items-center">
          <p className="text-portfolio-lightSlate mb-6 text-lg">
            The best way to reach me is via WhatsApp.
          </p>
          <a
            href="https://wa.me/60167199579" // IMPORTANT: Replace YOUR_PHONE_NUMBER with your actual WhatsApp number (e.g., 60123456789)
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-portfolio-teal hover:bg-portfolio-teal/80 text-portfolio-navy font-medium px-8 py-3 text-lg flex items-center gap-2"
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </Button>
          </a>
          <p className="text-portfolio-slate mt-8 text-sm">
            Alternatively, you can email me at <a href="mailto:adrianameorazman@gmail.com" className="text-portfolio-teal hover:underline">adrianameorazman@gmail.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
