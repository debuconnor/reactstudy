import React from 'react';

function Header() {
  return <div className='header'>
      <h1>Header</h1>
      <div className='menu'>
          <a href="#" className='link'>Add day</a>
          <a href="#" className='link'>Add command</a>
      </div>
  </div>;
}

export default Header;
