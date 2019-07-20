import React from 'react';

import logo from '../assets/images/logo.png';

function Header() {
  return(
    <div className="header">
      <img src={logo} alt="logo do facebook" />

      <a href="#" className="profile-link">
        <span>Meu perfil</span>
      </a>
    </div>
  );
}

export default Header;