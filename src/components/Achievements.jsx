import { motion } from 'framer-motion';
import { Award, Terminal, Zap, Shield, BookOpen, Coffee } from 'lucide-react';
import './Achievements.css';

const achievements = [
    {
        id: 1,
        title: "Introduction to Artificial Intelligence",
        icon: <Award size={32} />,
        description: "Great Learning - Acquired foundational knowledge in AI concepts and applications.",
        progress: 100,
        unlocked: true,
        link: "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence"
    },
    {
        id: 2,
        title: "Python for Data Science",
        icon: <Award size={32} />,
        description: "IBM (Cognitive Class) - Mastered Python for data analysis and visualization.",
        progress: 100,
        unlocked: true,
        link: "https://cognitiveclass.ai/courses/python-for-data-science"
    },
    {
        id: 3,
        title: "Introduction to Cloud Computing",
        icon: <Shield size={32} />,
        description: "IBM - Detailed overview of cloud computing concepts and models.",
        progress: 100,
        unlocked: true,
        link: "#"
    },
    {
        id: 4,
        title: "Web Development",
        icon: <Terminal size={32} />,
        description: "Internshala - Comprehensive training in HTML, CSS, JavaScript, and React.",
        progress: 100,
        unlocked: true,
        link: "#"
    },
    {
        id: 5,
        title: "Java Programming",
        icon: <Coffee size={32} />,
        description: "Great Learning - Solidified object-oriented programming skills in Java.",
        progress: 100,
        unlocked: true,
        link: "#"
    },
    {
        id: 6,
        title: "Structured Query Language (SQL)",
        icon: <BookOpen size={32} />,
        description: "Great Learning - Learned database management and query optimization.",
        progress: 100,
        unlocked: true,
        link: "#"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="section container">
            <h2 className="text-center">Certifications & <span className="text-gradient">Badges</span></h2>
            <p className="text-center" style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                Verified credentials and technical milestones.
            </p>

            <div className="achievements-grid">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`achievement-card ${item.unlocked ? 'unlocked' : 'locked'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
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
                            {/* Removed progress bar for certifications as they are usually binary (earned/not earned) */}
                        </div>
                        <div className="unlock-badge">VERIFIED</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
