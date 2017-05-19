/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
class MyComponent extends React.Component{
    handleClick() {
        this.refs.myTextInput.focus();
        this.refs.myTextInput.value = '获取到了焦点';
    }
    render() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
}
export default MyComponent;