import React from 'react';

const Header = () => {
  return (
  <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      <a><h2 className='logo'>Ahmed</h2></a>
      <a className='cv'  href="/img/New CV.pdf" download>Download CV</a>

      </div>
    </div>

  </header>
  )
};

export default Header;
