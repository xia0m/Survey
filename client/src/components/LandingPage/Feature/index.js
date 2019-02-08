import React from 'react';

import FeatureTitle from './FeatureTitle';
import FeatureContent from './FeatureContent';
import ContactUs from './ContactUs';

const Features = () =>(
  <section className="section section-features grey lighten-3">
      <div className="container">
        <FeatureTitle />
        <FeatureContent />
        <ContactUs />
        
      </div>
    </section>
)

export default Features;