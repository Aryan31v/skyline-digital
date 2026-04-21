import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { Menu, X, ArrowRight, Phone, Mail, MapPin, CheckCircle2, Star, Quote, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

// --- Animation Variants ---

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: [0.21, 0.47, 0.32, 0.98],
},
}),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
},
},
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
},
},
};

// --- Sub-components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const navLinks = [
    { name: "Expertise", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[70px] flex items-center border-b ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
}`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl font-serif font-bold tracking-tighter text-primary uppercase">
            Elite<span className="text-accent">Corp</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
              className="text-sm font-medium text-slate-700 hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button size="sm" className="rounded-[4px] px-6 uppercase tracking-wider text-[13px] font-bold">
              Request Consultation
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full rounded-[4px]">Request Consultation</Button>
        </motion.div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-70px)] flex items-center pt-[70px] overflow-hidden bg-[#F8FAFC]">
      <div className="container mx-auto px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative z-10 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.div variants={fadeIn} custom={0} className="text-[11px] uppercase tracking-[2px] text-accent font-bold mb-4">
            Elite Institutional Partners
          </motion.div>
          <motion.h1 variants={fadeIn} custom={1} className="text-5xl md:text-6xl font-serif font-normal leading-[1.1] mb-6 text-primary">
            Architecting Growth for Global Enterprise.
          </motion.h1>
          <motion.p variants={fadeIn} custom={2} className="text-lg text-slate-700 mb-10 max-w-lg leading-relaxed">
            We provide the strategic clarity and operational excellence required for high-stakes capital management and market leadership.
          </motion.p>
          <motion.div variants={fadeIn} custom={3} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-[2px] px-8 py-6 text-base font-semibold bg-accent hover:bg-accent/90 text-white">
              Book a Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="rounded-[2px] px-8 py-6 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-white">
              Our Portfolio
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 grid-rows-3 gap-4 h-full min-h-[450px]"
        >
          <motion.div variants={scaleIn} className="h-full">
            <Card className="bg-white border-slate-200 p-6 flex flex-col justify-between shadow-sm rounded-none h-full">
              <h3 className="text-3xl font-serif text-primary">$4.2B</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Assets Under Advisory</p>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} className="h-full">
            <Card className="bg-white border-slate-200 p-6 flex flex-col justify-between shadow-sm rounded-none h-full">
              <h3 className="text-3xl font-serif text-primary">24+</h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years of Authority</p>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} className="col-span-2 h-full">
            <Card className="bg-primary text-white border-none p-8 flex flex-col justify-between rounded-none h-full">
              <div>
                <h4 className="font-serif text-xl mb-2">Strategic Capabilities</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">Comprehensive solutions for complex organizational challenges.</p>
              </div>
              <ul className="text-xs space-y-2">
                <li className="pb-2 border-b border-white/10">• Mergers & Acquisitions Architecture</li>
                <li className="pb-2 border-b border-white/10">• Risk Mitigation & Governance</li>
                <li className="pb-2 border-b border-white/10">• Global Market Entry Strategy</li>
              </ul>
            </Card>
          </motion.div>
          <motion.div variants={scaleIn} className="col-span-2 h-full">
            <Card className="bg-white border-slate-200 p-8 flex flex-col justify-center rounded-none shadow-sm h-full">
              <h4 className="font-serif text-lg mb-2 text-primary">The Everest Process</h4>
              <p className="text-sm text-slate-700 font-medium">01 Discovery → 02 Structural Audit → 03 Execution → 04 Scaled Growth</p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const logos = ["FORBES 500", "MORGAN & CO", "VERITAS", "AETHELRED"];
  return (
    <section className="h-[100px] border-t bg-white flex items-center">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-[12px] font-bold text-slate-400 uppercase tracking-widest w-[150px]"
        >
          Trusted By Global Leaders
        </motion.div>
        <div className="flex items-center gap-12 md:gap-20 opacity-50 grayscale">
          {logos.map((logo, i) => (
            <motion.span 
              key={logo} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className="text-lg font-serif font-bold text-primary"
            >
              {logo}
            </motion.span>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block text-[12px] text-slate-700 text-right leading-tight"
        >
          <strong className="text-primary">London Office</strong><br />
          +44 (0) 20 7946 0123
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/office-about/800/600" 
                alt="Our Office" 
                className="rounded-none shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border border-accent/20 translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-none px-4 rounded-none">Our Legacy</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-primary">
              Built on a Foundation of Integrity and Excellence
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Founded over two decades ago, EliteCorp began with a simple mission: to provide the clarity and strategic foresight that modern businesses need to thrive in an increasingly complex global market.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Uncompromising commitment to ethical practices",
                "Data-driven strategic methodologies",
                "Global network of industry-leading experts",
                "Tailored solutions for unique business challenges"
              ].map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <span className="font-medium text-primary">{item}</span>
                </motion.div>
              ))}
            </div>
            <Button variant="link" className="text-accent p-0 h-auto text-lg font-bold group">
              Learn more about our mission
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      desc: "Long-term planning and market positioning to ensure your business stays ahead of the curve.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      benefits: ["Market Analysis", "Growth Strategy", "Risk Management"]
},
    {
      title: "Operational Excellence",
      desc: "Optimizing internal processes and supply chains for maximum efficiency and reduced overhead.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      benefits: ["Process Automation", "Supply Chain Optimization", "Lean Management"]
},
    {
      title: "Digital Transformation",
      desc: "Modernizing your technological stack to leverage AI, cloud computing, and advanced data analytics.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      benefits: ["AI Integration", "Cloud Migration", "Data Strategy"]
},
    {
      title: "Financial Advisory",
      desc: "Expert guidance on capital structure, M&A, and long-term financial sustainability.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      benefits: ["M&A Support", "Capital Raising", "Financial Planning"]
}
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/10 border-none px-4 rounded-none">Our Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-primary">Comprehensive Solutions for Global Growth</h2>
          <p className="text-lg text-slate-700">
            We offer a suite of specialized services designed to address the most critical challenges facing modern enterprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-slate-200 rounded-none group bg-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary text-white rounded-none flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-500">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2 font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-slate-600">{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-medium text-primary">
                        <div className="w-1 h-1 bg-accent"></div>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Button variant="link" className="mt-6 p-0 h-auto text-primary font-bold group">
                    Learn More <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Global Supply Chain Optimization",
      client: "LogiCorp International",
      problem: "Inefficient logistics leading to 15% revenue loss.",
      solution: "Implemented AI-driven route optimization and inventory management.",
      result: "22% reduction in operational costs within 12 months.",
      img: "https://picsum.photos/seed/case1/600/400"
},
    {
      title: "Digital Transformation & AI Integration",
      client: "FinTech Solutions Ltd",
      problem: "Legacy systems hindering customer acquisition and data security.",
      solution: "Complete cloud migration and integration of predictive analytics.",
      result: "40% increase in customer engagement and 0 security breaches.",
      img: "https://picsum.photos/seed/case2/600/400"
}
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-none px-4 rounded-none">Proven Results</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-primary">Real Impact, Measured Outcomes</h2>
          </div>
          <Button variant="outline" className="rounded-none px-8 border-primary text-primary">View All Case Studies</Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {cases.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-none overflow-hidden mb-6 relative border border-slate-100 shadow-sm">
                <img src={c.img} alt={c.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/95 text-primary backdrop-blur-sm border-none rounded-none font-bold">{c.client}</Badge>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">{c.title}</h3>
              <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Problem</p>
                  <p className="text-sm font-medium text-primary">{c.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Solution</p>
                  <p className="text-sm font-medium text-primary">{c.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">Result</p>
                  <p className="text-sm font-bold text-accent">{c.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Unmatched Expertise", desc: "Our consultants bring decades of experience from top-tier global firms." },
    { title: "Data-Driven Approach", desc: "We don't guess. We use advanced analytics to drive every decision." },
    { title: "Global Perspective", desc: "With offices in 12 countries, we understand global market dynamics." },
    { title: "Client-Centric Focus", desc: "Your success is our primary metric. We build long-term partnerships." }
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/10 border-none px-4 rounded-none">The Elite Advantage</Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 leading-tight">Why Industry Leaders Choose EliteCorp</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              We provide more than just advice. We provide the strategic architecture and operational support needed to transform your organization into a market leader.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((r, i) => (
                <motion.div 
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-serif font-bold mb-2 text-accent">{r.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-none border border-white/10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-accent rounded-none flex items-center justify-center">
                  <Quote className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-xl">Jonathan Vance</p>
                  <p className="text-sm text-slate-400">CEO, GlobalLink Systems</p>
                </div>
              </div>
              <p className="text-2xl font-serif italic leading-relaxed text-slate-200">
                "EliteCorp didn't just give us a report. They embedded themselves in our culture and helped us navigate the most difficult transition in our company's history."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const members = [
    { name: "Sarah Jenkins", role: "Managing Director", expertise: "Strategic Planning", img: "https://picsum.photos/seed/team1/400/500" },
    { name: "David Chen", role: "Head of Operations", expertise: "Supply Chain", img: "https://picsum.photos/seed/team2/400/500" },
    { name: "Marcus Thorne", role: "Chief Technology Officer", expertise: "AI & Digital", img: "https://picsum.photos/seed/team3/400/500" },
    { name: "Elena Rodriguez", role: "Financial Director", expertise: "M&A Advisory", img: "https://picsum.photos/seed/team4/400/500" }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-none px-4 rounded-none">Our Leadership</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-primary">The Minds Behind the Strategy</h2>
          <p className="text-lg text-slate-700">
            Our team consists of industry veterans and strategic thinkers dedicated to your success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-none mb-4 aspect-[4/5] border border-slate-100">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <Linkedin className="w-5 h-5 text-white cursor-pointer hover:text-accent transition-colors" />
                    <Twitter className="w-5 h-5 text-white cursor-pointer hover:text-accent transition-colors" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-serif font-bold text-primary">{m.name}</h4>
              <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{m.role}</p>
              <p className="text-sm text-slate-500">{m.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Discovery", desc: "We deep-dive into your current operations, culture, and market position." },
    { title: "Structural Audit", desc: "Our experts formulate a bespoke strategic roadmap with measurable KPIs." },
    { title: "Execution", desc: "We work alongside your team to implement changes and monitor progress." },
    { title: "Scaled Growth", desc: "Continuous refinement based on real-world data and feedback loops." }
  ];

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/10 border-none px-4 rounded-none">Our Workflow</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-primary">A Systematic Path to Excellence</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-slate-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white border border-slate-200 rounded-none flex items-center justify-center mx-auto mb-6 shadow-sm relative group">
                  <span className="text-2xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-500">{idx + 1}</span>
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden absolute bottom-[-48px] left-1/2 -translate-x-1/2 w-[1px] h-12 bg-slate-200"></div>
                  )}
                </div>
                <h4 className="text-xl font-serif font-bold mb-3 text-primary">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Sterling",
      role: "COO, ApexCorp",
      text: "EliteCorp's approach to operational excellence is second to none. They identified efficiencies we hadn't even considered.",
      img: "https://picsum.photos/seed/t1/100/100"
},
    {
      name: "Linda Wu",
      role: "Director, TechNova",
      text: "The digital transformation strategy they implemented has completely revitalized our market position. Highly recommended.",
      img: "https://picsum.photos/seed/t2/100/100"
},
    {
      name: "Jameson Blake",
      role: "Founder, FinEdge",
      text: "Integrity, intelligence, and impact. These three words define every interaction we've had with the EliteCorp team.",
      img: "https://picsum.photos/seed/t3/100/100"
}
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10 border-none px-4 rounded-none">Client Feedback</Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 text-primary">Trusted by Visionary Leaders</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-slate-100 bg-slate-50/50 p-8 hover:shadow-lg transition-all duration-500 rounded-none h-full">
                <div className="flex items-center gap-1 text-accent mb-6">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg font-serif italic mb-8 text-primary leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-none object-cover grayscale" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What industries do you specialize in?", a: "While we have broad experience, we specialize in high-growth technology, global logistics, financial services, and manufacturing sectors." },
    { q: "How long does a typical engagement last?", a: "Engagements vary based on complexity, but most strategic transformations last between 6 to 18 months to ensure sustainable results." },
    { q: "Do you offer implementation support?", a: "Yes, we believe strategy without execution is just theory. We provide full operational support during the implementation phase." },
    { q: "How do you measure success?", a: "We define success through measurable KPIs established at the start of the engagement, such as revenue growth, cost reduction, or market share increase." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/10 border-none px-4 rounded-none">Common Questions</Badge>
            <h2 className="text-4xl font-serif font-normal mb-6 text-primary">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-700 mb-8">
              Everything you need to know about our process, expertise, and how we work with our partners.
            </p>
            <Button className="rounded-none px-8 border-primary text-primary" variant="outline">Contact Support</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-slate-200">
                  <AccordionTrigger className="text-left font-serif font-bold text-lg hover:text-accent transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="bg-primary rounded-none overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 relative z-10">Ready to Scale Your Business?</h2>
              <p className="text-lg text-slate-300 mb-12 relative z-10">
                Book a confidential consultation with one of our senior partners today and discover how we can help you achieve your strategic goals.
              </p>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Call Us</p>
                    <p className="text-xl font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-medium">consult@elitecorp.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center border border-white/10">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Visit Us</p>
                    <p className="text-xl font-medium">123 Financial District, New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 lg:p-20">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Full Name</label>
                    <Input placeholder="John Doe" className="rounded-none border-slate-200 h-12 focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Work Email</label>
                    <Input type="email" placeholder="john@company.com" className="rounded-none border-slate-200 h-12 focus-visible:ring-accent" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Company Name</label>
                  <Input placeholder="Acme Corp" className="rounded-none border-slate-200 h-12 focus-visible:ring-accent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-primary uppercase tracking-widest">How can we help?</label>
                  <Textarea placeholder="Tell us about your project..." className="rounded-none border-slate-200 min-h-[120px] focus-visible:ring-accent" />
                </div>
                <Button className="w-full h-14 rounded-none text-lg font-bold group bg-accent hover:bg-accent/90 text-white">
                  Submit Request
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">
                  Confidentiality Guaranteed
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-serif font-bold tracking-tighter text-primary uppercase">
                Elite<span className="text-accent">Corp</span>
              </span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
              Providing strategic excellence and high-authority consultancy for global enterprises since 1998.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Services</h5>
            <ul className="space-y-4">
              {["Strategic Consulting", "Operational Excellence", "Digital Transformation", "Financial Advisory", "Risk Management"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Company</h5>
            <ul className="space-y-4">
              {["About Us", "Our Team", "Case Studies", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-500 hover:text-accent transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-6">Newsletter</h5>
            <p className="text-xs text-slate-500 mb-4">Stay updated with our latest strategic insights.</p>
            <div className="flex gap-2">
              <Input placeholder="Email Address" className="rounded-none border-slate-200 text-sm" />
              <Button size="icon" className="shrink-0 rounded-none bg-primary">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            © 2026 EliteCorp Strategic Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Terms of Service</a>
            <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-primary uppercase tracking-widest">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App({ onBack }: { onBack: () => void }) {
  return (
    <>
      <button onClick={onBack} className="fixed top-4 left-4 z-[9999] bg-white/80 backdrop-blur text-black px-4 py-2 rounded-full shadow-lg font-bold border border-black/10 hover:scale-105 transition-transform">← Back to Home</button>
      <div className="min-h-screen selection:bg-accent/30 selection:text-primary bg-[#F8FAFC]">
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <About />
          <Services />
          <WhyChooseUs />
          <CaseStudies />
          <Team />
          <Process />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
