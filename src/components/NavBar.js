import React from 'react';

import logo from '../Images/logo.svg';
import { pageLinks, socialLinks } from '../data/data'
import Socials from '../utils/Socials';
import Links from '../utils/Links';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
            <Links pageLinks={pageLinks} />
        </ul>
              
        <Socials socialLinks={socialLinks} className='nav-icon' containerClass='nav-icons'/>
      </div>
    </nav>
  )
}

export default NavBar