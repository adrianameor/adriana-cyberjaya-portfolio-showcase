
import React from "react";
import { Card } from "@/components/ui/card";
import { Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <h2 className="section-header">About Me</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Hello! I'm Adriana, a Computer Science student at Multimedia University (MMU) Cyberjaya. 
            I'm passionate about software development and problem-solving. My academic journey has equipped 
            me with strong foundations in various programming languages and technologies.
          </p>
          <p className="mb-4">
            I'm currently looking to apply my skills in a practical setting through internship opportunities.
            My goal is to contribute to meaningful projects while continuing to develop my technical expertise
            and professional skills in the software engineering field.
          </p>
          <p className="mb-6">
            Outside of coding, I enjoy exploring new technologies, participating in hackathons, 
            and doing volunteer work to stay engaged with the community and grow beyond the classroom.
          </p>
        </div>

        <div>
          <Card className="bg-portfolio-lightNavy border-portfolio-lightestNavy p-6">
            <div className="flex items-center mb-6">
              <Book className="text-portfolio-teal mr-3" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-portfolio-white font-medium">Bachelor of Computer Science in Software Engineering</h4>
                <p className="text-portfolio-slate">Multimedia University (MMU), Cyberjaya</p>
                <p className="text-sm text-portfolio-lightSlate">Jul 2021 - Jul 2026</p>
              </div>
              
              <div className="pt-4 border-t border-portfolio-lightestNavy">
                <h4 className="text-portfolio-teal font-medium">Scholarship Recipient</h4>
                <p className="text-portfolio-white">Yayasan Universiti Multimedia</p>
                <p className="text-sm text-portfolio-lightSlate">Awarded for academic excellence</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
