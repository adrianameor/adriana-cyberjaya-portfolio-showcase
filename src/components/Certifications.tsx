
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificationsData = [
  {
    title: "Huawei HCIA - Big Data",
    issuer: "Huawei",
    date: "Aug 2023",
    description: "Certification focusing on big data frameworks, analytics, and processing systems.",
    skills: ["Hadoop", "Data Analytics", "Data Processing"],
    certificateLink: "/hciaBigData.png"
  },
  {
    title: "Microsoft Networking & Insight",
    issuer: "Microsoft",
    date: "Mar 2023",
    description: "Advanced networking concepts and monitoring insights for Microsoft infrastructures.",
    skills: ["Network Design", "System Monitoring", "Infrastructure Management"],
    certificateLink: "/ADRIANA BINTI MEOR AZMAN - Certificate of Participation.pdf"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="container mx-auto px-4 py-20 bg-portfolio-navy">
      <h2 className="section-header">Certifications & Achievements</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {certificationsData.map((cert, index) => (
          <Card 
            key={cert.title} 
            className="bg-portfolio-lightNavy border-portfolio-lightestNavy opacity-0 animate-fade-in-up" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-portfolio-white">{cert.title}</CardTitle>
                <Badge variant="outline" className="bg-portfolio-teal/10 text-portfolio-teal border-portfolio-teal">
                  {cert.date}
                </Badge>
              </div>
              <p className="text-sm text-portfolio-lightSlate">Issued by {cert.issuer}</p>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-portfolio-slate mb-4">
                {cert.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-transparent text-portfolio-lightestSlate border-portfolio-lightestSlate">
                    {skill}
                  </Badge>
                ))}
              </div>
              {cert.certificateLink && (
                <a 
                  href={cert.certificateLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-4 inline-block text-portfolio-teal hover:underline"
                >
                  View Certificate
                </a>
              )}
            </CardContent>
          </Card>
        ))}

        {/* Scholarship Card */}
        <Card 
          className="bg-portfolio-lightNavy border-portfolio-lightestNavy col-span-full md:col-span-1 opacity-0 animate-fade-in-up" 
          style={{ animationDelay: "300ms" }}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle className="text-portfolio-white">Yayasan Universiti Multimedia Scholarship</CardTitle>
              <Badge variant="outline" className="bg-portfolio-teal/10 text-portfolio-teal border-portfolio-teal">
                2021-Present
              </Badge>
            </div>
            <p className="text-sm text-portfolio-lightSlate">MMU Foundation</p>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-portfolio-slate mb-4">
              Awarded based on academic excellence and potential contribution to the field of computer science.
              This scholarship supports outstanding students throughout their academic journey.
            </CardDescription>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-transparent text-portfolio-lightestSlate border-portfolio-lightestSlate">
                Academic Excellence
              </Badge>
              <Badge variant="outline" className="bg-transparent text-portfolio-lightestSlate border-portfolio-lightestSlate">
                Merit-Based
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Certifications;
