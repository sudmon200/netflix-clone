import React from 'react';

import './Footer.scss';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__sm'>
        <p>Weaved by: Sudip Mondal</p>

        <a href='https://www.sudipmondal.com/sudmon200'>
          <img
            className='footer__smLogo'
            src='https://user-images.githubusercontent.com/71149670/95108042-58026300-0758-11eb-9d8b-fac036799f16.png'
            alt='Sudip Mondal'
          />
        </a>
        <a href='https://github.com/sudmon200'>
          <img
            className='footer__ghLogo'
            src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
            alt='github'
          />
        </a>
        <a href='https://www.linkedin.com/in/mondalsudip/'>
          <img
            className='footer__liLogo'
            src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg'
            alt='linkedIn'
          />
        </a>
      </div>
      <div className='footer__tmdb'>
        <p>Powered by:</p>
        <img
          className='footer__tmdbLogo'
          src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
          alt='TMDB'
        />
        <p className='footer__tmdbDisclaimer'>
          * This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </div>
  );
}

export default Footer;
