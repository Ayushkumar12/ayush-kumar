import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Briefcase, Calendar } from 'lucide-react';


// --- TYPE DEFINITIONS FOR PROPS ---
export interface NavLink { label: string; href: string; }
export interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
export interface Stat { value: string; label: string; }
export interface Experience { role: string; company: string; period: string; description: string; }
export interface Achievement { title: string; organization: string; link?: string; }

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode; };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void; };
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  experience?: Experience[];
  achievements?: Achievement[];
  contact?: { email: string; location: string; web3formsKey?: string; };
  skills?: string[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '0';
        renderer.domElement.style.display = 'block';
        currentMount.appendChild(renderer.domElement);
        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        let animationFrameId: number;
        const animate = () => { animationFrameId = requestAnimationFrame(animate); material.uniforms.iTime.value += 0.016; renderer.render(scene, camera); };
        const handleResize = () => { renderer.setSize(window.innerWidth, window.innerHeight); material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight); };
        window.addEventListener('resize', handleResize);
        animate();
        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };
    }, []);
    return <div ref={mountRef} />;
};

// --- DEFAULT DATA ---
const defaultData = {
  logo: { initials: 'AK', name: 'Ayush Kumar' },
  navLinks: [ { label: 'About', href: '#about' }, { label: 'Work', href: '#projects' }, { label: 'Experience', href: '#experience' }, { label: 'Expertise', href: '#expertise' }, { label: 'Contact', href: '#contact' } ],
  resume: { label: 'Resume', onClick: () => console.log('resume') },
  hero: { titleLine1: 'Creative Developer &', titleLine2Gradient: 'Digital Designer', subtitle: 'I craft beautiful digital experiences through code and design.', },
  ctaButtons: { primary: { label: 'View My Work', onClick: () => {} }, secondary: { label: 'Get In Touch', onClick: () => {} }, },
  projects: [] as Project[],
  stats: [ { value: '2+', label: 'Years Experience' }, { value: '10+', label: 'Projects Completed' }, ],
};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const PortfolioPage: React.FC<PortfolioPageProps> = ({
  logo = defaultData.logo,
  navLinks = defaultData.navLinks,
  resume = defaultData.resume,
  hero = defaultData.hero,
  ctaButtons = defaultData.ctaButtons,
  projects = defaultData.projects,
  experience = [],
  achievements = [],
  contact = { email: 'ayush@example.com', location: 'New Delhi, India' },
  skills = [],
  stats = defaultData.stats,
  showAnimatedBackground = true,
}) => {
  const [formState, setFormState] = React.useState({ name: '', email: '', message: '', status: '' });
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.web3formsKey) return;
    setFormState(prev => ({ ...prev, status: 'Sending...' }));
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                access_key: contact.web3formsKey,
                name: formState.name,
                email: formState.email,
                message: formState.message,
            })
        });
        const data = await response.json();
        if (data.success) {
            setFormState({ name: '', email: '', message: '', status: 'Message sent successfully!' });
        } else {
            setFormState(prev => ({ ...prev, status: 'Failed to send message.' }));
        }
    } catch {
        setFormState(prev => ({ ...prev, status: 'Error sending message.' }));
    }
  };

  return (
    <div className="bg-background text-foreground geist-font min-h-screen overflow-x-hidden selection:bg-primary/30">
      {showAnimatedBackground && <AuroraBackground />}
      <div className="relative z-10">
        <nav className="w-full px-6 py-4 border-b border-border/40 backdrop-blur-sm sticky top-0 bg-background/50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary/50 backdrop-blur-md border border-border flex items-center justify-center">
                        <span className="geist-font text-sm font-bold text-foreground">{logo.initials}</span>
                    </div>
                    <span className="geist-font text-lg font-medium text-foreground">{logo.name}</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">{link.label}</a>
                    ))}
                </div>
                {resume && <button onClick={resume.onClick} className="glass-button px-4 py-2 rounded-lg text-foreground text-sm font-medium">{resume.label}</button>}
            </div>
        </nav>
        
        <main id="about" className="w-full min-h-[calc(100vh-73px)] flex flex-col items-center justify-center px-6 py-20 text-center">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 float-animation">
                    <h1 className="md:text-7xl lg:text-8xl leading-[1.05] geist-font text-5xl font-light text-foreground tracking-tighter mb-6">
                        {hero.titleLine1}
                        <span className="gradient-text block font-bold mt-2">{hero.titleLine2Gradient}</span>
                    </h1>
                    <p className="md:text-xl max-w-2xl leading-relaxed text-lg font-light text-muted-foreground mx-auto">{hero.subtitle}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <button onClick={ctaButtons.primary.onClick} className="primary-button px-8 py-4 text-foreground rounded-lg font-semibold text-sm min-w-[180px] shadow-lg shadow-primary/20">{ctaButtons.primary.label}</button>
                    <button onClick={ctaButtons.secondary.onClick} className="glass-button min-w-[180px] text-sm font-semibold text-foreground rounded-lg px-8 py-4">{ctaButtons.secondary.label}</button>
                </div>

                <div id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all">
                            <div className="text-4xl md:text-5xl font-bold text-foreground mb-3 geist-font tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
                            <div className="text-muted-foreground text-[10px] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                            <div className="mt-4 h-1 w-8 bg-primary/20 group-hover:w-full transition-all duration-500 rounded-full mx-auto" />
                        </div>
                    ))}
                </div>


                
                <div className="divider opacity-20 mb-20" />
                
                <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 text-left">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                            <div className="project-image rounded-xl h-40 mb-6 flex items-center justify-center bg-secondary/30 overflow-hidden relative border border-border/20">
                                {project.imageContent}
                                {!project.imageContent && <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 group-hover:opacity-100 transition-opacity opacity-0" />}
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3 geist-font">{project.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map(tag => (
                                    <span key={tag} className="skill-badge px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-secondary/40 text-muted-foreground border border-border/20">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {experience.length > 0 && (
                    <>
                        <div className="divider opacity-20 mb-20" />
                        <div id="experience" className="max-w-6xl mx-auto mb-20 text-left">
                            <h2 className="text-3xl font-bold mb-16 text-center geist-font">Work Experience</h2>
                            
                            <div className="relative">
                                {/* Vertical Timeline Line */}
                                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform -translate-x-1/2" />
                                
                                <div className="space-y-12">
                                    {experience.map((exp, idx) => (
                                        <div key={idx} className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                            {/* Timeline Node */}
                                            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(34,211,238,0.5)] transform -translate-x-1/2 z-20" />
                                            
                                            {/* Content Spacer for MD+ screens */}
                                            <div className="hidden md:block w-1/2" />
                                            
                                            {/* Horizontal Connector */}
                                            <div className={`hidden md:block absolute top-1/2 h-px bg-primary/30 z-10 ${idx % 2 === 0 ? 'right-[50%] w-8' : 'left-[50%] w-8'}`} />

                                            {/* Card Container */}
                                            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                                <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary/20 hover:border-primary transition-all relative group overflow-hidden">
                                                    {/* Background Glow */}
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                                                    
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary">
                                                            <Briefcase className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-wider">
                                                            <Calendar className="w-3.5 h-3.5" />
                                                            {exp.period}
                                                        </div>
                                                    </div>

                                                    <h3 className="text-xl font-bold text-foreground mb-1 geist-font tracking-tight">{exp.role}</h3>
                                                    <h4 className="text-primary font-semibold text-sm mb-4">{exp.company}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{exp.description}</p>
                                                    
                                                    {/* Interactive Accent */}
                                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}


                {skills.length > 0 && (
                    <>
                        <div className="divider opacity-20 mb-20" />
                        <div id="expertise" className="max-w-5xl mx-auto mb-20">
                            <h2 className="text-3xl font-bold mb-10 text-center geist-font">Technical Expertise</h2>
                            <div className="flex flex-wrap justify-center gap-4">
                                {skills.map((skill, idx) => (
                                    <div key={idx} className="glass-card px-6 py-3 rounded-xl hover:border-primary/40 transition-all cursor-default">
                                        <span className="text-foreground font-medium text-sm tracking-wide">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {achievements.length > 0 && (
                    <>
                        <div className="divider opacity-20 mb-20" />
                        <div id="achievements" className="max-w-4xl mx-auto mb-20">
                            <h2 className="text-3xl font-bold mb-10 text-center geist-font">Achievements & Certifications</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {achievements.map((item, idx) => (
                                    <a key={idx} href={item.link} target="_blank" rel="noreferrer" className="glass-card p-6 rounded-xl block text-left hover:border-primary/40 transition-all">
                                        <h4 className="text-foreground font-bold mb-1">{item.title}</h4>
                                        <p className="text-muted-foreground text-xs uppercase tracking-widest">{item.organization}</p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                <div className="divider opacity-20 mb-20" />
                <div id="contact" className="max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl font-bold mb-10 text-center geist-font">Get In Touch</h2>
                    <div className="glass-card p-10 rounded-3xl text-left border border-border/20">
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                                    <input value={formState.name} onChange={e => setFormState(p => ({...p, name: e.target.value}))} required className="w-full bg-secondary/20 border border-border/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 transition-colors outline-none" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <input value={formState.email} onChange={e => setFormState(p => ({...p, email: e.target.value}))} required type="email" className="w-full bg-secondary/20 border border-border/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 transition-colors outline-none" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                <textarea value={formState.message} onChange={e => setFormState(p => ({...p, message: e.target.value}))} required rows={5} className="w-full bg-secondary/20 border border-border/30 rounded-xl px-4 py-3 text-sm focus:border-primary/50 transition-colors outline-none resize-none" placeholder="How can I help you?" />
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <button type="submit" className="primary-button px-10 py-3 rounded-xl font-bold text-sm w-full sm:w-auto">Send Message</button>
                                <span className="text-xs text-muted-foreground font-medium">{formState.status}</span>
                            </div>
                        </form>
                        
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <span className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center border border-border/30">📍</span>
                                {contact.location}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <span className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center border border-border/30">📧</span>
                                {contact.email}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="divider opacity-10 mb-10" />
                <footer className="text-center pb-20 space-y-4">
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                        © {new Date().getFullYear()} {logo.name}. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">
                        <span>Built with React + Vite</span>
                        <a href="https://metacode.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Powered by Metacode</a>
                    </div>
                </footer>
            </div>
        </main>
      </div>
      <style>{`
        .gradient-text {
            background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.4) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .glass-button {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
        }
        .glass-button:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }
        .primary-button {
            background: #ffffff;
            color: #000000;
            transition: all 0.3s ease;
            border: 1px solid #ffffff;
        }
        .primary-button:hover {
            background: transparent;
            color: #ffffff;
            transform: translateY(-2px);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(255, 255, 255, 0.1);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
        }
        .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            width: 100%;
        }
        .float-animation {
            animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export {PortfolioPage};
