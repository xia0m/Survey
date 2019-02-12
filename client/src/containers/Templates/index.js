import React, { Component } from 'react';

import templateImage from '../../img/email-template.png';




class Templates extends Component{
  render(){
    return(
      <div className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 l6'>
            <div className='card'>
              <div className='card-image waves-effect waves-block waves-light'>
                <img className='activator' src={templateImage} alt='An email template' />
              </div>
              <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>Basic Template<i className='material-icons right'>more_vert</i></span>
                <p><a href='#'>Preview</a></p>
              </div>
              <div className='card-reveal'>
                <span className='card-title grey-text text-darken-4'>Basic Template<i className='material-icons right'>close</i></span>
                <p>The Email your customer will see.</p>
              </div>
            </div>
          </div>
        </div>   
      </div>
      </div>
      
    )
  }
}

export default Templates;