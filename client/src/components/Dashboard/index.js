import React, { Component } from 'react';

import Navbar from './Navbar';
import StatSection from './StatSection';
import RecentEmail from './RecentEmail';

class Dashboard extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
        <StatSection />
        <RecentEmail />
      </div>
    )
  }
}

export default Dashboard;