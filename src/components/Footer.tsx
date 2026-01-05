import { Github, Linkedin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-display text-xl font-bold text-foreground">
              LOHIT<span className="text-accent">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © 2025 Thotakura Lohit Kumar. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Tlohitkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lohitkumar7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://leetcode.com/u/lohit_23/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-all duration-200"
            >
              <ExternalLink size={18} />
            </a>
          </div>

          {/* Made with */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="text-accent" size={14} /> using React & Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
