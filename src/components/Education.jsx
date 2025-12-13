import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Education = () => {
    return (
        <section id="education" style={{ padding: '4rem 2rem', background: 'transparent' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
                Education
            </motion.h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {resumeData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '8px',
                            padding: '2rem',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '2rem',
                            paddingBottom: '1rem',
                            borderBottom: '1px solid var(--border-color)',
                            flexWrap: 'wrap'
                        }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{edu.school}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontWeight: 'bold', color: 'var(--accent-color)' }}>{edu.year}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{edu.grade}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
