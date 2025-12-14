import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // Placeholder for Google Form Action URL
        // To get this: Create a Google Form -> Get Pre-filled Link -> Submit -> Inspect Network Tab -> Copy 'formResponse' URL
        const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeaSNA3rdEaqr5dqGXr8Zig7g1d6AMFuLeZ3Uf5B8f0nMUD1A/formResponse";

        if (GOOGLE_FORM_ACTION_URL === "YOUR_GOOGLE_FORM_ACTION_URL_HERE") {
            setStatus("Please configure the Google Form URL in the code!");
            return;
        }

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: "POST",
            mode: "no-cors",
            body: data
        }).then(() => {
            setStatus("Message Sent Successfully!");
            form.reset();
        }).catch((err) => {
            console.error(err);
            setStatus("Error sending message.");
        });
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'transparent', textAlign: 'center' }}>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                style={{ marginBottom: '2rem', fontSize: '2.5rem' }}
            >
                Get In Touch
            </motion.h2>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
                <div className="contact-grid">
                    {/* Important: name attributes must match Google Form entry IDs (e.g. entry.123456) */}
                    <input
                        type="text"
                        name="entry.378332999"
                        placeholder="Name"
                        required
                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)' }}
                    />
                    <input
                        type="email"
                        name="entry.1428626862"
                        placeholder="Email"
                        required
                        style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)' }}
                    />
                </div>
                <textarea
                    name="entry.156916139"
                    rows="5"
                    placeholder="Message"
                    required
                    style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-primary)', fontFamily: 'inherit' }}
                ></textarea>

                <button
                    type="submit"
                    style={{
                        padding: '1rem',
                        background: 'var(--accent-color)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}
                >
                    Send Message
                </button>
                {status && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
            </motion.form>
        </section>
    );
};

export default Contact;
