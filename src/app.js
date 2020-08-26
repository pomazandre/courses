import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import Content from './components/Content';
import Table from './components/Table';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers  from './reducers';
import iniState from './reducers';

const refreshDate = store => next => action => {
  if (action.type === "REFRESH_DATE"){
    let doc;
    action.currencies = [];
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {  
      if (req.readyState == 4) { 
        if(req.status == 200) { 
          doc = req.responseXML;
          let itemTagsName  = doc.getElementsByTagName("Name");
          let itemTagsValue = doc.getElementsByTagName("Value");
          let itemTagsId = doc.getElementsByTagName("CharCode");
          for (let i = 0; i < itemTagsName.length; i++) {
              action.currencies.push({name : itemTagsName[i].childNodes[0].nodeValue,
                                    value : itemTagsValue[i].childNodes[0].nodeValue,        
                                    id : itemTagsId[i].childNodes[0].nodeValue,
                                    checked : true});
          }
          return next(action); 
       }  
    }
   }
   let buf_str = action.date;
   buf_str.replace(/\-/gi, '/');
   let req_str = buf_str.substr(8,2) + "/" + buf_str.substr(5,2) + "/" + buf_str.substr(0,4); 
   req.open('GET', "http://www.cbr.ru/scripts/XML_daily.asp?date_req=" + req_str, true);  
   req.send(null);   
  }
}

export const store = createStore(combineReducers(reducers), iniState, applyMiddleware(refreshDate));

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Content/>
    </App>
  </Provider>,
  document.getElementById('root')
);
