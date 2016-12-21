/**
 * Created by RX-Wang on 2016/12/21.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../App/App';
import EditDom from '../component_params/edit_dom';
import Comp01   from '../component_params';
class GetRouter extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                {/*根目录*/}
                <Route path="/" component={App}/>
                {/*通过组件标签中传参，然后在组件JS中获取参数*/}
                <Route path="/getParams" component={Comp01} params0="我是一个形参(⊙o⊙)哦！！" params1="我是另一个"/>
                {/*编辑DOM*/}
                <Route path="/editDom" component={EditDom}/>
            </Router>
        )
    }
}
export default GetRouter;
