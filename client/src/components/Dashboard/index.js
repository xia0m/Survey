import React, { Component } from 'react';

import Navbar from './Navbar';
import StatSection from './StatSection';

class Dashboard extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
        <StatSection />
      </div>
    )
  }
}

export default Dashboard;