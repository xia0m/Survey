import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSurveys} from '../../actions';


class SurveyList extends Component {
	
	componentDidMount(){
		this.props.fetchSurveys();
	}

	renderSurveys(){
		return this.props.surveys.map(survey=>{
			return (
				<div className="col s12 m6 l6" key={survey._id}>
				<div className="card blue lighten-2 white-text" >
				
					<div className="card-content">
						<span className="card-title truncate">{survey.title}</span>
						<p className="truncate">{survey.body}</p>
						<p className="right">
							Sent on: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a href="#yes-click" className="white-text">Yes: {survey.yes}</a>
						<a href="#no-click" className="white-text">No: {survey.no}</a>
					</div>
				</div>
				</div>
			)
		})
	}
    
  render() {
    return (
      <div className="container">
				<div className="row">
        	{this.renderSurveys()}
      	</div>
			</div>
    )
  };
}

function mapStateToProps ({surveys}){
    return {
        surveys
    }
}

export default connect(mapStateToProps,{fetchSurveys})(SurveyList);
