import React,{Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header/';
// import Landing from './landing/Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Feature from './Feature/';
import Footer from './Footer/';
import LoginModal from './LoginModal';

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
						<Header />
						<Feature />
					
						
							{/* <Route exact path="/" component={Landing} /> */}
							<Route exact path="/surveys" component={Dashboard} />
							<Route path="/surveys/new" component={SurveyNew} />
							<Footer />
							<LoginModal />

							
						
						</div>
           </BrowserRouter>
        </div>
		);
		}
};



export default connect(null,actions)(App);