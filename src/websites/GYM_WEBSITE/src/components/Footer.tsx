import { Dumbbell, Twitter, Facebook, Youtube, MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter uppercase">
                Iron<span className="text-primary">Pulse</span>
              </span>
            </a>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The ultimate destination for those who demand more from their fitness journey. Elite equipment, expert coaching, and a community of high-performers.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Programs', 'Trainers', 'Pricing', 'Success Stories', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Our Programs</h4>
            <ul className="space-y-4">
              {['Strength Training', 'Group Classes', 'Personal Coaching', 'HIIT & Cardio', 'Yoga & Recovery', 'Athlete Prep'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold uppercase tracking-widest mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  123 Elite Performance Way,<br />
                  Fitness District, NY 10001
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 000-IRON</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">hello@ironpulse.fit</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © 2024 IronPulse Fitness Center. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-[10px] text-muted-foreground uppercase tracking-widest hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
