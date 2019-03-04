import React from 'react';

const Showcase = () => {
  return (
      <div className="showcase container">
        <div className="row">
          <div className="coll s12 m10 offset-m1 center">
            <h5>Welcome to Ez Survey</h5>
            <h1>Collect Feedback</h1>
            <p>By using our intuitive interface to create Email survey, from your valued customer.</p>
            <br />
            <br />
            <a href="#aboutus" className="btn btn-large white purple-text">Learn More</a>
            <a href="#login-modal" className="btn btn-large purple modal-trigger">Sign Up</a>

          </div>
        </div>
    </div>
  )
};

export default Showcase;