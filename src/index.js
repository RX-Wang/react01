/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import './index.css';

ReactDOM.render(
  <App /> ,document.getElementById('root')
);
*/
import React            from 'react';
//import { Router, Route, hashHistory } from 'react-router';
import ReactDOM         from 'react-dom';
//import App from './App/App';
//import EditDom from './component_params/edit_dom';
import GetRouter        from './router';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import todoApp          from './reducers';
import App              from './containers/App'


let store = createStore(todoApp);

/**
 * 配上 Redux 的方式
 */
ReactDOM.render((
    <Provider  store={store}>
        <GetRouter/>
    </Provider>
), document.getElementById('app'));



/*  无 Redux 的情况
ReactDOM.render((
    <GetRouter/>
), document.getElementById('app'));*/
