import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const navStyles = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem 2rem',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(var(--bg-primary-rgb), 0.8)', // Needs updating variables to use rgb for transparency if desired, sticking to solid for now or blur
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            backgroundColor: 'var(--bg-primary)',
            borderBottom: '1px solid var(--border-color)',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            fontFamily: 'var(--font-heading)',
            color: 'var(--accent-color)',
            cursor: 'pointer',
        },
        desktopMenu: {
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
        },
        link: {
            cursor: 'pointer',
            fontWeight: 500,
            color: 'var(--text-primary)',
        },
        mobileToggle: {
            display: 'none', // handled via media query usually, doing inline logic
            fontSize: '1.5rem',
            cursor: 'pointer',
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={navStyles.nav}
            >
                <Link to="hero" smooth={true} duration={500}>
                    <Logo />
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            style={navStyles.link}
                            className="nav-link"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Toggle Button */}
                <div className="mobile-toggle" onClick={toggleMenu} style={navStyles.logo}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'var(--bg-primary)', // Solid background for legibility
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '2rem',
                                zIndex: 999
                            }}
                        >
                            {/* Close Button Inside Overlay */}
                            <div
                                onClick={toggleMenu}
                                style={{
                                    position: 'absolute',
                                    top: '2rem',
                                    right: '2rem',
                                    fontSize: '2rem',
                                    cursor: 'pointer',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                <FaTimes />
                            </div>

                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={toggleMenu} // Close on click
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div style={{ transform: 'scale(1.5)', marginTop: '2rem' }}>
                                <ThemeToggle />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
