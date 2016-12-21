/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
var MyComponent = React.createClass({
    handleClick: function() {
        this.refs.myTextInput.focus();
        this.refs.myTextInput.value = '获取到了焦点';
    },
    render: function() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
});
export default MyComponent;