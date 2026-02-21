import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import './Projects.css';
import mehryaan from '../asserts/mehryaan.png';
import delightio from '../asserts/delightio.png';
import codecircle from '../asserts/codecircle.png';
import abacus from '../asserts/brainbuildersabacus.png';
import metacode from '../asserts/metacode.png';
import bajpai from '../asserts/bajpai.png';


const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack online store with payment integration, user authentication, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { demo: '#', github: '#' },
        image: mehryaan
    },
    {
        title: 'Task Management App',
        description: 'Real-time collaborative project management tool for remote teams.',
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        links: { demo: '#', github: '#' },
        image: delightio
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['React', 'Framer Motion', 'CSS'],
        links: { demo: '#', github: '#' },
        image: codecircle
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['React', 'Framer Motion', 'CSS'],
        links: { demo: '#', github: '#' },
        image: abacus
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['React', 'Framer Motion', 'CSS'],
        links: { demo: '#', github: '#' },
        image: metacode
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['React', 'Framer Motion', 'CSS'],
        links: { demo: '#', github: '#' },
        image: bajpai
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section container">
            <h2 className="text-center">Featured <span className="text-gradient">Projects</span></h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="image-overlay"></div>
                        </div>

                        <div className="project-content">
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-links">
                                <a href={project.links.demo} className="project-link">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                                <a href={project.links.github} className="project-link">
                                    <Github size={16} /> Source Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '3rem' }}>
                <a href="#contact" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
                    Start Your Project With Me &rarr;
                </a>
            </div>
        </section>
    );
}
