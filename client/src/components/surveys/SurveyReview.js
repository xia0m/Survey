import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';


const SurveyReview = ({onCancle, formValues,submitSurvey,history}) => {
    // console.log('formValues is ', formValues);
    const reviewFields = formFields.map(field=>{
        return (
            <div key={field.name} className='review-form'>
                <label>{field.label}</label>
                <h5>{formValues[field.name]}</h5>
                <div className='divider'></div>
            </div>
        );
    })
  return (
    <div>
        <h5>Please confirm your entries</h5>
        {reviewFields}

        <button className="yellow darken-3 white-text btn-flat"
            onClick={onCancle} >
            Back
        </button>
        <button className="green btn-flat right white-text"
            onClick={()=>submitSurvey(formValues,history)}>
            Send
            <i className="material-icons right">send</i>
        </button>
    </div>
  );
};

function mapStateToProps(state){
    
    return {
        formValues:state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions)(withRouter(SurveyReview));
