import React from "react";
import "../Styles/about.css";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-text">
          <p>
            I am a passionate developer with experience in building web
            applications. My journey into tech started with an interest in
            programming, and I've since honed my skills in various languages and
            frameworks.
          </p>
          <p>
            I love solving problems and creating efficient, user-friendly
            solutions. In my free time, I enjoy exploring new technologies and
            contributing to open-source projects.
          </p>

          {/* Placeholder for pitch video */}
          <div className="video-placeholder">
            <p>Watch my pitch video here!</p>
            {/* Uncomment the line below to use an actual video source */}
            {/* <video controls width="100%">
              <source src="path_to_your_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
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
