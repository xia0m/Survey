import React,{Component}from 'react';

const newObj = [
  {
    name:"Unlimited Users",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quo ipsum beatae rerum consequuntur maiores voluptates adipisci quaerat sint.",
    classKeyWords:"fa fa-user",
    id:1
  },{
    name:"Easy Survey Creation",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quo ipsum beatae rerum consequuntur maiores voluptates adipisci quaerat sint.",
    classKeyWords:"fa fa-envelope",
    id:2
  },{
    name:"Easy Payment",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deserunt quo ipsum beatae rerum consequuntur maiores voluptates adipisci quaerat sint.",
    classKeyWords:"fa fa-credit-card",
    id:3
  }
]

class FeatureContent extends Component {

  renderContent() {
    
    return newObj.map(entry=>
      <div className="col s12 m4" id={entry.id}>
        <h5>
          <i className={entry.classKeyWords}></i> {entry.name}
          <p>{entry.content}</p>
        </h5>
      </div>
    )
  }
  render(){
    return(
      <div className="row">
      {this.renderContent()}
      </div>
    )
  }

}

export default FeatureContent;
