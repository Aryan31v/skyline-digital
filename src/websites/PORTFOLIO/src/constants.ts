import { Project, Skill, Testimonial, ProcessStep } from './types';

export const PORTFOLIO_DATA = {
  name: "Alex Nexus",
  role: "Digital Experience Architect",
  tagline: "I build high-converting digital products that bridge the gap between human emotion and technical precision.",
  about: {
    story: "With over 8 years of experience in the intersection of design and engineering, I've helped startups and Fortune 500 companies transform complex problems into intuitive, profitable experiences. My approach is rooted in psychological principles and data-driven design.",
    philosophy: "Design isn't just how it looks; it's how it converts. I focus on the 'why' before the 'what'.",
  },
  projects: [
    {
      id: "1",
      title: "Lumina SaaS Platform",
      category: "Product Design & Dev",
      description: "A comprehensive analytics dashboard for modern marketing teams.",
      problem: "Marketing teams were overwhelmed by fragmented data from 10+ sources, leading to slow decision-making.",
      solution: "Created a unified data lake with AI-driven insights and a modular widget system.",
      result: "Increased user retention by 45% and reduced time-to-insight by 60%.",
      image: "https://picsum.photos/seed/lumina/1200/800",
      tags: ["React", "Node.js", "D3.js", "Tailwind"],
      metrics: [
        { label: "Retention", value: "+45%" },
        { label: "Efficiency", value: "60%" }
      ]
    },
    {
      id: "2",
      title: "Vortex E-commerce",
      category: "UX/UI Design",
      description: "High-end streetwear marketplace with immersive 3D previews.",
      problem: "High cart abandonment rates due to lack of product confidence.",
      solution: "Implemented a WebGL-based 3D product viewer and a frictionless one-tap checkout.",
      result: "Boosted conversion rate by 22% and average order value by $35.",
      image: "https://picsum.photos/seed/vortex/1200/800",
      tags: ["Next.js", "Three.js", "Stripe", "Framer Motion"],
      metrics: [
        { label: "Conversion", value: "+22%" },
        { label: "AOV", value: "+$35" }
      ]
    },
    {
      id: "3",
      title: "Zenith Health App",
      category: "Mobile App",
      description: "AI-powered mental wellness companion for high-stress professionals.",
      problem: "Traditional wellness apps felt like 'another chore' for busy users.",
      solution: "Designed a 'passive-first' interaction model using biometric data and ambient notifications.",
      result: "Reached 100k active users in 3 months with a 4.9 star rating.",
      image: "https://picsum.photos/seed/zenith/1200/800",
      tags: ["React Native", "Firebase", "TensorFlow", "Design Systems"],
      metrics: [
        { label: "Users", value: "100k+" },
        { label: "Rating", value: "4.9/5" }
      ]
    }
  ] as Project[],
  skills: [
    { name: "UI/UX Design", level: 95, category: "Design" },
    { name: "React / Next.js", level: 90, category: "Development" },
    { name: "Framer Motion", level: 85, category: "Design" },
    { name: "Node.js", level: 80, category: "Development" },
    { name: "Product Strategy", level: 90, category: "Strategy" },
    { name: "Conversion Optimization", level: 85, category: "Strategy" }
  ] as Skill[],
  testimonials: [
    {
      name: "Sarah Chen",
      role: "CEO",
      company: "Lumina",
      content: "Alex doesn't just design; he thinks like a business owner. The ROI on our platform redesign was immediate.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Product Lead",
      company: "Vortex",
      content: "The level of detail and motion Alex brings to a project is unparalleled. He's a true unicorn in the industry.",
      avatar: "https://picsum.photos/seed/marcus/100/100"
    }
  ] as Testimonial[],
  process: [
    {
      title: "Discovery",
      description: "Deep dive into your business goals, target audience, and market landscape.",
      icon: "Search"
    },
    {
      title: "Strategy",
      description: "Defining the user journey, information architecture, and conversion paths.",
      icon: "Map"
    },
    {
      title: "Execution",
      description: "High-fidelity design and development with iterative feedback loops.",
      icon: "Zap"
    },
    {
      title: "Optimization",
      description: "Testing, refining, and scaling based on real-world performance data.",
      icon: "TrendingUp"
    }
  ] as ProcessStep[]
};
