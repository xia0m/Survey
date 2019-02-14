import React,{Component} from 'react';

import StatCard from './StatCard';

class StatSection extends Component{

  render(){
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
            cardNumber={15}
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
  


export default StatSection;