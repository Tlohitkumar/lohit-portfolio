import { Award, ExternalLink, Cloud, Users, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure Certified DevOps Professional',
    organization: 'Oracle',
    description: 'CI/CD pipelines and cloud deployment workflows',
    certificateUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=C040B33FD3663F437DEB42AEDA242B142CF45E5B6940770BE60BB24CDB433B66',
    icon: Cloud,
  },
  {
    title: 'Scrum Fundamentals Certified',
    organization: 'SCRUMstudy',
    description: 'Agile principles and Scrum framework',
    certificateUrl: 'https://drive.google.com/file/d/1XDGtqAG-fo027oiH7-1sAIYnPLph2BOJ/view',
    icon: Users,
  },
  {
    title: 'Introduction to Java Spring Framework',
    organization: 'Simplilearn | 2025',
    description: 'Spring MVC, layered architecture, Spring IoC',
    certificateUrl: 'https://drive.google.com/file/d/1dHEmJA8yT2FYsJRYP92xWFRLa3Vq9Z8Z/view',
    icon: Server,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative bg-card">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">Validated Skills</p>
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mx-auto mt-4">
              Professional certifications demonstrating expertise and commitment to growth
            </p>
          </div>
        </ScrollReveal>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.title} direction="scale" delay={index * 100}>
              <div
                className="group p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <cert.icon className="text-accent" size={24} />
                </div>

                {/* Content */}
                <h3 className="font-semibold font-display text-foreground mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{cert.organization}</p>
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                {/* View Button */}
                <Button variant="ghost" size="sm" className="group/btn" asChild>
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <Award size={16} />
                    View Certificate
                    <ExternalLink size={14} className="ml-1 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
