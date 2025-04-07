import React from "react";
import "../Styles/about.css";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-text">
          <h2>Hi, I’m Meron Solomon</h2>
          <p>
            Full-Stack Developer, Virtual Assistant & Creative Problem-Solver!
          </p>
          <p>
            With a background in biomedical technology, graphic design, and
            digital marketing, I build intuitive, accessible, and impact-driven
            digital experiences. I specialize in front-end development, UI/UX
            design, and virtual assistance, blending creativity with strong
            technical skills to solve real-world challenges.
          </p>
          <p>
            I'm passionate about inclusivity and efficiency—whether it's writing
            clean code, designing seamless interfaces, or supporting businesses
            with virtual admin work, I always aim to create meaningful change.
          </p>
          <p>
            🔎 Currently seeking part-time or internship opportunities in
            front-end development or tech support roles where I can contribute,
            learn, and grow.
          </p>
          <p>If you’re looking for a developer or virtual assistant who is:</p>
          <ul>
            <li>Detail-oriented</li>
            <li>Adaptable & collaborative</li>
            <li>Mission-driven and technically skilled</li>
          </ul>
          <p>…let’s connect!</p>

          {/* pitch video */}
          <div className="video-container">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/iYBuQFRd1-o"
              title="Meron Solomon Pitch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/merontsegay/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/Merisola"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
