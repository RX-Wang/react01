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
                {/*规定RestFul风格的带参数的路由，然后在组件JS通过this.props.routeParams属性来获取*/}
                <Route path="/getParams/:params0(/:params1)" component={Comp01} />
                {/*编辑DOM*/}
                <Route path="/editDom" component={EditDom}/>
            </Router>
        )
    }
}
export default GetRouter;
