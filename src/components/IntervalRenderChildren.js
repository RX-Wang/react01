import React, { Component } from 'react'
import IntervalRenderParent from './IntervalRenderParent';

export default class IntervalRenderChildren extends Component {
    constructor(props) {
        super(props);
        this.state={
            age : 10
        };
    }
    clickFunc(){
        console.log(111);
        this.setState({
            age : this.state.age + 1
        })
    }
   /*  shouldComponentUpdate(nextProps) {
        return this.props.children !== nextProps.children;
    } */

    render() {
        return (
            <div>
                <IntervalRenderParent age={this.state.age}>
                    <div>Children</div>
                </IntervalRenderParent>
                <button onClick={this.clickFunc.bind(this)}>click</button>
            </div>
        );
    }

}