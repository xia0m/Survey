import React from 'react';
import {NavLink} from 'react-router-dom';

const NavbarItem = ({location})=>(
  // <ul className='right'>
  //   <li class='active'>
  //     <a href='/dashboard'>Dashboard</a>
  //   </li>
  //   <li>
  //     <a href='/surveys'>Surveys</a>
  //   </li>
  //   <li>
  //     <a href='/templates'>Templates</a>
  //   </li>
  //   <li>
  //     <a className='dropdown-trigger' data-target='user-dropdown' href='/users'>
  //       User<i className='material-icons right'>arrow_drop_down</i>
  //     </a>
  //   </li>
  // </ul>
  <ul className='right'>
    <li>
      <NavLink 
        exact 
        activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} 
        to='/dashboard'>
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink 
        activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.1)'}} 
        to='/surveys'>
        Surveys
      </NavLink>
    </li>
    <li>
      <NavLink 
        exact
        activeStyle={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}
        to='/templates'>
        Templates
      </NavLink>
    </li>
  </ul>
)

export default NavbarItem;