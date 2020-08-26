import React from 'react';
import ReactDOM from 'react-dom';
import {Option} from '../components/Option';

export class Options extends React.Component {
  render() {
    return (
    <div>
    <h3>Выбор валют</h3>
    {this.props.values.map((item, i) =>
      <div key={i}> 
      <Option name={item.name} id={item.id} click={this.props.click} checked={item.checked} /> 
      </div> )}
    </div>
    )}    
}
  




