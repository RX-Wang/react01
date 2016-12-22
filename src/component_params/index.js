/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';

const style01 = {
  display:'block'
};

var Com01 = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    Hello {this.props.routeParams.params0},and {this.props.routeParams.params1}
                </h1>
                <i style={style01}>
                    规定RestFul风格的带参数的路由,如:/getParams/:params0/:params1;
                </i>
                <i style={style01}>
                    然后在组件JS通过this.props.routeParams属性来获取，如:this.props.routeParams.params0
                </i>
            </div>
    )}
});


export default Com01;
