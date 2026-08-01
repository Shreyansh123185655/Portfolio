import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react';

export const siteMeta = {
  title: 'Shreyansh Gupta — Full-Stack & ML Engineer',
  description: 'Shreyansh Gupta — Full-Stack Development, Machine Learning, and Backend Engineering.',
  copyrightName: 'Shreyansh Gupta',
  copyrightYear: 2026,
  location: 'Jaipur',
};

export const heroData = {
  firstName: 'Shreyansh',
  lastName: 'Gupta',
  subtitle: 'Full-Stack Developer · ML Engineer · Backend Engineering',
  contactEmail: 'shreyanshfromranchi@gmail.com',
  portfolioYear: '2026',
};

export const aboutData = {
  text: "I'm a B.Tech Computer Science student at Manipal University Jaipur, skilled in Full-Stack Development, Machine Learning, and Backend Engineering. I'm passionate about building scalable, intelligent, and user-centric applications, and I'm eager to contribute to innovative, high-impact engineering teams.",
  skills: [
    {
      label: 'Languages',
      items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL', '.NET'],
    },
    {
      label: 'Backend & Databases',
      items: ['REST APIs', 'Microservices', 'MySQL', 'MongoDB', 'PostgreSQL'],
    },
    {
      label: 'Tools & DevOps',
      items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Kafka'],
    },
    {
      label: 'Machine Learning',
      items: ['TensorFlow', 'PyTorch', 'NLP', 'LLM/RAG', 'scikit-learn'],
    },
  ],
};

export const servicesData = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description:
      'Building responsive, scalable web applications using React, Node.js, and modern CSS frameworks, ensuring seamless cross-device experiences.',
  },
  {
    number: '02',
    title: 'Backend Engineering',
    description:
      'Architecting robust backend systems with Java, FastAPI, and microservices design. Experienced in handling RESTful APIs and real-time streaming with Kafka.',
  },
  {
    number: '03',
    title: 'Machine Learning & AI',
    description:
      'Developing intelligent solutions like stock price prediction models (CNN-Transformers) and LLM-powered RAG chatbots for reliable document Q&A.',
  },
  {
    number: '04',
    title: 'Database & Data Pipelines',
    description:
      'Designing efficient data models and ETL-style processing pipelines using SQL, MongoDB, and PostGIS for spatial and high-volume data.',
  },
];

export const projectsData = [
  {
    number: '01',
    category: 'Full-Stack · Microservices · IoT',
    name: 'UrbanPulse — Smart City Platform',
    liveUrl: '#',
    col1Image1: '/smart-city-1.png',
    col1Image2: '/smart-city-2.png',
    col2Image: '/smart-city-3.png',
  },
  {
    number: '02',
    category: 'Machine Learning · Deep Learning',
    name: 'StockSense — CNN-Transformer Predictor',
    liveUrl: '#',
    col1Image1: '/stock-1.png',
    col1Image2: '/stock-2.png',
    col2Image: '/stock-3.png',
  },
  {
    number: '03',
    category: 'GenAI · NLP · RAG',
    name: 'DocMind — PDF Q&A RAG Chatbot',
    liveUrl: '#',
    col1Image1: '/rag-1.png',
    col1Image2: '/rag-2.png',
    col2Image: '/rag-3.png',
  },
  {
    number: '04',
    category: 'Full-Stack · Analytics',
    name: 'Parental Insight Application',
    liveUrl: '#',
    col1Image1: '/notch-hero.png',
    col1Image2: '/notch-pricing.png',
    col2Image: '/notch-mockup.png',
  },
];

export const contactData = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shreyanshfromranchi@gmail.com',
    href: 'mailto:shreyanshfromranchi@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 62004 36930',
    href: 'https://wa.me/916200436930',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/shreyansh-gupta-a9a6372b1',
    href: 'https://www.linkedin.com/in/shreyansh-gupta-a9a6372b1/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Shreyansh123185655',
    href: 'https://github.com/Shreyansh123185655',
  },
];
