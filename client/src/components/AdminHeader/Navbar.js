import React,{Component}from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
          <li><a href='/#'>${this.props.auth&&this.props.auth.credits}</a></li>
          <li className='divider'></li>
          <li><a href='/api/logout'>Logout</a></li>
        </ul>
      </nav>
      
    )
  }
  
}

function mapStateToProps({auth}){
  return {auth};
}

export default withRouter(connect(mapStateToProps)(Navbar));