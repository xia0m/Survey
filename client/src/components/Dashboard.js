import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import SurveyList from './surveys/SurveyList';
import Payments from './Payments';

const Dashboard = () => {
    return(
        <div>
            <a href="/api/logout">Logout</a>
            <Payments />
            <ul>
                {/* <li style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li> */}
            </ul>
            
            <SurveyList />

            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

function mapStateToProps({auth}){
    return {auth};
}

export default connect(mapStateToProps)(Dashboard);

