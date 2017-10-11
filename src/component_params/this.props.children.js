/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
class NotesList extends React.Component{
    render() {
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
}
export default NotesList;