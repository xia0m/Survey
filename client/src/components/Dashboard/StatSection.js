import React from 'react';

import StatCard from './StatCard';

const StatSection = ()=>(
  <section className="section center">
    <div className="row">
      <StatCard />
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  </section>
)

export default StatSection;