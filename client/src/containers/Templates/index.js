import React, { Component } from 'react';

import templateImage from '../../img/email-template.png';




class Templates extends Component{
  render(){
    return(
      <div className='main-content'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m6 l6'>
            <div class='card'>
              <div class='card-image waves-effect waves-block waves-light'>
                <img class='activator' src={templateImage} alt='An email template' />
              </div>
              <div class='card-content'>
                <span class='card-title activator grey-text text-darken-4'>Basic Template<i class='material-icons right'>more_vert</i></span>
                <p><a href='#'>Preview</a></p>
              </div>
              <div class='card-reveal'>
                <span class='card-title grey-text text-darken-4'>Basic Template<i class='material-icons right'>close</i></span>
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