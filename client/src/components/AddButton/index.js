import React from 'react';

import PaymentModal from '../Modal/PaymentModal';

const AddButton =()=>(
  <div className="fixed-action-btn">
    <a className="btn-floating btn-large red">
      <i className="material-icons">add</i>
    </a>
    <ul>
      <li>
        <a href="/surveys/new" className="btn-floating green">
          <i className="material-icons">mode_edit</i>
        </a>
      </li>
      <li>
        <PaymentModal />  
      </li>
    </ul>
  </div>
)

export default AddButton;