import React, { useState } from 'react';
import './AboutUs.css'; 

function AboutUs() {
  const [showMissionDetails, setShowMissionDetails] = useState(false);
  const [showVisionDetails, setShowVisionDetails] = useState(false);

  const toggleMissionDetails = () => {
    setShowMissionDetails(!showMissionDetails);
    setShowVisionDetails(false);
  };

  const toggleVisionDetails = () => {
    setShowVisionDetails(!showVisionDetails);
    setShowMissionDetails(false);
  };

  return (
    <div className="about-us-container">
      <div className={`mission ${showMissionDetails ? 'active' : ''}`} onClick={toggleMissionDetails}>
        <h2>Mission</h2>
        {showMissionDetails && (
          <div className="details">
            <p>At LUXIFY, our mission is to curate unforgettable experiences that transcend expectations. 
                We are dedicated to orchestrating seamless events that reflect the unique visions and desires of our clients. 
                Through meticulous planning, creative innovation, and unwavering attention to detail, we aim to be the premier 
                event planning partner, creating cherished memories that last a lifetime.</p>
          </div>
        )}
      </div>

      <div className={`vision ${showVisionDetails ? 'active' : ''}`} onClick={toggleVisionDetails}>
        <h2>Vision</h2>
        {showVisionDetails && (
          <div className="details">
            <p>Empowering celebrations, fostering connections, and inspiring joy, we envision LUXIFY as the go-to event planning 
                brand synonymous with excellence and creativity. We strive to redefine the standard for event experiences by embracing diversity, 
                embracing sustainability, and consistently exceeding our clients' dreams. As we evolve, our vision is to be at the forefront of the 
                industry, setting trends, and making a lasting impact on every occasion we touch.</p>
          </div>
        )}
      </div>
      <div className="team-container">
        <h2>Our Team</h2>
       
       <div className="team-member">
          <img src="./image/1.jpeg" alt="Team Member 1" />
          <p>Role: LUXIFY CEO</p>
          <p>Contribution: Came up with this service idea and created this website</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;


