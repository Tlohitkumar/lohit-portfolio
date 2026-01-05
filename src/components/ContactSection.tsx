import { Phone, Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '6303082637',
    href: 'tel:+916303082637',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'lohitkumar0103@gmail.com',
    href: 'mailto:lohitkumar0103@gmail.com',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'lohitkumar7',
    href: 'https://www.linkedin.com/in/lohitkumar7/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Tlohitkumar',
    href: 'https://github.com/Tlohitkumar',
  },
  {
    icon: ExternalLink,
    label: 'LeetCode',
    value: 'lohit_23',
    href: 'https://leetcode.com/u/lohit_23/',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle mx-auto mt-4">
              I'm always open to discussing new opportunities, projects, or just having a chat about backend development.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold font-display text-foreground mb-6">
                  Contact Information
                </h3>
                
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold font-display text-foreground mb-6">
                  Social Profiles
                </h3>
                
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="text-accent" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                    </div>
                    <ExternalLink className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal delay={200}>
            <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-2xl font-bold font-display text-foreground mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:lohitkumar0103@gmail.com">
                  Send Me a Message →
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
