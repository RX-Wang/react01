import React            from 'react';
import ReactDOM         from 'react-dom';
import GetRouter        from './router';
import { createStore,applyMiddleware }  from 'redux';
import thunkMiddleware  from 'redux-thunk';
import { Provider }     from 'react-redux';
import rootReducer          from './reducers';  //所有的Reducer
//import App              from './containers/App'
const middleware = [thunkMiddleware];   //让我们可以使用异步的action
/**
 * createStore，接收reducer 创建 Redux store 来存放应用的状态。
 * API 是 { subscribe, dispatch, getState }。
 */
let store = createStore(
    rootReducer,
    //开启Redux Tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware)
);

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
