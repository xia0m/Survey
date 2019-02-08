import React from 'react';

import Location from './Location';
import SiteLink from './SiteLink';

const Footer = ()=>(
  <footer class="page-footer deep-purple lighten-1">
    <div class="container">
      <div class="row">
        <Location />
        <SiteLink />
      </div>
    </div>
    <div class="footer-copyright deep-purple darken-1">
      <div class="container">
        Ez Survey &copy; 2018
        <a class="grey-text text-lighten-4 right" href="#!">Terms & Conditions</a>
      </div>
    </div>
  </footer>
)

export default Footer;
