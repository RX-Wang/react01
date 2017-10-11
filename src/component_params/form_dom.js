/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
import { browserHistory } from 'react-router';
class FormDom extends React.Component{
    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        browserHistory.push(path)
    }
    render(){
        return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="userName"/>
          <input type="text" placeholder="repo"/>
          <button type="submit">Go</button>
        </form>
        )
    }
}

export default FormDom;