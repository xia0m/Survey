import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchRecentSurveys} from '../../actions';

class TableContent extends Component{

  componentDidMount(){
    this.props.fetchRecentSurveys();
  }

  renderContent(){
    return this.props.surveys.map(entry=>{
      return(
        <tr id='entry._id'>
        <td>{entry.title}</td>
        <td>{new Date(entry.dateSent).toLocaleDateString()}</td>
        <td>{(entry.yes!==0||entry.no!==0)?'Yes':'No'}</td>
        <td>{new Date(entry.lastResponded).toLocaleDateString()}</td>
        <td>
          <Link to='/surveys' className='btn blue lighten-2'>Details</Link>
        </td>
      </tr>
      )
    })
  }


  render(){
    console.log('survey props is ',this.props.surveys);
    return(
      <tbody>
       {this.props.surveys.length!==0 ? 
        this.renderContent()
        : <tr><td>You have no surveys, pleae click the add button to add new surveys</td></tr>
      }
      </tbody>
    )
  }

}

function mapStateToProps ({surveys}){
  return {
      surveys
  }
}


export default connect(mapStateToProps,{fetchRecentSurveys})(TableContent);