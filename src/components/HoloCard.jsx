import React from 'react';
import { motion } from 'framer-motion';

const HoloCard = ({ children, style, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.03)', // Extremely subtle glass
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2px', // Space for border
                overflow: 'hidden',
                ...style
            }}
            className={className}
            whileHover={{ y: -5, scale: 1.01 }}
        >
            {/* Animated RGB Border */}
            <div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'conic-gradient(transparent 0deg, transparent 90deg, var(--accent-color) 130deg, transparent 180deg, transparent 270deg, #00C9FF 310deg, transparent 360deg)',
                    animation: 'rotateBoarder 4s linear infinite',
                    zIndex: 0,
                }}
            />
            <style>{`
        @keyframes rotateBoarder {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>

            {/* Inner Content Card (hides the center of the gradient) */}
            <div style={{
                position: 'relative',
                background: 'rgba(var(--bg-rgb), 0.7)', // Slightly more opaque inner
                borderRadius: '14px',
                height: '100%',
                zIndex: 1,
                backdropFilter: 'blur(5px)',
                padding: '2rem'
            }}>
                {children}
            </div>
        </motion.div>
    );
};

export default HoloCard;
