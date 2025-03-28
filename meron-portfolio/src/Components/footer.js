import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Meron Solomon. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yourprofile/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
