import React, { Component } from 'react';

import Navbar from '../AdminHeader/Navbar';
import StatSection from './StatSection';
import RecentEmail from './RecentEmail';
import Footer from './Footer';

class Dashboard extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
        <StatSection />
        <RecentEmail />
        <Footer />
      </div>
    )
  }
}

export default Dashboard;