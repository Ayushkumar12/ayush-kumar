import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        id: 1,
        role: "Senior Full Stack Dev",
        company: "TechCorp Global",
        period: "2024 - Present",
        description: "Leading a team of developers in building scalable microservices and optimizing cloud infrastructure.",
        type: "work"
    },
    {
        id: 2,
        role: "Frontend Developer",
        company: "Creative Solutions",
        period: "2022 - 2024",
        description: "Developed interactive user interfaces using React and enhance performance by 40%.",
        type: "work"
    },
    {
        id: 3,
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "2021 - 2022",
        description: "Delivered custom web solutions for diverse clients, focusing on e-commerce and portfolio sites.",
        type: "work"
    },
    {
        id: 4,
        role: "Computer Science Degree",
        company: "University of Tech",
        period: "2018 - 2022",
        description: "Specialized in Software Engineering and Artificial Intelligence. Graduated with Honors.",
        type: "education"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section container">
            <h2 className="text-center">System <span className="text-gradient">Logs</span></h2>

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
