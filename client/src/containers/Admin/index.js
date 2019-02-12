//admin folder
import React, {Component} from 'react';

import Navbar from '../../components/AdminHeader/Navbar';
import Footer from '../../components/AdminFooter/Footer';
import AddButton from '../../components/AddButton/';


class Admin extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Footer />
        <AddButton />
      </div>
    )
  }
}
 

export default Admin;
