import React from 'react';
import '../../node_modules/materialize-social/materialize-social.css';

const LoginModal = ()=>(
  <div id="login-modal" className="modal">
		<div className="modal-content center">
      <h4>Account Login</h4>
      <p>Login to access your account dashboard</p>
      <div>
        <a className="waves-effect waves-light btn social google"
          href="/auth/google">
          <i class="fa fa-google"></i> Sign in with google
        </a> 
      </div>
    </div>	
	</div>
)

export default LoginModal;