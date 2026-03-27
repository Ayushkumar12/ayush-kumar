import { PortfolioPage, PortfolioPageProps } from "@/components/ui/starfall-portfolio-landing";

const ayushPortfolioData: PortfolioPageProps = {
  logo: {
    initials: 'AK',
    name: 'Ayush Kumar',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
  resume: {
    label: 'Download CV',
    onClick: () => {
      const link = document.createElement('a');
      link.href = '/ayush.docx';
      link.download = 'Ayush_Kumar_Resume.docx';
      link.click();
    },
  },
  hero: {
    titleLine1: 'Building digital',
    titleLine2Gradient: 'experiences that matter.',
    subtitle: 'A passionate Full Stack Developer crafting modern, high-performance web applications with a focus on design and user experience.',
  },
  ctaButtons: {
    primary: {
      label: 'View Work',
      onClick: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    },
    secondary: {
      label: 'Get In Touch',
      onClick: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); },
    },
  },
  projects: [
    { 
      title: 'Mehryaann: E-Commerce', 
      description: 'A full-stack online store with payment integration, user authentication, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageContent: <img src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=400" alt="E-commerce" className="w-full h-full object-cover" />
    },
    { 
      title: 'Delightio: Restaurant System', 
      description: 'A full-stack online restaurant ordering system with menu management and order tracking.',
      tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
      imageContent: <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" alt="Restaurant" className="w-full h-full object-cover" />
    },
    { 
      title: 'CodeCircle: Developers Social', 
      description: 'A social media platform for developers to share projects and collaborate.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      imageContent: <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=400" alt="Social Media" className="w-full h-full object-cover" />
    },
    { 
      title: 'BrainBuildersAbacus: LMS', 
      description: 'An online platform for learning abacus skills with interactive lessons and progress tracking.',
      tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
      imageContent: <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400" alt="LMS" className="w-full h-full object-cover" />
    },
    { 
      title: 'MetaCode: Corporate Site', 
      description: 'A modern, responsive website for an IT company showcasing services and projects.',
      tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
      imageContent: <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="Corporate" className="w-full h-full object-cover" />
    },
    { 
      title: 'Portfolio Website', 
      description: 'Modern, responsive personal portfolio showcasing skills and projects.',
      tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
      imageContent: <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400" alt="Portfolio" className="w-full h-full object-cover" />
    },
  ],
  experience: [
    {
      role: "Freelance Developer",
      company: "Brain Builders Abacus",
      period: "2026",
      description: "Delivered a centralized administrative hub for managing student registrations, exam configurations, and academic results."
    },
    {
      role: "Web Developer",
      company: "CyberZero Club",
      period: "2024 - 2026",
      description: "Keep the site updated with events, responsive, community-reflective, and filled with engaging member spotlights."
    }
  ],
  achievements: [
    { title: "Introduction to Artificial Intelligence", organization: "Great Learning", link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence" },
    { title: "Python for Data Science", organization: "IBM (Cognitive Class)", link: "https://cognitiveclass.ai/courses/python-for-data-science" },
    { title: "Introduction to Cloud Computing", organization: "IBM", link: "#" },
    { title: "Web Development", organization: "Internshala", link: "#" },
    { title: "Java Programming", organization: "Great Learning", link: "#" },
    { title: "Structured Query Language (SQL)", organization: "Great Learning", link: "#" },
  ],
  contact: {
    email: 'ayush@example.com',
    location: 'New Delhi, India',
    web3formsKey: "591e9bfb-2b92-45b3-9348-d1fb315b771f"
  },
  skills: [
    "React JS", "Node JS", "Express JS", "MongoDB", "Python", "SQL", "Javascript", "HTML", "CSS"
  ],
  stats: [
    { value: '2+', label: 'Years of Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '6+', label: 'Certifications' },
    { value: '100%', label: 'Commitment' },
  ],
  showAnimatedBackground: true,
};

const DemoOne = () => {
  return <PortfolioPage {...ayushPortfolioData} />;
};

export { DemoOne };
