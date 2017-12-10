/**
 * Created by RX-Wang on 2016/12/21.
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from '../App/App';
import EditDom from '../component_params/edit_dom';
import FormDom from '../component_params/form_dom';
import Comp01   from '../component_params';
import Conditional   from '../component_params/Conditional';
import LiftingStateUp   from '../component_params/lifting-state-up';
import ReduxApp from '../containers/App';
import ReduxPerson from '../containers/Person'
import LifeCycle from '../containers/LifeCycle'
class GetRouter extends Component {
    render(){
        return (
            <Router history={hashHistory}>
                {/*根目录*/}
                <Route path="/" component={App}/>
                {/*规定RestFul风格的带参数的路由，然后在组件JS通过this.props.routeParams属性来获取*/}
                <Route path="getParams/:params0(/:params1)" component={Comp01} />
                {/*form表单提交*/}
                <Route path="/to-form" component={FormDom}/>
                <Route path="editDom" component={EditDom}>
                    {/*条件渲染*/}
                    <Route path="Conditional01/:p" component={Conditional}/>
                    <Route path="Conditional02/:p" component={Conditional}/>

                </Route>
                {/*条件渲染*/}
                <Route path="Conditional" component={Conditional}/>
                {/*状态提升*/}
                <Route path="lifting-state-up" component={LiftingStateUp}/>
                <Route path="redux" component={ReduxApp}/>
                <Route path="redux/person" component={ReduxPerson} />
                {/*生命周期实验*/}
                <Route path="lifeCycle" component={LifeCycle} />
            </Router>
        )
    }
}
export default GetRouter;
