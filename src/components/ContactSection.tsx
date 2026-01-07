import { useState } from 'react';
import { Phone, Mail, Linkedin, Github, ExternalLink, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';
import emailjs from '@emailjs/browser';

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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Missing fields',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_n3w5ovn',
        'template_99sb61e',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
        },
        'BNk-LDjY54eDVHu4_'
      );

      toast({
        title: 'Message sent!',
        description: "I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Failed to send',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="section-container relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle mx-auto mt-4">
              I'm always open to discussing new opportunities, projects, or just having a chat about backend development.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h3 className="text-xl font-semibold font-display text-foreground mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject (optional)"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div className="space-y-4">
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

              <ScrollReveal direction="right" delay={100}>
                <div className="space-y-4">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
