import React, { Component } from 'react';

import Navbar from './Navbar';

class Dashboard extends Component{
  render(){
    return(
      <div className="grey lighten-4">
        <Navbar />
      </div>
    )
  }
}

export default Dashboard;