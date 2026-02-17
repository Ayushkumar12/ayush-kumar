import { motion } from 'framer-motion';
import { Award, Terminal, Zap, Shield, BookOpen, Coffee } from 'lucide-react';
import './Achievements.css';

const achievements = [
    {
        id: 1,
        title: "AWS Certified Solution Architect",
        icon: <Shield size={32} />,
        description: "Validated expertise in designing distributed systems on AWS.",
        progress: 100,
        unlocked: true
    },
    {
        id: 2,
        title: "Hackathon Winner 2025",
        icon: <Award size={32} />,
        description: "1st Place in Global AI Innovation Challenge.",
        progress: 100,
        unlocked: true
    },
    {
        id: 3,
        title: "Open Source Contributor",
        icon: <Terminal size={32} />,
        description: "Active maintainer for 3+ popular React libraries.",
        progress: 85,
        unlocked: true
    },
    {
        id: 4,
        title: "Tech Blogger",
        icon: <BookOpen size={32} />,
        description: "Published 50+ technical articles on Dev.to and Medium.",
        progress: 60,
        unlocked: false
    },
    {
        id: 5,
        title: "Bug Hunter",
        icon: <Zap size={32} />,
        description: "Reported critical vulnerabilities in major open-source projects.",
        progress: 40,
        unlocked: false
    },
    {
        id: 6,
        title: "Caffeine Powered",
        icon: <Coffee size={32} />,
        description: "Consumed over 1000+ cups of coffee while coding.",
        progress: 100,
        unlocked: true
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="section container">
            <h2 className="text-center">Unlocked <span className="text-gradient">Protocols</span></h2>
            <p className="text-center" style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Milestones unlocked during my <a href="#experience" style={{ color: 'var(--accent)', textDecoration: 'none' }}>career execution &rarr;</a>
            </p>

            <div className="achievements-grid">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`achievement-card ${item.unlocked ? 'unlocked' : 'locked'}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="achievement-icon">
                            {item.icon}
                        </div>
                        <div className="achievement-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="achievement-progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                        </div>
                        {item.unlocked && <div className="unlock-badge">UNLOCKED</div>}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
