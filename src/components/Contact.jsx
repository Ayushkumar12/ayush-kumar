import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
    return (
        <section id="contact" className="section container">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact-wrapper"
            >
                <h2 className="text-center">Get In <span className="text-gradient">Touch</span></h2>
                <p className="contact-text">
                    Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and interesting conversations.
                </p>

                <form className="contact-form">
                    <div className="grid-2">
                        <div className="form-group">
                            <input type="text" id="name" className="form-input" placeholder=" " required />
                            <label htmlFor="name" className="form-label">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" className="form-input" placeholder=" " required />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea id="message" className="form-textarea" rows="5" placeholder=" " required></textarea>
                        <label htmlFor="message" className="form-label">Message</label>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Send Message <Send size={18} />
                    </button>
                </form>

                <div className="contact-info">
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>ayush@example.com</span>
                    </div>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>New Delhi, India</span>
                    </div>
                </div>
            </motion.div>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
                <p className="footer-tech">Built with React & Framer Motion</p>
                <p className="footer-tech" style={{ marginTop: '0.5rem' }}>
                    <a href="https://metacode.co.in/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', opacity: 0.8, fontSize: '0.8rem' }}>
                        Powered by Metacode
                    </a>
                </p>
            </footer>
        </section>
    );
}
