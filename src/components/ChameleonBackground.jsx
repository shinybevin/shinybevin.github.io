import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChameleonBackground = () => {
    const [activeTheme, setActiveTheme] = useState('space');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2;

            const hero = document.getElementById('hero');
            const experience = document.getElementById('experience');
            const projects = document.getElementById('projects');
            const skills = document.getElementById('skills');

            // Default to space
            let current = 'space';

            if (experience && scrollY > experience.offsetTop) current = 'cyberpunk';
            if (projects && scrollY > projects.offsetTop) current = 'spotlight';
            if (skills && scrollY > skills.offsetTop) current = 'matrix';

            setActiveTheme(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const themes = {
        space: {
            gradient: 'radial-gradient(circle at 50% 50%, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            accent: '#e94560',
            svg: (
                <svg width="100%" height="100%" opacity="0.3">
                    <pattern id="stars" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="1" fill="#fff" />
                        <circle cx="50" cy="80" r="1.5" fill="#fff" />
                        <circle cx="80" cy="20" r="1" fill="#fff" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#stars)" />
                </svg>
            )
        },
        cyberpunk: {
            gradient: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
            accent: '#00ff9f',
            svg: (
                <svg width="100%" height="100%" opacity="0.1">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff9f" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            )
        },
        spotlight: {
            gradient: 'radial-gradient(circle at bottom left, #2b5876 0%, #4e4376 100%)',
            accent: '#ff9966',
            svg: (
                <svg width="100%" height="100%" opacity="0.2">
                    <circle cx="20%" cy="20%" r="300" fill="url(#grad1)" filter="blur(50px)" />
                    <defs>
                        <radialGradient id="grad1">
                            <stop offset="0%" stopColor="#ff9966" />
                            <stop offset="100%" stopColor="transparent" />
                        </radialGradient>
                    </defs>
                </svg>
            )
        },
        matrix: {
            gradient: 'linear-gradient(to bottom, #000000, #0f2027)',
            accent: '#00fa9a',
            svg: (
                <div style={{
                    width: '100%', height: '100%',
                    backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .3) 25%, rgba(0, 255, 0, .3) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .3) 75%, rgba(0, 255, 0, .3) 76%, transparent 77%, transparent)',
                    backgroundSize: '50px 50px',
                    opacity: 0.1
                }}></div>
            )
        }
    };

    const currentStyle = themes[activeTheme];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -2,
            transition: 'all 1s ease',
            background: currentStyle.gradient
        }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTheme}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                    {currentStyle.svg}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ChameleonBackground;
