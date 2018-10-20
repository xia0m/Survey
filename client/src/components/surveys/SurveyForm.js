import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';


const FORM_FIELD = [
	{label:"Title", name:'title'},
	{label:"Subject", name:'subject'},
	{label:"Body", name:'body'},
	{label:"Recipients List", name:'emails'},
];

class SurveyForm extends Component {

	renderFields(){
		return _.map(FORM_FIELD,({label,name})=>{
			return <Field key={name} component={SurveyField} type="text" label = {label} name={name} />
		
		});
	}
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values=>console.log(values))}>
				{this.renderFields()}
				<button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyForm);
