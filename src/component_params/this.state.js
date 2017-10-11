/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
class LikeButton extends React.Component{
    constructor(...args){
        super(...args);
        this.state = {
            liked : true
        }
    }
    /*getInitialState() {
        return {liked: false};
    }*/

    handleClick (event) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        let text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick.bind(this)}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}
export default LikeButton;