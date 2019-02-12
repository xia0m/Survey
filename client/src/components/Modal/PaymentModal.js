import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class PaymentModal extends Component{

  render(){
    return(
      <a>
        <StripeCheckout
          name='Survey'
          description='$5 for 5'
          amount={500}
          token={token=>this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}>
          
          <a className='btn-floating blue lighten-1'>
            <i className="material-icons">attach_money</i>
          </a>
        </StripeCheckout>
      </a>
    )
  }

}

export default connect(null,actions)(PaymentModal);