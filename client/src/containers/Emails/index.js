import React, { Component } from 'react';

import Navbar from '../../components/AdminHeader/Navbar';
import Footer from '../../components/AdminFooter/Footer';
import SurveyList from '../../components/surveys/SurveyList';

class Emails extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <SurveyList />
        <Footer />
      </div>
    )
  }
}

export default Emails;