import React from 'react'
import Socials from '../utils/Socials';
import { socialLinks } from '../data/data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul>
      
      <Socials socialLinks={socialLinks} className="footer-icon" containerClass="footer-icons"/>
      
      
        <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer