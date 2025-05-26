import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Hassan Raza Ansari,</span> frontend developer based in USA.</h1>
        <p>I am a fronten ReactJs developer from Jamshedpur, India with 2 years of experience in multiple companies like WebAppLab.</p>
        <div className="hero-action">
           <div className="hero-connect">
             Connect with me
           </div>
           <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero