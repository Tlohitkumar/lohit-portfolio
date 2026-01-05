import { GraduationCap, Code, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-card">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">Get to Know Me</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Java Backend Developer with a strong foundation in building 
              scalable, efficient server-side applications. My journey from Electrical Engineering 
              to Computer Science has given me a unique perspective on problem-solving and 
              system design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in Spring Boot, REST API development, and microservices architecture. 
              My focus is on writing clean, maintainable code while ensuring optimal performance 
              and scalability of backend systems.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold font-display text-primary">1+</p>
                <p className="text-sm text-muted-foreground">Years Exp</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold font-display text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <p className="text-3xl font-bold font-display text-primary">3+</p>
                <p className="text-sm text-muted-foreground">Certificates</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold font-display flex items-center gap-2">
              <GraduationCap className="text-accent" />
              Education
            </h3>
            
            <div className="space-y-4">
              {/* M.Tech */}
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">M.Tech – Computer Science Engineering</h4>
                    <p className="text-muted-foreground">Koneru Lakshmaiah Deemed to be University</p>
                  </div>
                  <span className="text-sm text-accent font-medium">2024–2026</span>
                </div>
              </div>

              {/* B.Tech */}
              <div className="p-6 bg-secondary rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">B.Tech – Electrical and Electronics Engineering</h4>
                    <p className="text-muted-foreground">NRI Institute of Technology</p>
                  </div>
                  <span className="text-sm text-accent font-medium">2020–2024</span>
                </div>
              </div>
            </div>

            {/* Career Transition Note */}
            <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <Code className="text-primary mt-1 flex-shrink-0" size={20} />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Career Transition:</span> Successfully transitioned from 
                Electrical Engineering to backend software development, bringing analytical skills and a fresh perspective 
                to software architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
