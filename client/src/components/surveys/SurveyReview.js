import React from 'react';

const SurveyReview = ({onCancle}) => {
  return (
    <div>
        <h5>Please confirm your entries</h5>
        <button className="yellow darken-3 btn-flat"
            onClick={onCancle} >
            Back
        </button>
    </div>
  );
};

export default SurveyReview;
