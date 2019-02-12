import React, { Component } from 'react';

import StatSection from '../StatCard/StatSection';
import RecentEmail from './RecentEmail';


class Dashboard extends Component{
  render(){
    return(
      <div>
        <StatSection />
        <RecentEmail />     
      </div>
    )
  }
}

export default Dashboard;