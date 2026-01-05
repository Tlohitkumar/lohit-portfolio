import { Database, Server, Code2, Wrench, Layers, GitBranch } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Programming Language',
    icon: Code2,
    skills: ['Java'],
  },
  {
    title: 'Backend Technologies',
    icon: Server,
    skills: ['Spring Boot', 'Spring MVC', 'JPA', 'REST API Development', 'Hibernate'],
  },
  {
    title: 'Core Concepts',
    icon: Layers,
    skills: ['Core Java', 'OOP', 'Design Principles', 'DSA', 'Collections Framework'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Docker', 'Maven', 'Postman', 'Jira', 'Jenkins', 'Azure DevOps'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">What I Know</p>
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mx-auto mt-4">
              A comprehensive toolkit for building robust, scalable backend systems
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 100}>
              <div
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <category.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-semibold font-display text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
