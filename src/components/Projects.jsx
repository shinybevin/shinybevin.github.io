import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section id="projects" className="section-padding">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
                Projects
            </motion.h2>

            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(5px)',
                            // padding handled by className
                            borderRadius: '12px',
                            border: '1px solid var(--glass-border)',
                            transition: 'transform 0.3s ease',
                        }}
                        className="responsive-card"
                        whileHover={{ y: -5 }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                            {project}
                        </h3>
                        {/* Since the resume provided only has titles, we display them elegantly. In a real app, we'd want descriptions. */}
                        <div style={{ height: '4px', width: '40px', background: 'var(--text-secondary)', borderRadius: '2px' }}></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
