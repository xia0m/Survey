import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';



class SurveyForm extends Component {

	renderFields(){
		return _.map(formFields,({label,name})=>{
			return <Field key={name} component={SurveyField} type="text" label = {label} name={name} />
		
		});
	}
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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
	_.each(formFields,({name})=>{
		if(!values[name]){
			errors[name] = 'You must provide a value'
		}
	});

	errors.recipients = validateEmails(values.recipients || '');

	return errors;
}

export default reduxForm({
		validate,
		form:'surveyForm',
		destroyOnUnmount:false
})(SurveyForm);
