import React from 'react';

const TableContent = ()=>(
  <tbody>
    <tr>
      <td>Email One</td>
      <td>Dec, 2018</td>
      <td>Yes</td>
      <td>
        <a href='/email' className='btn blue lighten-2'>Details</a>
      </td>
    </tr>
    <tr>
      <td>Email Two</td>
      <td>Jan, 2019</td>
      <td>No</td>
      <td>
        <a href='/email' className='btn blue lighten-2'>Details</a>
      </td>
    </tr>
    <tr>
      <td>Email Three</td>
      <td>Feb, 2019</td>
      <td>Yes</td>
      <td>
        <a href='/email' className='btn blue lighten-2'>Details</a>
      </td>
    </tr>
  </tbody>
)

export default TableContent;