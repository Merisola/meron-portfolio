import React from "react";
import "../Styles/introduction.css"; 
import My_Profile from"../images/photo.jpg";

const Introduction = () => {
  return (
    <section className="introduction-container">
      <div className="profile-picture">
        <img src={My_Profile} alt="My Profile" />
      </div>
      <div className="intro-text">
        <h2>Meron Solomon Tsegay</h2>
        <h3>Full-Stack Developer| Virtual Assistant| Biomecial Engineer</h3>
      </div>
    </section>
  );
};

export default Introduction;
