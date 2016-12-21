import React, { Component } from 'react';
import logo     from '../logo.svg';
import './App.css';
import User     from '../User';
import Comp01   from '../component_params';
import NoteList from '../component_params/this.props.children';
import MyTitle  from '../component_params/PropTypes';
import MyComponent from '../component_params/ref_for_trueDom';
import EditDom  from  '../component_params/edit_dom';
import LikeButton from '../component_params/this.state'
import Hello    from '../component_params/component_life'
const title = 123456;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit
                <code> src/App.js </code>
            and save to reload.
        </p>
          <User />
          <Comp01 params0="我是一个形参(⊙o⊙)哦！！" params1="我是另一个"/>
          <NoteList>
              <span>we are</span>
              <span>child</span>
              <span>NODES</span>
              <i>通过向组件标签中传入子节点，然后在组件JS中通过 this.props.children 属性来获取</i>
          </NoteList>
          <MyTitle />
          <MyComponent/>
          <EditDom/>
          <LikeButton/>
          <Hello/>
      </div>
    );
  }
}

export default App;
