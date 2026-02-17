import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers, Server, Terminal, Cpu, Layout, Palette } from 'lucide-react';
import './Skills.css';

const skills = [
    { name: 'HTML', icon: <Layout />, level: 70 },
    { name: 'CSS', icon: <Palette />, level: 80 },
    { name: 'Javascript', icon: <Code />, level: 50 },
    { name: 'React JS', icon: <Globe />, level: 40 },
    { name: 'Node JS', icon: <Server />, level: 30 },
    { name: 'Express JS', icon: <Layers />, level: 40 },
    { name: 'Mongo JS', icon: <Database />, level: 50 },
    { name: 'Python', icon: <Terminal />, level: 50 },
    { name: 'SQL', icon: <Database />, level: 75 },
];

export default function Skills() {
    return (
        <section id="skills" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-center">Technical </h2>


                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <span className="skill-percent">{skill.level}%</span>

                            <div className="skill-header">
                                <div className="skill-icon">{skill.icon}</div>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>

                            <div className="skill-level-container">
                                <motion.div
                                    className="skill-progress"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center" style={{ marginTop: '3rem' }}>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Put these skills to use in my <a href="#projects" style={{ color: 'var(--accent)' }}>featured projects</a>.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
