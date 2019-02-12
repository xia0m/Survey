import React, { Component } from 'react';

import Navbar from '../AdminHeader/Navbar';
import StatSection from '../StatCard/StatSection';
import RecentEmail from './RecentEmail';
import Footer from '../AdminFooter/Footer';
import AddButton from '../AddButton/';

class Dashboard extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
        
        <StatSection />
        <RecentEmail />
        <Footer />
        <AddButton />
      </div>
    )
  }
}

export default Dashboard;