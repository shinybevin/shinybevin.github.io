import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--text-secondary)' }}>
                © {new Date().getFullYear()} Jeba Shiny J
            </p>
        </footer>
    );
};

export default Footer;
