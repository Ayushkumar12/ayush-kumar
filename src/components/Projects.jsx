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
        title: 'Mehryaann:- E-Commerce Platform',
        description: 'A full-stack online store with payment integration, user authentication, and admin dashboard.',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        links: { demo: 'https://mehryan-e-commerce.vercel.app/' },
        image: mehryaan
    },
    {
        title: 'Delightio:- online restaurant ordering system',
        description: 'A full-stack online restaurant ordering system with menu management, order tracking, and user reviews.',
        tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
        links: { demo: 'https://delightio.vercel.app/'},
        image: delightio
    },
    {
        title: 'CodeCircle:- developers social media platform',
        description: 'A social media platform for developers to share projects, collaborate, and network with other tech enthusiasts.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        links: { demo: 'https://code-circle-jade.vercel.app/'},
        image: codecircle
    },
    {
        title: 'BrainBuildersAbacus:- online abacus learning platform',
        description: 'An online platform for learning abacus skills with interactive lessons and progress tracking.',
        tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
        links: { demo: 'https://brainbuildersabacus.com/'},
        image: abacus
    },
    {
        title: 'MetaCode:- IT company website',
        description: 'A modern, responsive website for an IT company showcasing services and projects.',
        tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
        links: { demo: 'https://metacode.co.in/'},
        image: metacode
    },
    {
        title: 'Portfolio Website',
        description: 'Modern, responsive personal portfolio showcasing skills and projects.',
        tags: ['Node.js', 'React.js', 'Express', 'MongoDB'],
        links: { demo: 'https://portfolio-vishaal.vercel.app/' },
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
