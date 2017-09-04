import React, { Component } from 'react';
import {Link} from 'react-router';
import logo     from '../logo.svg';
import './App.css';
import User     from '../User';
//import Comp01   from '../component_params';
import NoteList from '../component_params/this.props.children';
import MyTitle  from '../component_params/PropTypes';
import MyComponent from '../component_params/ref_for_trueDom';
//import EditDom  from  '../component_params/edit_dom';
import LikeButton from '../component_params/this.state';
import Hello    from '../component_params/component_life';
import Toggle   from '../component_params/Toggle';

const disBlock = {display : "block"};
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
          <ul>
              <li>
                  {/*<a href="/#/getParams/我是一个形参(⊙o⊙)哦！！/我是另一个">通过组件标签中传参，然后在组件JS中获取参数</a>*/}
                  <Link to="/getParams/我是一个形参(⊙o⊙)哦！！/我是另一个">通过组件标签中传参，然后在组件JS中获取参数</Link>
              </li>
              <li>
                  {/*<a href="/#/editDom">动态编辑DOM</a>*/}
                  <Link to="/editDom">动态编辑DOM</Link>
              </li>
              <li>
                  {/*<a href="/#/Conditional">条件渲染</a>*/}
                  <Link to="/Conditional">条件渲染</Link>
              </li>
              <li>
                  <a href="/#/to-form">form表单提交</a>
              </li>
          </ul>
          <User />
          {/*<Comp01 params0="我是一个形参(⊙o⊙)哦！！" params1="我是另一个"/>*/}
          <NoteList>
              <span>we are</span>
              <span>child</span>
              <span>NODES</span>
              <i>通过向组件标签中传入子节点，然后在组件JS中通过 this.props.children 属性来获取</i>
          </NoteList>
          <MyTitle />
          <MyComponent/>
          {/*<EditDom/>*/}
          <LikeButton/>
          <Hello/>
          <Toggle/>
          {/*状态提升*/}
          <Link style={disBlock} to="/lifting-state-up">状态提升</Link>
          {/*redux 示例*/}
          <Link to="/redux">Redux App</Link>
      </div>
    );
  }
}

export default App;
