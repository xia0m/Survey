import React,{Component} from 'react';
import {connect} from 'react-redux';

import StatCard from './StatCard';

class StatSection extends Component{

  render(){
    console.log(this.props.auth);
    return(
      <section className="section center">
        <div className="row">
          <StatCard 
            cardStyle={'red red-text'}
            iconName={'feedback'}
            cardName={'Feedbacks'}
            cardNumber={2}
          />
          <StatCard 
            cardStyle={'blue blue-text'}
            iconName={'email'}
            cardName={'Email Sent'}
            cardNumber={5}
          />
          <StatCard 
            cardStyle={'teal teal-text'}
            iconName={'account_balance'}
            cardName={'Credits Avaliable'}
            cardNumber={this.props.auth?this.props.auth.credits:0}
          />
          <StatCard 
            cardStyle={'green green-text'}
            iconName={'folder_open'}
            cardName={'Templates'}
            cardNumber={1}
          />
        </div>
     </section>
    )
  }
}

function mapStateToProps({auth}){
	return {auth};
}
  


export default connect(mapStateToProps,null)(StatSection);