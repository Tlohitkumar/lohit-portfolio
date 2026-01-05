import { Github, ExternalLink, Server, Database, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Store',
    description: 'Full-stack e-commerce application with Spring Boot backend and React frontend. Features product management, category organization, and seamless API integration.',
    techStack: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
    githubUrl: 'https://github.com/Tlohitkumar/Ecommerce-Full-stack-store',
    highlights: [
      'Designed Spring Boot layered architecture',
      'Built REST APIs for product and category management',
      'Applied dependency injection and OOP principles',
      'Integrated React frontend using Axios',
    ],
    icon: Server,
  },
  {
    title: 'Patient Management System',
    description: 'Backend services for healthcare management including patient records and appointment scheduling. Built with microservice-style architecture for maintainability.',
    techStack: ['Java', 'Spring Boot', 'MySQL', 'JPA', 'Hibernate'],
    githubUrl: 'https://github.com/Tlohitkumar/java-spring-microservices',
    highlights: [
      'Developed backend services for patient management',
      'Implemented REST APIs using JPA and Hibernate',
      'Followed microservice-style separation',
      'Ensured data integrity and validation',
    ],
    icon: Database,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">What I've Built</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real-world applications showcasing backend development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Project Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <project.icon className="text-primary" size={28} />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Code className="text-accent flex-shrink-0 mt-0.5" size={14} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="default" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
