/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) {
                        return <h3>{child}</h3>;
                    })
                }
            </ol>
        );
    }
});
export default NotesList;