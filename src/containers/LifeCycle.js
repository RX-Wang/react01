import React, { Component, PropTypes }  from 'react'
import { connect }                      from 'react-redux'
import {bindActionCreators}             from 'redux'
import LifeCycleComp                    from '../components/LifeCycle'
import {changeName } from '../actions'
class LifeCycleCon extends Component {
    render() {
        return (
            <div>
                <LifeCycleComp 
                    name={this.props.name}
                    changeName={this.props.changeName}
                />
            </div>
        )
    }
}

LifeCycleCon.propTypes={
    name : PropTypes.string,
    changeName : PropTypes.func
};

function mapStateToProps({ lifeCycle }) {
    return { 
        ...lifeCycle
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeName
    }, dispatch);
}


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps,mapDispatchToProps)(LifeCycleCon);