import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

import FloatingIconsBackground from './components/FloatingIconsBackground';
import Mascot from './components/Mascot';

function App() {
    return (
        <div className="app">
            <FloatingIconsBackground />
            <Navbar />
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Awards />
            <Contact />
            <Footer />
            <Mascot />
        </div>
    );
}

export default App;
