import React from 'react';
import ReactDOM from 'react-dom';

export class Table extends React.Component {
  render() {
    return (
        <div>
        <table>
        <tbody>
        <tr>
        <td><b>Валюта</b></td>
        <td><b>Курс</b></td>
        </tr>
        {this.props.values.map((item, i) => item.checked > 0 &&  <tr key={i}> <td>{item.name}</td> <td>{item.value}</td> </tr>)}
        </tbody>
        </table>
      </div>
    )
  }
}
  
