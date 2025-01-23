import React from 'react';
import '../Styles/contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href="mailto:meronsolomondana@gmail.com">meronsolomondana@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+251966125639">+251-966125639</a>
        </p>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;