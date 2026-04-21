export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'Design' | 'Development' | 'Strategy';
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
