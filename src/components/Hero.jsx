import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent" style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em', display: 'block', marginBottom: '1rem' }}>
                            HI, I'M AYUSH KUMAR
                        </span>
                        <h1 className="hero-title">
                            Building digital <br />
                            <span className="text-gradient">experiences that matter.</span>
                        </h1>
                        <p className="hero-subtitle">
                            A passionate Full Stack Developer crafting modern, high-performance web applications with a focus on design and user experience.
                        </p>

                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                View Work
                            </a>
                            <a href="#contact" className="btn btn-outline">
                                Contact Me
                            </a>
                            <a href="/resume.pdf" download="Ayush_Kumar_Resume.pdf" className="btn btn-outline">
                                <Download size={18} /> Download CV
                            </a>
                        </div>

                        <div className="hero-socials">
                            {[Github, Linkedin, Mail].map((Icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="social-link"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="hero-image-container">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-image-wrapper"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"
                            alt="Ayush Kumar - Developer"
                            className="hero-img"
                        />
                        <div className="hero-blob"></div>
                    </motion.div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator" style={{ color: 'var(--text-secondary)' }}>
                <ArrowDown size={32} />
            </a>
        </section>
    );
}
