import React, { Component, PropTypes } from 'react'
import GrandsonLifeCycleCom from './LifeCycle-grandson'

export default class LifeCycleCom extends Component {
    static propTypes = {
        name : PropTypes.string,
        changeName : PropTypes.func
    }
    createNode(text){
        const node = document.createElement("p");
        node.innerText = text;
        return node;
    }
    componentWillMount(){
        console.log('子组件willmount');
        //this.refs.lifeCycleFlow.appendChild("<p>子组件willmount</p>");
    }
    componentDidMount(){
        console.log('子组件didmount');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件didmount'));
    }
    componentWillReceiveProps(nextProps) {
        console.log('子组件WillReceiveProps---this.props:%s---nextProps:%s',JSON.stringify(this.props),JSON.stringify(nextProps));
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件WillReceiveProps'));
    }
    shouldComponentUpdate(nextProps) {
        console.log('子组件shouldComponentUpdate---nextProps:%s', JSON.stringify(nextProps));
        if(nextProps.name === '1111')
            return false;
        return true;
    }
    componentWillUpdate(){
        console.log('子组件WillUpdate');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件WillUpdate'));
    }
    componentDidUpdate(){
        console.log('子组件DidUpdata');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件DidUpdata'));
    }

    render() {
        console.log('我渲染啦----');
        return (
            <div style={{border: '1px solid black'}}>
                <h1>我是父组件</h1>
                <h4>{this.props.name}</h4>
                <input placeholder="输入姓名" type="text" ref="nameInput"/>
                <button onClick={ (e) => this.props.changeName(this.refs.nameInput.value)}>改变姓名</button>
                <GrandsonLifeCycleCom />
                <div ref="lifeCycleFlow">

                </div>
            </div>
        )
    }
 

}