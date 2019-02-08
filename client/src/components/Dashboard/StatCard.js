import React from 'react';

const StatCard = ({cardStyle,iconName,cardName,cardNumber})=>(
  <div className='col s12 m6 l3'>
    <div className={`card-panel center lighten-2 text-lighten-5 ${cardStyle}`}>
      <i className='material-icons medium'>{iconName}</i>
      <h6>{cardName}</h6>
      <h4>{cardNumber}</h4>
    </div>
  </div>
)

export default StatCard;
