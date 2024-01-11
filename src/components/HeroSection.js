import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    const redirectToYouTubeVideo = () => {
        const youtubeVideoId = 'iLs8XlobvDY';
        const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;
        
        window.open(youtubeVideoUrl, '_blank');
    };
    

  return (
    <div className='hero-container'>
      <video src='./image/video6.mp4' autoPlay loop muted />
      <h1>ELITE EVENT SOLUTION HUB</h1>
      <p>Turning your vision into lasting memories through unforgettable events.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={redirectToYouTubeVideo}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

