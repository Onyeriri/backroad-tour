import React from 'react'
import Socials from '../utils/Socials';
import { footerLinks, socialLinks } from '../data/data';
import Links from '../utils/Links';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
      <Links pageLinks={footerLinks} />
      </ul>
      <Socials socialLinks={socialLinks} className="footer-icon" containerClass="footer-icons"/>
      
      
        <p className="copyright">
        copyright &copy; Backroads {new Date().getFullYear()} travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer