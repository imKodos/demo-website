import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
  <div className='hero-container'>
      <video src='/videos/teoswim.MP4' autoPlay loop muted />
      <h1> ADVENTURE AWAITS </h1>
      <p>Go Teo Go</p>
      <div className='.hero-btns'>
          <Button className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
              GET STARTED
          </Button>
          <Button className='btns'
           buttonStyle='btn--primary'
           buttonSize='btn--large'>
              WATCH TRAILER
          </Button>
      </div>
  </div>
 
  );
}

export default HeroSection;
