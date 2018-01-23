import React, { Component, PropTypes } from 'react'
import * as lodash from 'lodash';

export default class IntervalRenderParent extends Component {
    arrayIsEqual(anArray, otherArray) {
        let flag = false;
        if (anArray.length === otherArray.length) {
          for (let i = 0; i < anArray.length; i++) {
            if (!lodash.isEqual(anArray[i], otherArray[i])) {
              return false;
            }
          }
          flag = true;
        }
        return flag;
      }
    shouldComponentUpdate(nextProps) {
        console.log('进来了');
        // console.log(this.arrayIsEqual([this.props.children],[nextProps.children]));
        // return this.props.children !== nextProps.children;
        return !this.arrayIsEqual([this.props.children],[nextProps.children]);
    }

    render() {
        return <div>Hello：{this.props.children} {this.props.age}</div>;
    }

}

IntervalRenderParent.propTypes = {
    children : PropTypes.element,
    age: PropTypes.number
 };