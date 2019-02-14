import React,{Component} from 'react';
import {connect} from 'react-redux';

import StatCard from './StatCard';

class StatSection extends Component{

  render(){
    console.log(this.props.auth);
    const {auth} = this.props;
    return(
      <section className="section center">
        <div className="row">
          <StatCard 
            cardStyle={'red red-text'}
            iconName={'feedback'}
            cardName={'Feedbacks'}
            cardNumber={auth?auth.feedbacks:0}
          />
          <StatCard 
            cardStyle={'blue blue-text'}
            iconName={'email'}
            cardName={'Email Sent'}
            cardNumber={auth?auth.emailCount:0}
          />
          <StatCard 
            cardStyle={'teal teal-text'}
            iconName={'account_balance'}
            cardName={'Credits Avaliable'}
            cardNumber={auth?auth.credits:0}
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