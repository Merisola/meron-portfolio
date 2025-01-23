import React, { useEffect, useState } from 'react';
import '../Styles/header.css';

function Header() {
  const [bgColor, setBgColor] = useState('transparent');

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const skillsSection = document.getElementById('skills');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const aboutRect = aboutSection.getBoundingClientRect();
    const skillsRect = skillsSection.getBoundingClientRect();
    const projectsRect = projectsSection.getBoundingClientRect();
    const contactRect = contactSection.getBoundingClientRect();

    if (aboutRect.top >= 0 && aboutRect.bottom <= window.innerHeight) {
      setBgColor('rgba(0, 0, 0, 0.5)'); 
    } else if (skillsRect.top >= 0 && skillsRect.bottom <= window.innerHeight) {
      setBgColor('rgba(50, 50, 50, 0.7)'); 
    } else if (projectsRect.top >= 0 && projectsRect.bottom <= window.innerHeight) {
      setBgColor('rgba(0, 0, 128, 0.5)'); 
    } else if (contactRect.top >= 0 && contactRect.bottom <= window.innerHeight) {
      setBgColor('rgba(128, 0, 0, 0.5)'); 
    } else {
      setBgColor('transparent'); // 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ background: bgColor }}>
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="#about" aria-label="About Me">About Me</a></li>
          <li><a href="#skills" aria-label="My Skills">My Skills</a></li>
          <li><a href="#projects" aria-label="Projects">Projects</a></li>
          <li><a href="#contact" aria-label="Contact Me">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;