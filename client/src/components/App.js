import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';



import Dashboard from './Dashboard/'
import SurveyNew from './surveys/SurveyNew';
import Emails from '../containers/Emails/';
import Templates from '../containers/Templates/';


import Landing from './LandingPage/Landing';
// import LandingPage from './LandingPage/index';



import '../css/main.css'



class App extends Component {

	componentDidMount() {
		this.props.fetchUser();
	}


	render(){
    return(
        <div>
          <BrowserRouter>
						<div>
							<Route exact path="/" component={Landing} />
							<Route exact path="/surveys" component={Dashboard} />
							<Route exact path="/emails" component={Emails} />
							<Route exact path="/templates" component={Templates} />							
							<Route path="/surveys/new" component={SurveyNew} />
							
						</div>
           </BrowserRouter>
        </div>
		);
		}
};



export default connect(null,actions)(App);