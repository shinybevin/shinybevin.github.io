import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import avatarImg from '../assets/shiny-avatar.png';

const Mascot = () => {
    const [message, setMessage] = useState("Hi! I'm Shiny! Welcome to my portfolio!");
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2; // Trigger when section is halfway up/down viewport

            // Get section positions dynamically
            const experiencePos = document.getElementById('experience')?.offsetTop || 0;
            const projectsPos = document.getElementById('projects')?.offsetTop || 0;
            const skillsPos = document.getElementById('skills')?.offsetTop || 0;
            const educationPos = document.getElementById('education')?.offsetTop || 0;
            const contactPos = document.getElementById('contact')?.offsetTop || 0;

            if (scrollY < experiencePos) {
                setMessage("Hi! I'm Shiny! Welcome to my portfolio!");
            } else if (scrollY >= experiencePos && scrollY < projectsPos) {
                setMessage("I have 5+ years of experience!");
            } else if (scrollY >= projectsPos && scrollY < skillsPos) {
                setMessage("Check out my cool projects!");
            } else if (scrollY >= skillsPos && scrollY < educationPos) {
                setMessage("I know a lot of tech stacks!");
            } else if (scrollY >= educationPos && scrollY < contactPos) {
                setMessage("I'm always learning new things!");
            } else {
                setMessage("Don't be shy, say hi!");
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{ position: 'fixed', bottom: '-10px', right: '10px', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        key={message}
                        style={{
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-primary)',
                            padding: '0.8rem',
                            borderRadius: '15px 15px 0 15px',
                            marginBottom: '5px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            border: '1px solid var(--border-color)',
                            maxWidth: '180px',
                            fontWeight: '500',
                            fontSize: '0.9rem',
                            marginRight: '15px'
                        }}
                    >
                        {message}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                onClick={() => setIsVisible(!isVisible)}
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-end' }}
            >
                {/* Using the image provided. Assuming we want to remove background via CSS mix-blend-mode if it's simple white, 
            or just drop-shadow if it's transparent. Since requested to 'remove background', 
            we can try a mask or just hope it's transparent. 
            If it has a solid background, mix-blend-mode: multiply (for white bg on light theme) works, 
            but tricky for dark mode. 
            Let's assume PNG has transparency or use a drop-shadow to make it pop. */}
                <img
                    src={avatarImg}
                    alt="Shiny Avatar"
                    style={{
                        height: '150px', // Reduced size as requested
                        objectFit: 'contain',
                        filter: 'drop-shadow(0px 5px 15px rgba(0,0,0,0.3))'
                    }}
                />
            </motion.div>
        </div>
    );
};

export default Mascot;
