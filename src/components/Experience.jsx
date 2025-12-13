import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '4rem 2rem', background: 'transparent' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
                Experience
            </motion.h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            marginBottom: '2rem',
                            padding: '2rem',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '8px',
                            borderLeft: '4px solid var(--accent-color)',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>{exp.role}</h3>
                            <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{exp.duration}</span>
                        </div>
                        <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{exp.company} | {exp.location}</h4>
                        <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)' }}>{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
