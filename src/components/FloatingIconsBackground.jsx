import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaJava, FaPython, FaDatabase, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiAngular } from 'react-icons/si';

const FloatingIconsBackground = () => {
    // Reduced icon count for performance
    const icons = [
        { Icon: FaReact, color: '#61DAFB', size: 50, top: '10%', left: '10%', duration: 25 },
        { Icon: FaJs, color: '#F7DF1E', size: 45, top: '20%', left: '80%', duration: 28 },
        { Icon: FaPython, color: '#3776AB', size: 50, top: '70%', left: '85%', duration: 27 },
        { Icon: FaDatabase, color: '#4DB33D', size: 35, top: '85%', left: '5%', duration: 32 },
        { Icon: FaCode, color: 'var(--text-secondary)', size: 60, top: '5%', left: '50%', duration: 35 },
        { Icon: SiSpringboot, color: '#6DB33F', size: 55, top: '35%', left: '60%', duration: 26 },
        { Icon: SiAngular, color: '#DD0031', size: 50, top: '15%', left: '90%', duration: 31 },
        { Icon: FaJava, color: '#007396', size: 60, top: '50%', left: '15%', duration: 30 },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            background: 'var(--bg-primary)', // Provides the base color
            transition: 'background 0.3s ease'
        }}>
            {/* 
               Optimized Gradient Mesh 
               - Removed heavy Framer Motion animations on large gradients.
               - Replaced with CSS animations if possible, or very slow/simple FM.
               - Used opacity to blend instead of mix-blend-mode screen which can be heavy.
            */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)',
                opacity: 0.15,
                filter: 'blur(80px)', // Static blur is cheaper than animated blur
                borderRadius: '50%',
            }} />

            <div style={{
                position: 'absolute',
                bottom: '-20%',
                right: '-10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, #00C9FF 0%, transparent 60%)',
                opacity: 0.15,
                filter: 'blur(80px)',
                borderRadius: '50%',
            }} />

            {/* Optimized Glass Shapes - Removed backdrop-filter */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '20%',
                    right: '15%',
                    width: '120px',
                    height: '120px',
                    background: 'var(--shape-bg)',
                    borderRadius: '20px',
                    border: '1px solid var(--shape-border)',
                    zIndex: 0,
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '10%',
                    width: '150px',
                    height: '150px',
                    background: 'var(--shape-bg)',
                    borderRadius: '50%',
                    border: '1px solid var(--shape-border)',
                    zIndex: 0,
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Icons */}
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: item.top,
                        left: item.left,
                        color: item.color,
                        opacity: 0.4, // Reduced opacity for less distraction
                        zIndex: 1,
                    }}
                    animate={{
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingIconsBackground;
