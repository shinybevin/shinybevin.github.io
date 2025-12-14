import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }} className="hero-section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>
                    Hello, I'm
                </h2>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                    lineHeight: 1.1,
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(45deg, var(--text-primary), var(--accent-color))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    {resumeData.profile.name}
                </h1>
                <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {resumeData.profile.role}
                </h3>
                <p style={{
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    margin: '0 auto 3rem'
                }}>
                    {resumeData.profile.about}
                </p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                >
                    <a
                        href={`mailto:${resumeData.profile.email}`}
                        style={{
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            background: 'var(--accent-color)',
                            color: '#fff',
                            fontWeight: 'bold',
                            border: '2px solid var(--accent-color)'
                        }}
                    >
                        Get In Touch
                    </a>
                    <a
                        href={`https://${resumeData.profile.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            border: '2px solid var(--text-primary)',
                            color: 'var(--text-primary)',
                            fontWeight: 'bold'
                        }}
                    >
                        LinkedIn
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
