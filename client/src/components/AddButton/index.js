import React from 'react';

const AddButton =()=>(
  <div className="fixed-action-btn">
    <a className="btn-floating btn-large red">
      <i className="material-icons">add</i>
    </a>
    <ul>
      <li>
        <a href="#post-modal" className="modal-trigger btn-floating green">
          <i className="material-icons">mode_edit</i>
        </a>
      </li>
      <li>
        <a href="#credit-modal" className="modal-trigger btn-floating blue lighten-1">
          <i className="material-icons">attach_money</i>
        </a>
      </li>
    </ul>
  </div>
)

export default AddButton;