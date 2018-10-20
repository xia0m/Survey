import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';


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
				<Link to="/surveys" className="red btn-flat white-text">
					Cancle
				</Link>
				<button type="submit" className="teal btn-flat right white-text">
				Next
				<i className="material-icons right">done</i>
				</button>
      </form>
    )
  }
}

function validate(values) {
	const errors = {};
	_.each(FORM_FIELD,({name})=>{
		if(!values[name]){
			errors[name] = 'You must provide a value'
		}
	});

	errors.emails = validateEmails(values.emails || '');

	return errors;
}

export default reduxForm({
		validate,
    form:'surveyForm'
})(SurveyForm);
