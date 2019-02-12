import React, { Component } from 'react';

import SurveyList from '../../components/surveys/SurveyList';

class Emails extends Component{
  render(){
    return(
      <div className='main-content'>
        <SurveyList />
      </div>
    )
  }
}

export default Emails;