import React, { Component, PropTypes } from 'react'
import { connect }                      from 'react-redux'
import {bindActionCreators}             from 'redux'

class GrandsonLifeCycleCom extends Component {
    static propTypes = {
        name : PropTypes.string,
    }
    createNode(text){
        const node = document.createElement("p");
        node.innerText = text;
        return node;
    }
    componentWillMount(){
        console.log('孙子组件willmount');
    }
    componentDidMount(){
        console.log('孙子组件didmount');
    }
    componentWillReceiveProps() {
        console.log('孙子组件componentWillReceiveProps--arguments:', arguments);
        // console.log('子组件WillReceiveProps---this.props:%s---nextProps:%s',JSON.stringify(this.props),JSON.stringify(nextProps));
    }
    shouldComponentUpdate() {
        console.log('孙子组件shouldComponentUpdate--arguments:', arguments);
        // console.log('子组件shouldComponentUpdate---nextProps:%s', JSON.stringify(nextProps));
        /* if(nextProps.name === '1111')
            return false; */
        return true;
    }
    componentWillUpdate(){
        console.log('孙子组件WillUpdate');
    }
    componentDidUpdate(){
        console.log('孙子组件DidUpdata');
    }

    render() {
        console.log('孙子组件渲染啦----');
        return (
            <div style={{border: '1px solid purple', margin:'10px'}}>
                <h1>我是孙子组件</h1>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}


function mapStateToProps({ lifeCycle }) {
    return { 
        ...lifeCycle
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(GrandsonLifeCycleCom);