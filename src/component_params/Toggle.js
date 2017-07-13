/**
 * Created by wangxuquan on 2017/7/13.
 */
import React from 'react';
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = { isToggleOn : true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //写法一：
        /*
        this.setState({
            isToggleOn : !this.state.isToggleOn
        })
        */
        //写法二
        this.setState(currentState =>(
            {isToggleOn : !currentState.isToggleOn}
        ))
    }

    render(){
        return (
            <button onClick={this.handleClick}>点击按钮{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        )
    }

}

export default Toggle;