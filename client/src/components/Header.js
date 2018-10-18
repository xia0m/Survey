import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {

    renderContent() {
        switch(this.props.auth){
            case null:
                return <div></div>;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default:
                return (
                    <li><a href="">Logout</a></li>
                );
        }
        
    }

    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Survey</a>
                <ul id="nav-mobile" className="right">
                    {this.renderContent()}
                </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Header);