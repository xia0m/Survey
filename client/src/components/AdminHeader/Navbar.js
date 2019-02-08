import React,{Component}from 'react';

import NavbarItem from './NavbarItem'


class Navbar extends Component{
  render(){
    return(
      <nav className='purple lighten-1'>
        <div className='container'>
          <div className='nav-wrapper'>
            <a href='/surveys' className='brand-logo'>Ez Survey</a>

            <ul>
              <NavbarItem />
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
}

export default Navbar;