import React from 'react';
import ReactDOM from 'react-dom';

export class Option extends React.Component {
  render() {
    return (
       <label>
      {this.props.checked? 
        <input type="checkbox" id={this.props.id} onClick={this.props.click} defaultChecked /> : 
        <input type="checkbox" id={this.props.id} onClick={this.props.click} /> 
      }
      {this.props.name}
      </label>
    )
  }
}
  
