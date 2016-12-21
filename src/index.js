/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

ReactDOM.render(
  <App /> ,document.getElementById('root')
);
*/
import React from 'react';
//import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
//import App from './App/App';
//import EditDom from './component_params/edit_dom';
import GetRouter from './router';
ReactDOM.render((
    <GetRouter/>
), document.getElementById('app'));