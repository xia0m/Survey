import React, { Component } from 'react';

import Navbar from '../../components/AdminHeader/Navbar';
import Footer from '../../components/AdminFooter/Footer';

class Templates extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
        
        <Footer />
      </div>
    )
  }
}

export default Templates;