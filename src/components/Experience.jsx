import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 3,
        role: "Freelance Developer",
        company: "Brain Builders Abacus",
        period: "2026",
        description: "Delivered a centralized administrative hub for managing student registrations, exam configurations, and academic results.",
        type: "work"
    },
    {
        id: 4,
        role: "Web Developer",
        company: "CyberZero Club",
        period: "2024 - 2026",
        description: "Keep the site updated with events, responsive, community-reflective, and filled with engaging member spotlights.",
        type: "work"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section container">
            <h2 className="text-center">Work Experience</h2>

            <div className="timeline">
                <div className="timeline-line"></div>

                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <div className="timeline-header">
                                <div className="role-icon">
                                    {exp.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                                </div>
                                <span className="timeline-date"><Calendar size={14} /> {exp.period}</span>
                            </div>
                            <h3>{exp.role}</h3>
                            <h4 className="text-accent">{exp.company}</h4>
                            <p>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '3rem' }}>
                <a href="#projects" className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                    View Work in Action &rarr;
                </a>
            </div>
        </section>
    );
}
