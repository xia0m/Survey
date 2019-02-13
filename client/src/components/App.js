import React,{Component} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';



import Dashboard from './Dashboard/'
import SurveyNew from './surveys/SurveyNew';
import Emails from '../containers/Emails/';
import Templates from '../containers/Templates/';

import Navbar from './AdminHeader/Navbar';
import Footer from './AdminFooter/Footer';
import AddButton from './AddButton/';


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
						<div className='grey lighten-4'>
					
						<Route exact path="/" render={()=>(
							(this.props.auth!==null && this.props.auth!==false) ? (
								<Redirect to='/dashboard' />
							):(
								<Landing />
							)
						)} />
						{console.log('auth is ',this.props.auth)}
								{	(this.props.auth!==false) ? (
								<div>
									<Navbar />
									<Route exact path="/dashboard" component={Dashboard} />
									<Route exact path="/surveys" component={Emails} />
									<Route exact path="/templates" component={Templates} />							
									<Route path="/surveys/new" component={SurveyNew} />
									<Footer />
									<AddButton />
								</div>)
								:
								<Redirect to='/' />
								}
							
						</div>
           </BrowserRouter>
        </div>
		);
		}
};

function mapStateToProps({auth}){
	return {auth};
}


export default connect(mapStateToProps,actions)(App);