import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import { refreshDate } from '../actions';
import { bindActionCreators } from 'redux';

import {Table} from '../components/Table';
import {Options} from '../components/Options';

const mapStateToProps = state => { 
  return { date : state.reducer.date, 
           currencies : state.reducer.currencies } };

function mapDispatchToProps(dispatch) {
  return { 
    refreshDate : bindActionCreators(refreshDate, dispatch)
}}

class Content extends React.Component {

  constructor(props){
    super(props);
    this.props.refreshDate(this.props.date, this.props.currencies );
  }

  render() {
    let date_ = this.props.date;
    return (
      <div className="content">
        <h2>Котировки валют</h2>
        <p>
        <input type="date"  ref='date_' value={date_} onChange={this.onDateChange.bind(this)} />
        </p>
        <hr/>
        <Options values={this.props.currencies} click={this.onLabelClick.bind(this)} />
        <hr/>
        <Table values={this.props.currencies} />
      </div>
    )
  }
  
  onLabelClick(event){
     this.props.currencies.map((item,i) => { item.checked = document.getElementById(item.id).checked });
     this.setState({date : this.props.date, currencies : this.props.currencies});
  }

  onDateChange(event){
    this.props.refreshDate(ReactDOM.findDOMNode(this.refs.date_).value, this.props.currencies );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
