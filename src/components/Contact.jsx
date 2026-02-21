import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: "591e9bfb-2b92-45b3-9348-d1fb315b771f",
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New message from ${formData.name}`,
                    from_name: formData.name,
                })
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Error sending message. Please try again.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="grid-2">
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="name" 
                                className="form-input" 
                                placeholder=" " 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <label htmlFor="name" className="form-label">Name</label>
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                id="email" 
                                className="form-input" 
                                placeholder=" " 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            <label htmlFor="email" className="form-label">Email</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea 
                            id="message" 
                            className="form-textarea" 
                            rows="5" 
                            placeholder=" " 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <label htmlFor="message" className="form-label">Message</label>
                    </div>

                    {status && <p className="form-status">{status}</p>}

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
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
                    <a href="https://metacode.co.in/" target="_blank" rel="noopener referrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', opacity: 0.8, fontSize: '0.8rem' }}>
                        Powered by Metacode
                    </a>
                </p>
            </footer>
        </section>
    );
}
