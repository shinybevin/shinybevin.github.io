import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaTrophy } from 'react-icons/fa';

const Awards = () => {
    return (
        <section id="awards" style={{ padding: '4rem 2rem', background: 'transparent' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
                Awards & Global Certifications
            </motion.h2>

            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(5px)', border: '1px solid var(--glass-border)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaTrophy /> Awards
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {resumeData.awards.map((award, index) => (
                            <li key={index} style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                {award}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ background: 'var(--glass-bg)', backdropFilter: 'blur(5px)', border: '1px solid var(--glass-border)', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaTrophy /> Certificates
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {resumeData.certificates.map((cert, index) => (
                            <li key={index} style={{ marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Awards;
