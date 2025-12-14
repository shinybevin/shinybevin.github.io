import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const categories = Object.keys(resumeData.skills);

    return (
        <section id="skills" className="section-padding" style={{ background: 'transparent' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
                Skills
            </motion.h2>

            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                {categories.map((category, index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(5px)',
                            // padding handled by className
                            borderRadius: '8px',
                            border: '1px solid var(--glass-border)',
                        }}
                        className="responsive-card"
                    >
                        <h3 style={{ textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--accent-color)', marginBottom: '1rem', letterSpacing: '1px' }}>
                            {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {resumeData.skills[category].map(skill => (
                                <span
                                    key={skill}
                                    style={{
                                        background: 'var(--bg-secondary)',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '4px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--border-color)'
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
