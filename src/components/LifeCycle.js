import React, { Component, PropTypes } from 'react'

export default class LifeCycleCom extends Component {
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
    componentWillUpdate(){
        console.log('子组件WillUpdata');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件WillUpdata'));
    }
    componentDidUpdate(){
        console.log('子组件DidUpdata');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件DidUpdata'));
    }
    componentWillReceiveProps(nextProps) {
        console.log('子组件WillReceiveProps');
        this.refs.lifeCycleFlow.appendChild(this.createNode('子组件WillReceiveProps'));
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <input placeholder="输入姓名" type="text" ref="nameInput"/>
                <button onClick={ (e) => this.props.changeName(this.refs.nameInput.value)}>改变姓名</button>
                <div ref="lifeCycleFlow">

                </div>
            </div>
        )
    }
 

}

LifeCycleCom.propTypes = {
   name : PropTypes.string,
   changeName : PropTypes.func
};