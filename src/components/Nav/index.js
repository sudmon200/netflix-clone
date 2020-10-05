import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

function Nav() {
  const [showNav, setShowNav] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else setShowNav(false);
      });
      return () => {
        window.removeEventListener('scroll');
      };
    });
  }, []);

  return (
    <div className={`${showNav ? 'showNav' : ''} nav`}>
      <a href={'/'}>
        <img
          className='nav__logo'
          src='https://brand.netflix.com/static/assets/icons/netflix_logo.svg'
          alt='Netflix Clone'
        />
      </a>
      <img
        className='nav__avatar'
        src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
        alt='Profile Avatar'
      />
    </div>
  );
}

export default Nav;
