import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <a href="/" className="text-3xl font-bold font-display tracking-tighter mb-4 block">
              NEXUS<span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground max-w-xs">
              Designing and building digital experiences that convert.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Nexus. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
