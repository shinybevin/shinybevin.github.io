import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'var(--accent-hover)', stopOpacity: 1 }} />
                    </linearGradient>
                </defs>

                {/* Hexagon Background Shape */}
                <motion.path
                    d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z"
                    stroke="url(#logoGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    transform="translate(0, -5)" // Centering fix
                />

                {/* 'J' Letter */}
                <text
                    x="35"
                    y="65"
                    fontFamily="var(--font-heading)"
                    fontWeight="bold"
                    fontSize="45"
                    fill="var(--text-primary)"
                    textAnchor="middle"
                >
                    J
                </text>

                {/* 'S' Letter - Intertwined look */}
                <text
                    x="65"
                    y="65"
                    fontFamily="var(--font-heading)"
                    fontWeight="bold"
                    fontSize="45"
                    fill="url(#logoGradient)"
                    textAnchor="middle"
                >
                    S
                </text>
            </svg>
        </motion.div>
    );
};

export default Logo;
