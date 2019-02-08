import React from 'react';

import StatCard from './StatCard';

const StatSection = ()=>(
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
        iconName={'supervisor_account'}
        cardName={'Users'}
        cardNumber={2}
      />
      
    </div>
  </section>
)

export default StatSection;