import { Briefcase, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company: 'Blue Stock Fintech',
    period: 'Aug 2024 – Sep 2024',
    certificateUrl: 'https://drive.google.com/file/d/181YCmRTM0dmRADKhSzcE3wF4oPooxBdp/view',
    highlights: [
      'Hands-on experience in Java backend development using Spring Boot',
      'Developed REST APIs and implemented business logic for financial applications',
      'Managed application data using MySQL and implemented CRUD operations',
      'Worked with microservice-style architecture for improved scalability',
      'Followed Agile workflows and sprint-based development methodology',
      'Used Git for version control and participated in code reviews',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative bg-card">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">My Journey</p>
            <h2 className="section-title">Work Experience</h2>
          </div>
        </ScrollReveal>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index}>
              <div className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background" />

                {/* Content */}
                <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold font-display text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" size="sm" asChild>
                    <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
