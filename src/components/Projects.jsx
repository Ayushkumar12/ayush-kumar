import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack online store with payment integration, user authentication, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        title: 'Task Management App',
        description: 'Real-time collaborative project management tool for remote teams.',
        tags: ['Next.js', 'Firebase', 'Tailwind'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['React', 'Framer Motion', 'CSS'],
        links: { demo: '#', github: '#' },
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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
