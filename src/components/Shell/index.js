import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

function Shell(props) {
  return (
    <div>
      <Nav />
      <main className='content'>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Shell;
