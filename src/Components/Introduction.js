import React from 'react';
import '../Styles/introduction.css';  // Ensure you create a corresponding CSS file
import myPicture from '../images/photo.jpg'; 

const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="background-image">
        <img src={myPicture} alt="My Profile" className="profile-picture" />
        <div className="intro-text">
          <h2>Meron Solomon Tsegay</h2>
          <h3>Front-End Web Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Introduction;