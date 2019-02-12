import React, { Component } from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';


import './style.css';

class SurveyNew extends Component {

	state={showFormReview:false};

	renderContent(){
		if(this.state.showFormReview){
			return <SurveyReview 
							onCancle={()=>this.setState({showFormReview:false})}
						/>;
		}

		return <SurveyForm onSurveySubmit={()=>this.setState({showFormReview:true})} />;
	}

  render() {
    return (
      <div className='grey lighten-4'>
				<div className='container'>
					<div className='card'>
						<div className='card-content survey-form'>
							{this.renderContent()}
						</div>
					</div>
				</div>
      </div>
    )
  }
}

export default reduxForm({
	form:'surveyForm'
})(SurveyNew);
