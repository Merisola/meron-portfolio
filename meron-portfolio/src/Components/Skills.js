import React from 'react';
import '../Styles/skills.css'; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaReact, FaFigma, FaGit, FaGithub, FaMobileAlt, FaDesktop } from 'react-icons/fa'; // Add new icons
import { SiAdobexd, SiErpnext } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { category: 'Programming languages & Frameworks/Libraries', items: [
        { name: 'HTML5', icon: <FaHtml5 className="icon" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="icon" /> },
        { name: 'JavaScript (ES6+)', icon: <FaJsSquare className="icon" /> },
        { name: 'Python', icon: <FaPython className="icon" /> },
        { name: 'React.js', icon: <FaReact className="icon" /> }
      ] 
    },
    { category: 'Design Principles', items: [
        { name: 'Responsive Design', icon: <FaMobileAlt className="icon" /> },
        { name: 'Adaptive Design', icon: <FaDesktop className="icon" /> }
      ] 
    },
    { category: 'UI/UX Tools', items: [
        { name: 'Figma', icon: <FaFigma className="icon" /> },
        { name: 'Adobe Photoshop', icon: <SiAdobexd className="icon" /> },
        { name: 'Adobe Illustrator', icon: <SiAdobexd className="icon" /> }
      ] 
    },
    { category: 'Version Control', items: [
        { name: 'Git', icon: <FaGit className="icon" /> },
        { name: 'GitHub', icon: <FaGithub className="icon" /> }
      ] 
    },
    { category: 'Other Tools', items: [
        { name: 'CRM', icon: <SiErpnext className="icon" /> }
      ] 
    },
  ];  

  return (
    <section id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-category" key={skill.category}>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item.name}>
                  <div className="skill-icon-box">{item.icon}</div>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
