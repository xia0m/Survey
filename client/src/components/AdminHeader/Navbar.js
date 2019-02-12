import React,{Component}from 'react';

import NavbarItem from './NavbarItem'

class Navbar extends Component{
  render(){
    return(
      
      <nav className='purple lighten-1'>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href='/dashboard' className='brand-logo'>Ez Survey</a>
            <NavbarItem />
          </div>
        </div>
        <ul id='user-dropdown' className='dropdown-content'>
          <li><a href='/profile'>Profile</a></li>
          <li className='divider'></li>
          <li><a href='/'>Logout</a></li>
        </ul>
      </nav>
      
    )
  }
  
}

export default Navbar;