
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-20 bg-portfolio-navy">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="section-header mx-auto">Get In Touch</h2>
        <p className="text-portfolio-slate mb-8">
          I'm currently looking for software engineering internship opportunities. 
          Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <div className="bg-portfolio-lightNavy border border-portfolio-lightestNavy rounded-lg p-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-portfolio-lightestSlate flex items-center gap-2">
                  <User size={16} className="text-portfolio-teal" />
                  Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-portfolio-navy border-portfolio-lightestNavy focus:border-portfolio-teal"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-portfolio-lightestSlate flex items-center gap-2">
                  <Mail size={16} className="text-portfolio-teal" />
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-portfolio-navy border-portfolio-lightestNavy focus:border-portfolio-teal"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-portfolio-lightestSlate">Message</label>
              <Textarea 
                id="message" 
                placeholder="How can I help you?" 
                className="bg-portfolio-navy border-portfolio-lightestNavy focus:border-portfolio-teal min-h-32"
              />
            </div>
            
            <Button 
              className="bg-portfolio-teal hover:bg-portfolio-teal/80 text-portfolio-navy font-medium w-full"
            >
              Send Message
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-portfolio-lightestNavy text-center">
            <p className="text-portfolio-lightSlate">Or reach me directly at:</p>
            <a href="mailto:adriana@example.com" className="text-portfolio-teal hover:underline">
              adriana@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
