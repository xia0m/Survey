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
      <a href='/templates'>Templates</a>
    </li>
    <li>
      <a className='dropdown-trigger' data-target='user-dropdown' href='/users'>
        User<i className='material-icons right'>arrow_drop_down</i>
      </a>
    </li>
  </ul>
)

export default NavbarItem;