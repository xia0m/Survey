import React from 'react';

import TableHead from '../Table/TableHead';
import TableContent from '../Table/TableContent';


const RecentEmail = ()=>(
  <section className='section'>
    <div className='row'>
      <div className='col s12 l12 m12'>
        <div className='card'>
          <div className='card-content'>
            <span className='card-title'>Recent Emails</span>
            <table className='striped'>
              <TableHead />
              <TableContent />
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default RecentEmail