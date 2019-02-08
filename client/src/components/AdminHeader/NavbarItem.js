import React from 'react';

const NavbarItem = ()=>(
  <ul className='right'>
    <li class='active'>
      <a href='/dashboard'>Dashboard</a>
    </li>
    <li>
      <a href='/emails'>Emails</a>
    </li>
    <li>
      <a href='#'>Templates</a>
    </li>
    <li>
      <a href='#'>Users</a>
    </li>
  </ul>
)

export default NavbarItem;