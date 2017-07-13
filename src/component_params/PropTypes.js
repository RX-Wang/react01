/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
//需要把样式表单独提出来
const iStyle = {
  display : 'block'
};
const MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.object,
    },
    getDefaultProps(){
        return {
            title : <div>
                <i style={iStyle}>这是默认属性值，如果调用该组件时没有传值，</i>
                <i style={iStyle}>则显示这个,通过在 React.createClass()中设置：getDefaultProps()来完成。</i>
            </div>
        };
    },
    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});
export default MyTitle;